# SALTYCHAT MOVED NICHT

<Badge type="warning" text="Sollte die hier beschriebene Lösung nicht funktionieren wende dich an unseren Support."/>

Es kann aufgrund von falscher DNS Auflösung zu einem Problem können, bei dem SaltyChat dich nicht in den Ingame-Channel auf TeamSpeak zieht. Befolge die unten beschriebenen Schritte um das Problem zu beheben.

### Schritt 1

Mache ein `Rechtsklick` auf das `Windows-Logo` auf deiner Taskleiste und gehe auf `Netzwerkverbindungen`.

![SaltyChat DNS #1](../../assets/saltychat-dns-one.png)

### Schritt 2

Klicke auf `Erweiterte Netzwerkeinstellungen`.

![SaltyChat DNS #2](../../assets/saltychat-dns-two.png)

### Schritt 3

Klicke auf `Weitere Netzwerkadapteroptionen`.

![SaltyChat DNS #3](../../assets/saltychat-dns-three.png)

### Schritt 4

In diesem Fenster sollte unter anderem das Gerät `Ethernet` (wenn du per Ethernetkabel/LAN verbunden bist, sonst das Gerät WLAN) aufgelistet sein, mache einen `Rechtsklick` auf das Gerät, anschließend gehe auf `Eigenschaften`.

![SaltyChat DNS #4](../../assets/saltychat-dns-four.png)

## Schritt 5

Mache ein Doppelklick auf `Internetprotokoll, Version 4 (TCP/IPv4)`. In der unteren Auswahl, wähle `Folgende DNS-Serveradressen verwenden` und trage die in der Tabelle stehenden Werte wie in dem Bild zu sehen ein.

| Eintrag                 |    Wert |
| :---------------------- | ------: |
| Bevorzugter DNS-Server  | 8.8.8.8 |
| Alternativer DNS-Server | 8.8.4.4 |

![SaltyChat DNS #5](../../assets/saltychat-dns-five.png)

Bestätige deine Auswahl mit `OK`.

## Schritt 6

Mache ein Doppelklick auf `Internetprotokoll, Version 6 (TCP/IPv6)`. In der unteren Auswahl, wähle `Folgende DNS-Serveradressen verwenden` und trage die in der Tabelle stehenden Werte wie in dem Bild zu sehen ein.

| Eintrag                 |                 Wert |
| :---------------------- | -------------------: |
| Bevorzugter DNS-Server  | 2001:4860:4860::8888 |
| Alternativer DNS-Server | 2001:4860:4860::8844 |

![SaltyChat DNS #6](../../assets/saltychat-dns-six.png)

Bestätige deine Auswahl mit `OK`.

----

> Du kannst nun alle Fenster von den Einstellungen schließen und es erneut versuchen.