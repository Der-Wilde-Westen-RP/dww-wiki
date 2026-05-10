<template>
  <a href="https://status.der-wilde-westen-rp.de" target="_blank" class="status-badge">
    <span class="dot" :class="statusClass"></span>
    <span class="label">{{ statusText }}</span>
  </a>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const statusClass = ref('green')
const statusText = ref('Alle Systeme operational')

onMounted(async () => {
  try {
    const res = await fetch('https://status.der-wilde-westen-rp.de/api/status-page/heartbeat/der-wilde-westen-rp')
    const data = await res.json()
    const hasIssue = data.heartbeatList &&
        Object.values(data.heartbeatList).some(list => {
          const latest = list[list.length - 1]
          return latest?.status === 0
        })
    if (hasIssue) {
      statusClass.value = 'red'
      statusText.value = 'Störung'
    }
  } catch {
    statusClass.value = 'grey'
    statusText.value = 'Unbekannt'
  }
})
</script>

<style scoped>
.status-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  font-size: 0.85rem;
  color: var(--vp-c-text-1);
  padding: 0 12px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.dot.green {
  background: #22c55e;
  animation: pulse-green 2s infinite;
}

.dot.red {
  background: #ef4444;
  animation: pulse-red 2s infinite;
}

.dot.grey {
  background: #6b7280;
}

@keyframes pulse-green {
  0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
  70% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
  100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
}

@keyframes pulse-red {
  0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
  70% { box-shadow: 0 0 0 8px rgba(239, 68, 68, 0); }
  100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
}
</style>