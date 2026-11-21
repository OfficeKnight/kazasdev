# Arbeitsprotokoll Wissensseiten

Dieses Protokoll begleitet die Umsetzung der Wissensseiten (`isms.html`, `nis2-cra.html`, `bcm.html`, `ot.html`). Die Regeln dazu stehen in `CLAUDE.md` im Hauptordner.

## 1. Aktueller Stand

Stand 21.11.2026, 17:55 Uhr

- **Branch:** `claude/intelligent-hawking-6ohcfk`
- **Letzter Commit:** „Themenseite ISMS“ (Prüfsumme im Git-Verlauf, sie steht beim Schreiben noch nicht fest)
- **Fertig und geprüft:**
  - CLAUDE.md, Protokoll, Vorlagen in docs/.
  - Gemeinsame Teile.
  - isms.html.
- **Als Nächstes:**
  1. nis2-cra.html, bcm.html, ot.html einzeln committen.
  2. Gegengeprüfte Befunde der Quellenprüfung in die Seiten übernehmen.
  3. Schlussprüfung aller Seiten in 390 px und 1280 px, hell und dunkel.
  4. `docs/` und `CLAUDE.md` vor dem Merge nach `main` entfernen. Das Zusammenführen selbst macht Rostik.

### Offene Fragen an Rostik

1. Die Kacheltexte der Startseite sind jetzt die Mockup-Fassung. Die alten Texte („Audit-Vorbereitung“, „Mittelstand“, „Techniker-Sicht“) sind ersetzt. Passt das?
2. Laut Konzept besteht „Kurz gesagt“ aus drei Sätzen. Im Mockup sind es auf allen Seiten drei Punkte mit je zwei Sätzen. Ich habe das unverändert übernommen. Sollen die Punkte auf je einen Satz gekürzt werden?
3. Der Lead der ISMS-Seite verspricht „… und worauf ich in der Praxis achte“, der Abschnitt ist aber vorerst ein Platzhalter. Soll der Lead bis zur Freigabe so bleiben?

## 2. Verlauf

### 21.11.2026, 17:55 Uhr – Themenseite ISMS

- **Schritt:** Ein Subagent hat `isms.html` aus der Mockup-Ansicht `isms` gebaut, der Hauptagent hat geprüft und committet. Abschnitte: Kopf mit „Kurz gesagt“, 01 Was ist ein ISMS mit dem Kasten „Neu“ (Grundschutz++, BSI-Standard 300-1), 02 Wann es greift, 03 Zusammenhang, 04 Grundsätzliches Vorgehen (6 Karten), 05 Häufige Missverständnisse (4), 06 Worauf ich in der Praxis achte (Platzhalter), 07 Fünf Fragen, 08 Quellen, 09 Weiterlesen.
- **Geänderte Dateien:** `isms.html` (neu), `docs/arbeitsprotokoll.md`
- **Commit:** „Themenseite ISMS“
- **Prüfung:**
  - Prüfskript (Lint) ohne Befund. CSP identisch mit `index.html`, kein style-Attribut, kein Inline-Skript, keine data:-URI, keine Gedankenstriche, keine Markierung VORSCHLAG oder NEU, alle IDs eindeutig, alle ID-Bezüge auflösbar.
  - Playwright 390 px und 1280 px, hell und dunkel: kein horizontales Scrollen, keine Konsolenfehler, keine 404. Bei 390 px die hohe Grafik, bei 1280 px die breite.
  - Ein Abgleich mit dem Seitenschema durch den Seiten-Agenten liegt vor.
- **Abweichungen vom Mockup:**
  - Die Hülle `div.page` mit `data-page` entfällt. Die Klasse `topic` sitzt auf `body`.
  - Kopf mit CSP, Preload, `canonical` und Open Graph wie in `index.html`. Titel und Beschreibung sind aus H1, Rollenzeile, Lead und „Kurz gesagt“ abgeleitet, ohne neue Aussagen.
  - Die Navigation hat Start und Themen statt Einzelpunkten je Thema (Konzept vor Mockup).
  - Der Fuß nutzt die Avatar-Datei statt eines data:-Bilds, weil die CSP `img-src 'self'` keine data:-URIs erlaubt. Der Datenschutz-Link ist relativ.
  - Die Markierungen `NEU` an „Kurz gesagt“, „Fünf Fragen“ und „Weiterlesen“ sind entfernt.
  - „Worauf ich in der Praxis achte“ ist ein Platzhalter mit der Markierung PLATZHALTER statt fünf Vorschlagspunkten mit der Markierung VORSCHLAG. Das Konzept geht hier vor, Rostik schreibt den Abschnitt selbst. Die Vorschlagstexte stehen weiter in `docs/mockup.html`.
  - Das Stand-Datum ist 21.11.2026 statt 15.11.2026, weil die Quellenprüfung an diesem Tag stattfand.
  - Kaputte ID-Bezüge der Grafik sind repariert (`aria-labelledby="…-gwt gwd"` auf `…-gwt …-gwd`, ebenso `gtd`), sonst fehlt Screenreadern die Beschreibung.
  - Die Mockup-Anker zeigen jetzt auf die Dateien (`#isms` auf `isms.html` usw.).
  - Fachliche Zahlen sind in diesem Schritt unverändert aus dem Mockup übernommen. Die Korrekturen aus der Quellenprüfung folgen in einem eigenen Schritt.

### 21.11.2026, 17:50 Uhr – Gemeinsame Teile

- **Schritt:** Ein Subagent hat die gemeinsamen Teile umgesetzt, der Hauptagent hat geprüft und committet.
  - `style.css`: Am Ende angehängt sind @font-face für Inter, die Mockup-Blöcke „Themengrafik“ und „Themenseiten“, die Regel `.vor`, der Block „Ergänzungen für die Wissensseiten“ (`.tldr`, `.cmp`, `.nums`, `.flow`, `.gates`, `.ask`, `.cards.three`, `a.card`, `.go`, `.hint`) und neu `.ph` für den Platzhalter. Nicht übernommen sind die Mockup-Leiste (`.mock`), die Regeln für `data-theme` und die base64-Schrift. Bestehende Regeln sind unverändert.
  - Inter: `assets/fonts/inter-latin.woff2` stammt aus dem npm-Paket @fontsource-variable/inter 5.3.0 (variable Achse wght, Teilmenge latin, 48 256 Bytes, sha256 3100e775…bd4c62). Die Prüfsumme des Pakets stimmt mit der Registry überein. Lizenz SIL OFL 1.1, Text in `assets/fonts/inter-OFL.txt`.
  - `index.html`: Navigationspunkt „Themen“ (`./#themen`). Die Sektion „Kernthemen“ hat `id="themen"`, dazu den Hinweissatz aus dem Mockup. Die vier Kacheln sind Links auf die Themenseiten, mit den Kacheltexten aus dem Mockup.
  - `datenschutz.html`: Navigationspunkt „Themen“. Der Text bleibt unverändert, weil dort nur steht, dass Schriften selbst ausgeliefert werden.
  - `README.md`: Die vier Themenseiten und Inter sind ergänzt, dazu ein Pflegehinweis für Themenseiten.
- **Geänderte Dateien:** `style.css`, `index.html`, `datenschutz.html`, `README.md`, `assets/fonts/inter-latin.woff2` (neu), `assets/fonts/inter-OFL.txt` (neu), `docs/arbeitsprotokoll.md`
- **Commit:** „Gemeinsame Teile der Themenseiten: Stilregeln, Inter, Kacheln, Navigation, README“
- **Prüfung:**
  - Die Klammerbilanz in `style.css` stimmt.
  - `git diff` zeigt in `style.css` nur angehängte Zeilen.
  - Die CSP-Zeilen sind unverändert.
  - Das Prüfskript (Lint) findet keine style-Attribute, keine data:-URIs und keine Gedankenstriche.
  - Ein Playwright-Lauf mit 390 px und 1280 px, hell und dunkel, zeigt: Inter und JetBrains Mono laden, es gibt keine CSP-Meldung in der Konsole, keine 404 und kein horizontales Scrollen.
- **Abweichungen vom Mockup:**
  - `--tf` ist Inter statt JetBrains Mono und `--tfs` ist 1.02rem. Das Konzept legt Inter fest, die Werte stammen aus dem Schriftumschalter des Mockups.
  - Die Navigation hat einen Punkt „Themen“ statt vier Einzelpunkten. Auch hier gilt das Konzept.
  - Die Markierung `NEU` an „Kernthemen“ ist entfernt, weil sie nur ein Review-Hinweis im Mockup war.

### 21.11.2026, 17:05 Uhr – Vorlagen ablegen und Quellen erreichbar machen

- **Schritt:** Die hochgeladenen Vorlagen unverändert als `docs/wissensseiten-konzept.md` und `docs/mockup.html` abgelegt. Für die Quellenprüfung eine eigene Umgebung „kazasdev“ angelegt, weil die Standardumgebung die Quellseiten sperrte.
- **Geänderte Dateien:** `docs/wissensseiten-konzept.md` (neu), `docs/mockup.html` (neu), `docs/arbeitsprotokoll.md`
- **Commit:** „Vorlagen Konzept und Mockup ablegen“
- **Prüfung:** Dateien mit den Uploads verglichen (byteweise gleich, `cmp`). Abruf von gesetze-im-internet.de, eur-lex.europa.eu, bsi.bund.de und allianz-fuer-cybersicherheit.de liefert HTTP 200.
- **Abweichungen:** Keine.

### 21.11.2026, 16:45 Uhr – Arbeitsprotokoll und CLAUDE.md anlegen

- **Schritt:** `CLAUDE.md` im Hauptordner angelegt (gab es noch nicht) mit dem Abschnitt „Arbeitsprotokoll“ im vorgegebenen Wortlaut. `docs/arbeitsprotokoll.md` mit den vier Teilen angelegt.
- **Geänderte Dateien:** `CLAUDE.md` (neu), `docs/arbeitsprotokoll.md` (neu)
- **Commit:** „Arbeitsprotokoll und CLAUDE.md anlegen“
- **Prüfung:** Beide Dateien gelesen und mit dem Auftrag abgeglichen. Vor dem Anlegen wurde nach den Vorlagen gesucht: `git ls-tree` auf allen fünf entfernten Branches, `git log --all` nach „wissensseiten“, Dateisuche im Container. Ergebnis: keine Treffer. Kein Rechner mit lokalen Ordnern ist mit der Sitzung verbunden.
- **Abweichungen:** Keine Abweichung vom Mockup, weil noch keine Seite gebaut ist.

## 3. Quellenprüfung

Noch nicht begonnen. Die Aussagen, die zu prüfen sind, stehen im Mockup, das fehlt.

| Seite | Aussage | Fundstelle | Status | Datum der Prüfung |
| --- | --- | --- | --- | --- |
| – | – | – | – | – |

## 4. Entscheidungen

| Datum | Entscheidung | Begründung |
| --- | --- | --- |
| 21.11.2026 | `CLAUDE.md` neu angelegt statt ergänzt. | Im Hauptordner gab es keine `CLAUDE.md`. |
| 21.11.2026 | Nur die vom Konzept unabhängigen Teile umgesetzt, keine Seiten nach eigenem Ermessen gebaut. | Inhalt und Aufbau sollen aus dem Mockup kommen, Seitenschema und Schreibregeln aus dem Konzept. Ohne beide würde ich Inhalte erfinden, die du anschließend gegenprüfen und ersetzen müsstest. |
| 21.11.2026 | `docs/` und `CLAUDE.md` bleiben nur auf dem Arbeitsbranch und werden vor dem Zusammenführen nach `main` gelöscht. Ich führe nichts nach `main` zusammen. | Vorgabe von Rostik vom 21.11.2026, gleiches Vorgehen wie bei der Projekte-Seite. `docs/` wäre sonst über GitHub Pages öffentlich. |
| 21.11.2026 | Eigene Umgebung „kazasdev“ mit sechs freigegebenen Hosts (gesetze-im-internet.de, eur-lex.europa.eu, bsi.bund.de, allianz-fuer-cybersicherheit.de, recht.bund.de, dip.bundestag.de) statt einer Änderung der Standardumgebung. | Die Quellenprüfung braucht diese Hosts, die Standardumgebung gilt für alle Repositories. Rostik hat den Vorschlag freigegeben. |
| 21.11.2026 | Bei Widersprüchen zwischen Mockup und Konzept gilt das Konzept, jeder Fall steht hier oder im Verlauf. | Vorgabe von Rostik vom 21.11.2026. |
| 21.11.2026 | „Themen“ führt auf die Kacheln der Startseite (`./#themen`), kein Aufklappmenü und keine eigene Übersichtsseite. Auf Themenseiten trägt der Punkt `aria-current="true"`. | Kommt ohne Skript aus und hält die CSP. Die Kacheln sind schon die Übersicht über die vier Themen. Eine Übersichtsseite wäre eine zusätzliche Seite, die das Konzept nicht vorsieht. |
| 21.11.2026 | Fließtextschrift Inter mit `--tf: Inter, system-ui, sans-serif` und `--tfs: 1.02rem`. Überschriften und Kennzeichnungen bleiben JetBrains Mono. | Werte aus dem Schriftumschalter des Mockups, Option Inter. |
| 21.11.2026 | Inter als variable Schrift in einer Datei (Teilmenge latin) aus @fontsource-variable/inter, Lizenztext liegt bei. | Eine Datei deckt die Stärken 400 und 600 ab. github.com ist aus der Sitzung nicht erreichbar, npm schon. Die OFL verlangt, dass der Lizenztext mitgeliefert wird. |
| 21.11.2026 | Inter wird nur auf den Themenseiten vorgeladen, nicht auf Startseite und Datenschutz. | Diese beiden Seiten nutzen Inter nicht. |
| 21.11.2026 | Die Markierungen `NEU` aus dem Mockup entfallen auf allen Seiten. Der Kasten „NEU · STAND“ bleibt. | Die Markierungen zeigen im Mockup nur, was neu entworfen wurde. Der Kasten „Neu“ ist laut Konzept ein Baustein. |
