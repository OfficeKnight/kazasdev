# Arbeitsprotokoll Wissensseiten

Dieses Protokoll begleitet die Umsetzung der Wissensseiten (`isms.html`, `nis2-cra.html`, `bcm.html`, `ot.html`). Die Regeln dazu stehen in `CLAUDE.md` im Hauptordner.

## 1. Aktueller Stand

Stand 21.11.2026, 17:05 Uhr

- **Branch:** `claude/intelligent-hawking-6ohcfk`
- **Letzter Commit:** „Vorlagen Konzept und Mockup ablegen“ (Prüfsumme im Git-Verlauf)
- **Fertig:** `CLAUDE.md` und Protokoll angelegt. Konzept und Mockup liegen als `docs/wissensseiten-konzept.md` und `docs/mockup.html` im Branch. Die Primärquellen sind aus der Sitzung erreichbar (neue Umgebung „kazasdev“, siehe Entscheidungen).
- **Als Nächstes:**
  1. Vier Themenseiten, gemeinsame Teile und Quellenprüfung parallel mit Subagenten.
  2. Bestätigte Abweichungen aus der Quellenprüfung in die Seiten übernehmen.
  3. Prüfung aller Seiten in 390 px und 1280 px, hell und dunkel.
  4. `docs/` und `CLAUDE.md` vor dem Merge nach `main` entfernen. Das Zusammenführen selbst macht Rostik.

### Offene Fragen an Rostik

Keine. Die beiden Fragen vom 21.11.2026, 16:45 Uhr sind beantwortet (Vorlagen hochgeladen, `docs/` und `CLAUDE.md` bleiben nur auf dem Arbeitsbranch).

## 2. Verlauf

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
