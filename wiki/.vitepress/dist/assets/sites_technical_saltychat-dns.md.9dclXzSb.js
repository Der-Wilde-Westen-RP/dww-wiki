import{_ as a,C as n,o as r,c as s,H as i,k as e,a as l,Q as d}from"./chunks/framework.fKI2iLGT.js";const c="/assets/saltychat-dns-one.B7EhVVNY.png",h="/assets/saltychat-dns-two.xSYn_dwG.png",o="/assets/saltychat-dns-three.JNxxmDRb.png",p="/assets/saltychat-dns-four.Y8riP0tK.png",u="/assets/saltychat-dns-five.FPglzkYE.png",g="/assets/saltychat-dns-six.O9kZyrIE.png",T=JSON.parse('{"title":"SALTYCHAT MOVED NICHT","description":"","frontmatter":{},"headers":[],"relativePath":"sites/technical/saltychat-dns.md","filePath":"sites/technical/saltychat-dns.md"}'),S={name:"sites/technical/saltychat-dns.md"},m=e("h1",{id:"saltychat-moved-nicht",tabindex:"-1"},[l("SALTYCHAT MOVED NICHT "),e("a",{class:"header-anchor",href:"#saltychat-moved-nicht","aria-label":'Permalink to "SALTYCHAT MOVED NICHT"'},"​")],-1),_=d('<p>Es kann aufgrund von falscher DNS Auflösung zu einem Problem können, bei dem SaltyChat dich nicht in den Ingame-Channel auf TeamSpeak zieht. Befolge die unten beschriebenen Schritte um das Problem zu beheben.</p><h3 id="schritt-1" tabindex="-1">Schritt 1 <a class="header-anchor" href="#schritt-1" aria-label="Permalink to &quot;Schritt 1&quot;">​</a></h3><p>Mache ein <code>Rechtsklick</code> auf das <code>Windows-Logo</code> auf deiner Taskleiste und gehe auf <code>Netzwerkverbindungen</code>.</p><p><img src="'+c+'" alt="SaltyChat DNS #1"></p><h3 id="schritt-2" tabindex="-1">Schritt 2 <a class="header-anchor" href="#schritt-2" aria-label="Permalink to &quot;Schritt 2&quot;">​</a></h3><p>Klicke auf <code>Erweiterte Netzwerkeinstellungen</code>.</p><p><img src="'+h+'" alt="SaltyChat DNS #2"></p><h3 id="schritt-3" tabindex="-1">Schritt 3 <a class="header-anchor" href="#schritt-3" aria-label="Permalink to &quot;Schritt 3&quot;">​</a></h3><p>Klicke auf <code>Weitere Netzwerkadapteroptionen</code>.</p><p><img src="'+o+'" alt="SaltyChat DNS #3"></p><h3 id="schritt-4" tabindex="-1">Schritt 4 <a class="header-anchor" href="#schritt-4" aria-label="Permalink to &quot;Schritt 4&quot;">​</a></h3><p>In diesem Fenster sollte unter anderem das Gerät <code>Ethernet</code> (wenn du per Ethernetkabel/LAN verbunden bist, sonst das Gerät WLAN) aufgelistet sein, mache einen <code>Rechtsklick</code> auf das Gerät, anschließend gehe auf <code>Eigenschaften</code>.</p><p><img src="'+p+'" alt="SaltyChat DNS #4"></p><h2 id="schritt-5" tabindex="-1">Schritt 5 <a class="header-anchor" href="#schritt-5" aria-label="Permalink to &quot;Schritt 5&quot;">​</a></h2><p>Mache ein Doppelklick auf <code>Internetprotokoll, Version 4 (TCP/IPv4)</code>. In der unteren Auswahl, wähle <code>Folgende DNS-Serveradressen verwenden</code> und trage die in der Tabelle stehenden Werte wie in dem Bild zu sehen ein.</p><table><thead><tr><th style="text-align:left;">Eintrag</th><th style="text-align:right;">Wert</th></tr></thead><tbody><tr><td style="text-align:left;">Bevorzugter DNS-Server</td><td style="text-align:right;">8.8.8.8</td></tr><tr><td style="text-align:left;">Alternativer DNS-Server</td><td style="text-align:right;">8.8.4.4</td></tr></tbody></table><p><img src="'+u+'" alt="SaltyChat DNS #5"></p><p>Bestätige deine Auswahl mit <code>OK</code>.</p><h2 id="schritt-6" tabindex="-1">Schritt 6 <a class="header-anchor" href="#schritt-6" aria-label="Permalink to &quot;Schritt 6&quot;">​</a></h2><p>Mache ein Doppelklick auf <code>Internetprotokoll, Version 6 (TCP/IPv6)</code>. In der unteren Auswahl, wähle <code>Folgende DNS-Serveradressen verwenden</code> und trage die in der Tabelle stehenden Werte wie in dem Bild zu sehen ein.</p><table><thead><tr><th style="text-align:left;">Eintrag</th><th style="text-align:right;">Wert</th></tr></thead><tbody><tr><td style="text-align:left;">Bevorzugter DNS-Server</td><td style="text-align:right;">2001:4860:4860::8888</td></tr><tr><td style="text-align:left;">Alternativer DNS-Server</td><td style="text-align:right;">2001:4860:4860::8844</td></tr></tbody></table><p><img src="'+g+'" alt="SaltyChat DNS #6"></p><p>Bestätige deine Auswahl mit <code>OK</code>.</p><hr><blockquote><p>Du kannst nun alle Fenster von den Einstellungen schließen und es erneut versuchen.</p></blockquote>',25);function b(f,y,k,N,x,v){const t=n("Badge");return r(),s("div",null,[m,i(t,{type:"warning",text:"Sollte die hier beschriebene Lösung nicht funktionieren wende dich an unseren Support."}),_])}const w=a(S,[["render",b]]);export{T as __pageData,w as default};
