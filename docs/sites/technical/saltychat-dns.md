# SALTYCHAT MOVED NICHT

<Badge type="warning" text="Sollte die hier beschriebene Lösung nicht funktionieren wende dich an unseren Support."/>

Es kann aufgrund von falscher DNS Auflösung zu einem Problem können, bei dem SaltyChat dich nicht in den Ingame-Channel auf TeamSpeak zieht. Befolge die unten beschriebenen Schritte um das Problem zu beheben.

## Methode #1

### Schritt 1

Mache ein `Rechtsklick` auf das `Windows-Logo` auf deiner Taskleiste und gehe auf `Netzwerkverbindungen`.

![SaltyChat DNS #1](../../assets/saltychat-dns-one.png)

### Schritt 2

Klicke auf `Ethernet` und klappe das Menü aus.

![SaltyChat DNS #2](../../assets/saltychat-dns-two.png)

### Schritt 3

Klicke bei DNS-Serverzuweisung auf `Bearbeiten`.

![SaltyChat DNS #3](../../assets/saltychat-dns-three.png)

### Schritt 4

Stelle die Zuweisung auf `Manuell` um und trage die DNS Daten wie im Bild zu sehen ein.

![SaltyChat DNS #3](../../assets/saltychat-dns-four.png)

| Eintrag                 |    Wert |
| :---------------------- | ------: |
| Bevorzugter DNS-Server  | 8.8.8.8 |
| Alternativer DNS-Server | 8.8.4.4 |

![SaltyChat DNS #4](../../assets/saltychat-dns-five.png)


| Eintrag                 |                 Wert |
| :---------------------- | -------------------: |
| Bevorzugter DNS-Server  | 2001:4860:4860::8888 |
| Alternativer DNS-Server | 2001:4860:4860::8844 |

Bestätige deine Auswahl mit `Speichern`.

----

> Du kannst nun alle Fenster von den Einstellungen schließen und es erneut versuchen.

----

## Methode #2
<Badge type="tip" text="Für Experten."/>
<Badge type="warning" text="Danke an miles_morales_1610 für diese Variante."/>

1. Starte PowerShell im Administrator Modus.
2. Füge folgenden Befehl in PowerShell ein: 
````
"`n127.0.0.1 lh.saltmine.de #saltychat fix`n127.0.0.1 lh.v10.network #saltychat fix" | Add-Content -Path C:\Windows\System32\drivers\etc\hosts
````
3. Bestätige deine Eingabe mit `ENTER`.
