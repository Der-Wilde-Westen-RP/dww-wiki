<template>
  <div class="keyboard-bindings">
    <div class="keyboard-shell">
      <div class="keyboard keyboard--top">
        <div class="keyboard-row">
          <template v-for="cell in topRow" :key="cell.id">
            <div
                v-if="cell.kind === 'spacer'"
                class="key key--spacer"
                :style="cellStyle(cell)"
            />
            <div
                v-else
                class="key"
                :class="{ 'key--bound': Boolean(bindingByKeyLabel[cell.label]) }"
                :style="cellStyle(cell)"
            >
              <span class="key__label">{{ cell.label }}</span>

              <div v-if="bindingByKeyLabel[cell.label]" class="tooltip" role="tooltip">
                <div class="tooltip__title">{{ cell.label }}</div>
                <div class="tooltip__text">{{ bindingByKeyLabel[cell.label].description }}</div>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="keyboard-grid">
        <div class="keyboard keyboard--main">
          <div v-for="(row, rowIndex) in mainRows" :key="`main-${rowIndex}`" class="keyboard-row">
            <template v-for="cell in row" :key="cell.id">
              <div
                  v-if="cell.kind === 'spacer'"
                  class="key key--spacer"
                  :style="cellStyle(cell)"
              />
              <div
                  v-else
                  class="key"
                  :class="{ 'key--bound': Boolean(bindingByKeyLabel[cell.label]) }"
                  :style="cellStyle(cell)"
              >
                <span class="key__label">{{ cell.label }}</span>

                <div v-if="bindingByKeyLabel[cell.label]" class="tooltip" role="tooltip">
                  <div class="tooltip__title">{{ cell.label }}</div>
                  <div class="tooltip__text">{{ bindingByKeyLabel[cell.label].description }}</div>
                </div>
              </div>
            </template>
          </div>
        </div>

        <div class="keyboard keyboard--nav">
          <div v-for="(row, rowIndex) in navRows" :key="`nav-${rowIndex}`" class="keyboard-row">
            <template v-for="cell in row" :key="cell.id">
              <div
                  v-if="cell.kind === 'spacer'"
                  class="key key--spacer"
                  :style="cellStyle(cell)"
              />
              <div
                  v-else
                  class="key"
                  :class="{ 'key--bound': Boolean(bindingByKeyLabel[cell.label]) }"
                  :style="cellStyle(cell)"
              >
                <span class="key__label">{{ cell.label }}</span>

                <div v-if="bindingByKeyLabel[cell.label]" class="tooltip" role="tooltip">
                  <div class="tooltip__title">{{ cell.label }}</div>
                  <div class="tooltip__text">{{ bindingByKeyLabel[cell.label].description }}</div>
                </div>
              </div>
            </template>
          </div>

          <div class="keyboard-arrows">
            <div class="keyboard-row">
              <div class="key key--spacer" :style="{ width: `${1 * keyUnit}rem` }" />
              <div
                  class="key"
                  :class="{ 'key--bound': Boolean(bindingByKeyLabel['Up']) }"
                  :style="{ width: `${1 * keyUnit}rem`, height: `${keyRowHeight}rem` }"
              >
                <span class="key__label">Up</span>
                <div v-if="bindingByKeyLabel['Up']" class="tooltip" role="tooltip">
                  <div class="tooltip__title">Up</div>
                  <div class="tooltip__text">{{ bindingByKeyLabel['Up'].description }}</div>
                </div>
              </div>
              <div class="key key--spacer" :style="{ width: `${1 * keyUnit}rem` }" />
            </div>

            <div class="keyboard-row">
              <div
                  v-for="label in ['Left', 'Down', 'Right']"
                  :key="label"
                  class="key"
                  :class="{ 'key--bound': Boolean(bindingByKeyLabel[label]) }"
                  :style="{ width: `${1 * keyUnit}rem`, height: `${keyRowHeight}rem` }"
              >
                <span class="key__label">{{ label }}</span>
                <div v-if="bindingByKeyLabel[label]" class="tooltip" role="tooltip">
                  <div class="tooltip__title">{{ label }}</div>
                  <div class="tooltip__text">{{ bindingByKeyLabel[label].description }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="keyboard keyboard--numpad">
        <div class="numpad-grid">
          <div
              v-for="cell in numpadCells"
              :key="cell.id"
              class="key"
              :class="{ 'key--bound': Boolean(bindingByKeyLabel[cell.label]) }"
              :style="numpadCellStyle(cell)"
          >
            <span class="key__label">{{ cell.label }}</span>
            <div v-if="bindingByKeyLabel[cell.label]" class="tooltip" role="tooltip">
              <div class="tooltip__title">{{ cell.label }}</div>
              <div class="tooltip__text">{{ bindingByKeyLabel[cell.label].description }}</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div class="divider"></div>

    <div class="bindings">
      <div class="bindings__title">Tastenzuweisungen</div>

      <div v-if="bindings.length === 0" class="bindings__empty">
        No bindings provided
      </div>

      <ul v-else class="bindings__list">
        <li v-for="(binding, index) in bindings" :key="index" class="bindings__item">
          <span class="bindings__key">{{ binding.keyLabel }}</span>
          <span class="bindings__desc">{{ binding.description }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type KeyBinding = {
  keyLabel: string
  description: string
}

type KeyCell = {
  id: string
  label: string
  units: number
  heightUnits?: number
  kind?: 'key' | 'spacer'
}

type Props = {
  bindingsProp?: string
}

const props = defineProps<Props>()

const keyUnit = 1.75
const keyGap = .2
const keyRowHeight = 1.75

const bindings = computed<KeyBinding[]>(() => {
  const raw = props.bindingsProp?.trim()
  if (!raw) {
    return []
  }

  try {
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) {
      return []
    }

    return parsed
        .map((item): KeyBinding | null => {
          if (!item || typeof item !== 'object') {
            return null
          }

          const record = item as Record<string, unknown>
          const keyLabel = typeof record.keyLabel === 'string' ? record.keyLabel : null
          const description = typeof record.description === 'string' ? record.description : null

          if (!keyLabel || !description) {
            return null
          }

          return { keyLabel, description }
        })
        .filter((item): item is KeyBinding => Boolean(item))
  } catch {
    return []
  }
})

const bindingByKeyLabel = computed<Record<string, KeyBinding>>(() => {
  const map: Record<string, KeyBinding> = {}
  for (const binding of bindings.value) {
    map[binding.keyLabel] = binding
  }
  return map
})

const cellStyle = (cell: KeyCell) => {
  const heightUnits = cell.heightUnits ?? 1
  const height = heightUnits === 1
      ? keyRowHeight
      : (keyRowHeight * heightUnits) + (keyGap * (heightUnits - 1))

  return {
    width: `${cell.units * keyUnit}rem`,
    height: `${height}rem`
  }
}

const key = (id: string, label: string, units = 1, heightUnits = 1): KeyCell => ({
  id,
  label,
  units,
  heightUnits,
  kind: 'key'
})

const spacer = (id: string, units: number): KeyCell => ({
  id,
  label: '',
  units,
  kind: 'spacer'
})

const topRow: KeyCell[] = [
  key('esc', 'Esc', 1),
  spacer('top-gap-1', 0.5),
  key('f1', 'F1', 1), key('f2', 'F2', 1), key('f3', 'F3', 1), key('f4', 'F4', 1),
  spacer('top-gap-2', 0.5),
  key('f5', 'F5', 1), key('f6', 'F6', 1), key('f7', 'F7', 1), key('f8', 'F8', 1),
  spacer('top-gap-3', 0.5),
  key('f9', 'F9', 1), key('f10', 'F10', 1), key('f11', 'F11', 1), key('f12', 'F12', 1)
]

const mainRows: KeyCell[][] = [
  [
    key('r1-1', '^'), key('r1-2', '1'), key('r1-3', '2'), key('r1-4', '3'), key('r1-5', '4'),
    key('r1-6', '5'), key('r1-7', '6'), key('r1-8', '7'), key('r1-9', '8'), key('r1-10', '9'),
    key('r1-11', '0'), key('r1-12', 'ß'), key('r1-13', '´'), key('r1-14', 'Backspace', 2.2)
  ],
  [
    key('r2-1', 'Tab', 1.5), key('r2-2', 'Q'), key('r2-3', 'W'), key('r2-4', 'E'), key('r2-5', 'R'),
    key('r2-6', 'T'), key('r2-7', 'Z'), key('r2-8', 'U'), key('r2-9', 'I'), key('r2-10', 'O'),
    key('r2-11', 'P'), key('r2-12', 'Ü'), key('r2-13', '+'), key('r2-14', '#', 1.7)
  ],
  [
    key('r3-1', 'Caps', 1.75), key('r3-2', 'A'), key('r3-3', 'S'), key('r3-4', 'D'), key('r3-5', 'F'),
    key('r3-6', 'G'), key('r3-7', 'H'), key('r3-8', 'J'), key('r3-9', 'K'), key('r3-10', 'L'),
    key('r3-11', 'Ö'), key('r3-12', 'Ä'), key('r3-13', 'Enter', 2.6)
  ],
  [
    key('r4-1', 'Shift', 1.25), key('r4-2', '<'), key('r4-3', 'Y'), key('r4-4', 'X'), key('r4-5', 'C'),
    key('r4-6', 'V'), key('r4-7', 'B'), key('r4-8', 'N'), key('r4-9', 'M'), key('r4-10', ','),
    key('r4-11', '.'), key('r4-12', '-'), key('r4-13', 'Shift', 3.1)
  ],
  [
    key('r5-1', 'Ctrl', 1.55), key('r5-2', 'Win', 1.25), key('r5-3', 'Left-Alt', 1.75),
    key('r5-4', 'Space', 7.5),
    key('r5-5', 'Right-Alt', 1.95), key('r5-6', 'Menu', 1.25), key('r5-7', 'Ctrl', 1.15)
  ]
]

const navRows: KeyCell[][] = [
  [key('nav-1', 'Ins'), key('nav-2', 'Home'), key('nav-3', 'PgUp')],
  [key('nav-4', 'Del'), key('nav-5', 'End'), key('nav-6', 'PgDn')]
]

type NumpadCell = {
  id: string
  label: string
  col: number
  row: number
  colSpan?: number
  rowSpan?: number
}

const numpadCells: NumpadCell[] = [
  { id: 'np-num', label: ' Num', col: 1, row: 1 },
  { id: 'np-/', label: ' /', col: 2, row: 1 },
  { id: 'np-*', label: ' *', col: 3, row: 1 },
  { id: 'np--', label: ' -', col: 4, row: 1 },

  { id: 'np-7', label: ' 7', col: 1, row: 2 },
  { id: 'np-8', label: ' 8', col: 2, row: 2 },
  { id: 'np-9', label: ' 9', col: 3, row: 2 },
  { id: 'np-+', label: ' +', col: 4, row: 2, rowSpan: 2 },

  { id: 'np-4', label: ' 4', col: 1, row: 3 },
  { id: 'np-5', label: ' 5', col: 2, row: 3 },
  { id: 'np-6', label: ' 6', col: 3, row: 3 },

  { id: 'np-1', label: ' 1', col: 1, row: 4 },
  { id: 'np-2', label: ' 2', col: 2, row: 4 },
  { id: 'np-3', label: ' 3', col: 3, row: 4 },
  { id: 'np-enter', label: ' Enter', col: 4, row: 4, rowSpan: 2 },

  { id: 'np-0', label: ' 0', col: 1, row: 5, colSpan: 2 },
  { id: 'np-.', label: ' .', col: 3, row: 5 }
]

const numpadCellStyle = (cell: NumpadCell) => {
  const colSpan = cell.colSpan ?? 1
  const rowSpan = cell.rowSpan ?? 1

  return {
    width: `${colSpan * keyUnit + (colSpan - 1) * keyGap}rem`,
    height: `${rowSpan * keyRowHeight + (rowSpan - 1) * keyGap}rem`,
    gridColumn: `${cell.col} / span ${colSpan}`,
    gridRow: `${cell.row} / span ${rowSpan}`
  }
}
</script>

<style scoped>
.keyboard-bindings {
  display: grid;
  gap: 0.625rem;
}

.keyboard-shell {
  display: grid;
  gap: 0.625rem;

}

.keyboard-grid {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: start;
}

.divider {
  height: 0.0625rem;
  background: #2a2a2a;
}

/* =========================
   Keyboard Base
========================= */

.keyboard {
  display: grid;
  gap: 0.25rem;
  padding: 0.5rem;
  border: 1px solid #2a2a2a;
  border-radius: 0.25rem;
  background: #121212;
}

.keyboard-row {
  display: flex;
  gap: 0.3rem;
}

/* =========================
   Keys
========================= */

.key {
  position: relative;
  box-sizing: border-box;
  flex: 0 0 auto;

  padding: 0.375rem 0.2rem;
  border-radius: 0.2rem;
  border: 0.0625rem solid #2a2a2a;
  background: #1a1a1a;

  color: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;
}

.key--bound {
  border-color: #ed9954;
  background: #37220e;
  box-shadow: 0 0 0 0.0625rem rgba(91, 140, 255, 0.3) inset;
}

.key--spacer {
  border-color: transparent;
  background: transparent;
  padding: 0;
}

.key__label {
  font-size: 0.55rem;
  line-height: 1;
  opacity: 0.95;
}

/* =========================
   Tooltip
========================= */

.tooltip {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 0.625rem);
  transform: translateX(-50%);
  z-index: 10;

  width: max-content;
  max-width: 16.25rem;

  padding: 0.625rem 0.75rem;
  border-radius: 0.625rem;
  border: 0.0625rem solid #2a2a2a;
  background: #0d0d0d;

  color: #ffffff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 120ms ease;

  box-shadow: 0 0.625rem 1.875rem rgba(0, 0, 0, 0.45);
}

.tooltip__title {
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.tooltip__text {
  font-size: 0.75rem;
  opacity: 0.9;
}

.key:hover .tooltip {
  opacity: 1;
}

/* =========================
   Arrow Block
========================= */

.keyboard-arrows {
  margin-top: 0.75rem;
  display: grid;
  gap: 0.5rem;
}

/* =========================
   Numpad
========================= */

.numpad-grid {
  display: grid;
  grid-template-columns: repeat(4, 1.75rem);
  grid-template-rows: repeat(5, 1.75rem);
  gap: 0.2rem;
}

/* =========================
   Bindings List
========================= */

.bindings {
  display: grid;
  gap: 0.5rem;
}

.bindings__title {
  font-weight: 600;
}

.bindings__list {
  margin: 0;
  padding: 0;
  list-style: none;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 0.25rem 0.5rem;
}

.bindings__item {
  display: flex;
  gap: 0.4rem;

  margin: 0;
  padding: 0.4rem 0.5rem;
  border-radius: 0.3rem;
  border: 1px solid #2a2a2a;
  background: #121212;

  align-items: center;
}

.bindings__key {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
  "Liberation Mono", "Courier New", monospace;
  font-size: 0.9rem;

  color: #ed9954;
  font-weight: 800;
  padding: 0.15rem 0.25rem;
  border-radius: 0.2rem;
  border: 1px solid #2a2a2a;
  background: #1a1a1a;

  width: fit-content;
}

.bindings__desc {
  font-size: 0.8125rem;
}
</style>
