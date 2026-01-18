import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Der Wilde Westen RP",
  description: "Offizielles Wiki des Red Dead Redemption 2 Servers \"Der Wilde Westen Roleplay\".",

  lastUpdated: true,
  cleanUrls: true,

  locales: {
    root: {
      label: 'Deutsch',
      lang: 'de'
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#871616' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'de' }],
    ['meta', { name: 'og:site_name', content: 'Der Wilde Westen RP Wiki' }],
    ['meta', { name: 'og:image', content: 'https://der-wilde-westen-rp.de/cms/wp-content/uploads/2022/06/DwD-Logo_Gamed_V3.png' }],
  ],

  markdown: {
    lineNumbers: true,
    container: {
      tipLabel: 'TIPP',
      warningLabel: 'ACHTUNG',
      dangerLabel: 'GEFAHR',
      infoLabel: 'INFO',
      detailsLabel: 'Details'
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "assets/dww-logo.png",
    externalLinkIcon: true,

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Suchen',
                buttonAriaLabel: 'Suchen'
              },
              modal: {
                noResultsText: 'Keine Ergebnisse gefunden',
                resetButtonTitle: 'Suche zurücksetzen',
                footer: {
                  selectText: 'zum Auswählen',
                  navigateText: 'zum Navigieren',
                  closeText: 'zum Schließen'
                }
              }
            }
          }
        }
      }
    },

    lastUpdated: {
      text: 'Zuletzt aktualisiert',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    nav: [
      { text: 'Startseite', link: '/' },
      { text: 'Website', link: 'https://der-wilde-westen-rp.de/' },
      { text: 'Wiki', link: '/sites/wiki-start' },
      { text: 'Impressum', link: '/sites/impressum' }
    ],
    darkModeSwitchLabel: 'Erscheinungsbild',
    lightModeSwitchTitle: 'Zum hellen Modus wechseln',
    darkModeSwitchTitle: 'Zum dunklen Modus wechseln',
    sidebarMenuLabel: 'Menü',
    footer: {
      message: 'Der Wilde Westen Roleplay',
      copyright: 'Made by Scott with ❤️'
    },
    docFooter: {
      prev: 'Vorherige Seite',
      next: 'Nächste Seite'
    },
    returnToTopLabel: 'Nach oben',

    outline: {
      level: [2, 3], // H2 & H3 Überschriften.
      label: 'Lesezeichen auf dieser Seite'
    },

    sidebar: [
      {
        text: 'Allgemein',
        collapsed: false,
        items: [
          { text: 'Charakter', link: '/sites/common/character' },
          { text: 'HUD', link: '/sites/common/hud'  },
          { text: 'Radial-Menu', link: '/sites/common/radial-menu'  },
          { text: 'Zeit & Temperatur', link: '/sites/common/time-and-temperatur'  },
          { text: 'Essen und Trinken', link: '/sites/common/metabolism' },
          { text: 'Standardsituationen', link: '/sites/common/situations' },
          { text: 'IC-Teammitglieder', link: '/sites/common/admins' },
          { text: 'Steam-ID / Discord-ID', link: '/sites/common/steam-and-discord-id' },
        ]
      },
      {
        text: 'Server Lore & Guides',
        collapsed: false,
        items: [
          { text: 'State of Dakoma', link: '/sites/lore/server-lore' },
          { text: 'RP-Guide', link: '/sites/lore/rp-guide' },
        ]
      },
      {
        text: 'Tastatur & Konsolenbefehle',
        collapsed: false,
        items: [
          { text: 'Tastenbelegung', link: '/sites/keyboard-console/tastaturbelegung' },
          { text: 'Konsolenbefehle', link: '/sites/keyboard-console/konsolenbefehle' },
          { text: 'Duelle', link: '/sites/keyboard-console/duelle' }
        ]
      },
      {
        text: 'Rund um Gewerbe',
        collapsed: false,
        items: [
          { text: 'Allgemeines', link: '/sites/society/allgemeines' },
          { text: 'Eigenes Gewerbe', link: '/sites/society/eigenes-gewerbe' },
          { text: 'Berechtigungen', link: '/sites/society/berechtigungen' },
          { text: 'Schuldscheine', link: '/sites/society/schuldscheine' },
          { text: 'Bauanträge', link: '/sites/society/bauantrag' },
          { text: 'Anpflanzen als Farmer', link: '/sites/society/anpflanzen' },
          { text: 'Gewerbe Flyer', link: '/sites/society/gewerbe-flyer' },
        ]
      },
      {
        text: 'TeamSpeak 3 & SaltyChat',
        collapsed: false,
        items: [
          { text: 'SaltyChat', link: '/sites/teamspeak-salty/saltychat' },
          { text: 'TeamSpeak Sounds', link: '/sites/teamspeak-salty/sounds' },
          { text: 'Ingame-Voice', link: '/sites/teamspeak-salty/ingame-voice' }
        ]
      },
      {
        text: 'Videoaufnahme',
        collapsed: false,
        items: [
          { text: 'Medal.tv', link: '/sites/video/medal' },
          { text: 'NVIDIA Shadowplay', link: '/sites/video/nvsp' }
        ]
      },
      {
        text: 'Technische Hilfe & Fehler',
        collapsed: false,
        items: [
          { text: 'RedM Grafikeinstellungen', link: '/sites/technical/grafik-settings' },
          { text: 'RedM + Reshade', link: '/sites/technical/reshade' },
          { text: 'RedM + DLSS', link: '/sites/technical/dlss' }, 
          { text: 'Cache löschen', link: '/sites/technical/cache-clear' },
          { text: 'RedM Aktuallisierung ändern', link: '/sites/technical/change-version' },
          { text: 'Vermeidung von Crashes', link: '/sites/technical/crash-vermeidung' },
          { text: 'Fehler: SaltyChat moved nicht', link: '/sites/technical/saltychat-dns' },
          { text: 'Fehler: UI-Lag', link: '/sites/technical/ui-lag' },
          { text: 'Fehler: UI-Größe', link: '/sites/technical/resolution' },
          { text: 'Fehler: Rockstar Timeout', link: '/sites/technical/rockstar-block' },
          { 
            text: 'Fehlermeldungen',
            collapsed: true,
            items: [
              { text: 'Fehler: GFX_STATE_ERROR', link: '/sites/technical/redm-errors/gfx-state-error' },
              { text: 'Fehler: AUD_MIXER_INIT', link: '/sites/technical/redm-errors/aud-rage-error' },
              { text: 'Fehler: RAGE Error 0x1F045E58:441', link: '/sites/technical/redm-errors/rage-error-441' },
              { text: "Fehler: Couldn't resolve URL", link: '/sites/technical/redm-errors/couldnt-resolve-url' },
              { text: "Fehler: poppedRuntime", link: '/sites/technical/redm-errors/poppedRuntime' },
              { text: "Fehler: Poolsize", link: '/sites/technical/redm-errors/redm-poolsize' },
              { text: "Fehler: CURL error code 23", link: '/sites/technical/redm-errors/curl-error-code-23' },
              { text: "Fehler: CURL error code 56", link: '/sites/technical/redm-errors/curl-error-code-56' },
              { text: "Fehler: RedM_ROSLauncher+147B6C", link: '/sites/technical/redm-errors/ros-launcher+147B6C' },
              { text: "Fehler: [...] 42E83450 (0xe)", link: '/sites/technical/redm-errors/RDR2_b1491' },
              { text: "Fehler: Account is beeing used", link: '/sites/technical/redm-errors/account-in-use' }
            ]
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/dww-rp' }
    ]
  }
})
