---
name: kazas.dev
description: Persönliche Fachpräsenz von Rostislaw Kazas im Design „Konsole ohne Rahmen“
colors:
  messgeraete-amber: "#ffb224"
  messgeraete-amber-tag: "#9b5609"
  messwert-blau: "#7dd3fc"
  messwert-blau-tag: "#1f6f9a"
  nacht-grund: "#0b0e13"
  nacht-flaeche: "#131923"
  nacht-raster: "#161c26"
  nacht-tinte: "#e6e9ef"
  nacht-gedaempft: "#8b94a3"
  tag-grund: "#f4f2ec"
  tag-flaeche: "#ffffff"
  tag-raster: "#e6e2d8"
  tag-tinte: "#1d222b"
  tag-gedaempft: "#636b78"
  arbeitgeber-grund: "#16243a"
  arbeitgeber-name: "#ffffff"
  arbeitgeber-text: "#b9c8da"
  arbeitgeber-link: "#8fcbf3"
  arbeitgeber-grund-tag: "#e6eef7"
  arbeitgeber-name-tag: "#0b1f3a"
  arbeitgeber-text-tag: "#2f4663"
  arbeitgeber-link-tag: "#1f5f94"
typography:
  display:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "clamp(2rem, 4.6vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "1.8rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  figure:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "1.55rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  role:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  title:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1.6
  body:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.88rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.9rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.12em"
  label-small:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.14em"
  meta:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  card: "14px"
  pill: "999px"
  round: "50%"
spacing:
  gutter: "16px"
  kpi-gap: "12px"
  card-gap: "14px"
  card-pad: "18px"
  card-pad-mobile: "14px"
  block-pad: "24px"
  section: "36px"
  raster: "48px"
  container: "1040px"
components:
  card:
    backgroundColor: "{colors.nacht-flaeche}"
    textColor: "{colors.nacht-gedaempft}"
    rounded: "{rounded.card}"
    padding: "18px"
  card-title:
    textColor: "{colors.nacht-tinte}"
    typography: "{typography.title}"
  kpi-pill:
    backgroundColor: "{colors.nacht-flaeche}"
    textColor: "{colors.nacht-tinte}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
  theme-toggle:
    backgroundColor: "{colors.nacht-flaeche}"
    textColor: "{colors.nacht-tinte}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  nav-link:
    textColor: "{colors.nacht-tinte}"
  nav-link-active:
    textColor: "{colors.messgeraete-amber}"
  section-label:
    textColor: "{colors.nacht-gedaempft}"
    typography: "{typography.label}"
  quiet-link:
    textColor: "{colors.messwert-blau}"
  employer-note:
    backgroundColor: "{colors.arbeitgeber-grund}"
    textColor: "{colors.arbeitgeber-text}"
    rounded: "{rounded.card}"
    padding: "24px"
---

# Design System: kazas.dev

## Overview

**Creative North Star: "Konsole ohne Rahmen"**

Die Seite liest sich wie eine Konsolenausgabe, ohne eine Konsole nachzubauen. Es gibt kein Fenster, keine Titelleiste und keine Eingabezeile. Was bleibt, ist die Grammatik einer Konsole: eine Monospace-Schrift für alles, Pfad- und Prompt-Zeichen als Wegweiser, eine Statuszeile mit Schlüssel-Wert-Paaren, nummerierte Abschnitte und ein blinkender Cursor hinter dem Namen. Darunter liegt ein ruhiges Karoraster wie auf Millimeterpapier oder einem Schaltplan.

Inhalte stehen auf Flächen statt in Rahmen. Karten, Kennzahl-Pillen und der Umschalter heben sich mit weichem Schatten vom Raster ab, Linien und Rahmen gibt es nicht. Die Farbe ist sparsam: Messgeräte-Amber zeigt an, wo man hinschauen soll, und Messwert-Blau markiert Werte und leise Links. Alles andere ist Tinte auf Grund in zwei Grautönen.

Die Seite ist dunkel als Vorgabe und hat ein vollwertiges helles Schema. Ohne Wahl folgt sie der Systemeinstellung, der Umschalter legt hell oder dunkel fest. Sie soll weder wie eine Konzern-Beraterseite (Stockfotos, Schlagworte, blaue Verläufe, Handschlag-Bilder) noch wie eine Startup-Landingpage (bunte Verläufe, Emojis, große Aufforderungs-Buttons) aussehen.

**Key Characteristics:**
- Eine einzige Schrift, JetBrains Mono, selbst ausgeliefert
- Karoraster im Hintergrund, 48 px Teilung
- Flächen mit weichem Schatten statt Linien und Rahmen
- Konsolenzeichen als Markierungen: `~/`, `>`, `01 /`, `■`, `→`, `_`
- Zwei Schemata, Nacht als Vorgabe und Tag als Gegenstück, jede Farbe in beiden Fassungen
- Akzentfarbe nur als Signal, nie als große Fläche

## Colors

Fast unbunte Tinte auf Grund, dazu ein warmes Signal und ein kühler Messwert. Jede Rolle hat eine Nacht- und eine Tag-Fassung. Im Code heißen die Variablen `--p`, `--ink`, `--mut`, `--card`, `--grid`, `--acc` und `--acc2`; das Schema tauscht nur deren Werte.

### Primary
- **Messgeräte-Amber** (Nacht `messgeraete-amber`, Tag `messgeraete-amber-tag`): das Signal. Es steht am Cursor hinter dem Namen, an der Rollenzeile unter dem Namen, an den Abschnittsnummern, am Pfadzeichen `~/` vor der Marke, an der aktiven Navigation, an den Quadraten vor Kartentiteln, an den Pfeilen hinter Links, am Fokusring und an der Textmarkierung. Im hellen Schema wird es zu einem dunklen Kupferbraun, damit es auf hellem Grund lesbar bleibt.

### Secondary
- **Messwert-Blau** (Nacht `messwert-blau`, Tag `messwert-blau-tag`): die Werte in der Statuszeile (`kazas.dev`, `Chemnitz`, `online`, `2026`), die leisen Links im Fuß und das Leuchten hinter dem Porträt (22 % und 8 % Deckkraft, radial auslaufend).

### Tertiary
- **Arbeitgeber-Blau** (`arbeitgeber-grund`, `arbeitgeber-name`, `arbeitgeber-text`, `arbeitgeber-link` und ihre Tag-Fassungen): eine eigene, getönte Familie nur für den Arbeitgeber-Hinweis. Nachts ein tiefes Marineblau, tagsüber ein blasses Eisblau. Sie kommt nirgendwo sonst vor.

### Neutral
- **Grund** (`nacht-grund`, `tag-grund`): Seitenhintergrund. Nachts fast Schwarz mit Blaustich, tagsüber ein warmes Papierweiß. Das Papierweiß ist eine bewusste Entscheidung des Seiteninhabers (bestätigt am 26.11.2026) und wird nicht gegen ein neutrales Weiß oder Grau getauscht.
- **Fläche** (`nacht-flaeche`, `tag-flaeche`): Karten, Pillen, Umschalter. Nachts eine Stufe heller als der Grund, tagsüber reines Weiß.
- **Raster** (`nacht-raster`, `tag-raster`): nur für die 1-px-Linien des Karorasters im Hintergrund.
- **Tinte** (`nacht-tinte`, `tag-tinte`): Fließtext, Namen, Titel, Kennzahlen.
- **Gedämpft** (`nacht-gedaempft`, `tag-gedaempft`): Abschnittsüberschriften, Einleitung, Kartentext, Statuszeile, Bildunterschrift, Fuß.

### Named Rules
**The Signal Rule.** Messgeräte-Amber markiert, es füllt nicht. Es erscheint auf Zeichen, Nummern, kurzen Zeilen und Ringen, nie als Hintergrund einer Fläche oder eines Buttons.

**The Two Schemes Rule.** Jede neue Farbe bekommt eine Nacht- und eine Tag-Fassung und wird an drei Stellen gesetzt: in `:root`, im `prefers-color-scheme: light`-Block unter `html:not(.dark)` und in `html.light`. Fehlt eine Stelle, bricht der Umschalter.

## Typography

**Display Font:** JetBrains Mono (mit ui-monospace, SFMono-Regular, Menlo, Consolas, monospace)
**Body Font:** JetBrains Mono
**Label/Mono Font:** JetBrains Mono

**Character:** Eine einzige Monospace-Schrift in variablen Strichstärken (100 bis 800). Sie liefert die Konsolenanmutung, ohne dass ein Element sie vortäuschen muss. Die Hierarchie entsteht aus Größe, Strichstärke, Großschreibung, Sperrung und Farbe.

### Hierarchy
- **Display** (700, `clamp(2rem, 4.6vw, 3.6rem)`, Zeilenhöhe 1, Sperrung −0,03 em): nur der Name auf der Startseite, gefolgt vom blinkenden Cursor `_`.
- **Headline** (700, 1,8 rem, Zeilenhöhe 1): Seitentitel auf Unterseiten wie Datenschutz und 404, ohne Cursor.
- **Figure** (700, 1,55 rem, Zeilenhöhe 1, Sperrung −0,02 em): die Zahl in einer Kennzahl-Pille.
- **Role** (400, 1 rem, Messgeräte-Amber): die Berufszeile direkt unter dem Namen.
- **Title** (700, 0,95 rem): Kartentitel, mit Amber-Quadrat davor.
- **Body** (400, 15 px, Zeilenhöhe 1,6): Fließtext, höchstens 70 Zeichen breit. Die Einleitung im Kopf ist 0,92 rem, gedämpft und höchstens 56 Zeichen breit.
- **Body Small** (400, 0,88 rem, gedämpft): Kartentext. Unter 560 px 0,84 rem.
- **Label** (500, 0,9 rem, Großbuchstaben, Sperrung 0,12 em, gedämpft): Abschnittsüberschriften, mit Nummer davor.
- **Label Small** (500, 0,72 rem, Großbuchstaben, Sperrung 0,14 em, gedämpft): die Beschriftung in Kennzahl-Pillen und die Marke „ARBEITGEBER“ (dort 0,68 rem).
- **Meta** (400, 0,75 rem, gedämpft): Statuszeile, Navigation (0,85 rem), Umschalter (0,78 rem), Bildunterschrift (0,7 rem), Fuß (0,8 rem).

### Named Rules
**The One Font Rule.** Es gibt nur JetBrains Mono. Keine zweite Schrift für Überschriften, keine Systemschrift für Fließtext. Neue Hierarchie entsteht aus Größe, Strichstärke, Großschreibung und Farbe.

**The Glyph Grammar Rule.** Konsolenzeichen sind die einzige Ikonografie. `~/` steht vor der Marke, `> ` vor der aktiven Seite, `01 / ` vor Abschnittsüberschriften, `■ ` vor Kartentiteln, ` →` hinter Links, `_` hinter dem Namen. Sie werden per CSS (`::before`, `::after`) gesetzt, damit sie nicht im Textinhalt landen. Keine Icon-Sets.

## Layout

Eine zentrierte Spalte von höchstens 1040 px, mit mindestens 16 px Seitenrand, der die sicheren Bereiche von Notch-Geräten berücksichtigt. Der Hintergrund ist ein Karoraster aus zwei 1-px-Verläufen mit 48 px Teilung. Es liegt auf dem `body` und läuft unter allen Inhalten durch.

Der Kopf ist ein zweispaltiges Raster (1,1 fr zu 0,9 fr, 30 px Abstand), unten bündig: links Statuszeile, Name, Rolle und Einleitung, rechts das freigestellte Porträt auf einem blauen Leuchten mit Bildunterschrift im Dateipfad-Stil (`img/kazas-portrait · 2026`). Unter 760 px stapeln sich beide Spalten, der Text kommt zuerst.

Abschnitte folgen mit 36 px Abstand. Fließtext bleibt bei höchstens 70 Zeichen Breite und lässt die rechte Seite frei; nur Karten, Kennzahlen und der Arbeitgeber-Hinweis nutzen die volle Breite.

- **Karten:** vier Spalten mit 14 px Abstand, unter 980 px zwei. Zweierkarten werden unter 560 px einspaltig.
- **Kennzahlen:** Pillen in einer umbrechenden Reihe mit 12 px Abstand, unter 980 px ein zweispaltiges Raster mit zentriertem Inhalt, unter 560 px eine Spalte, linksbündig.
- **Fuß:** 44 px Abstand nach oben; Avatar und Name links, Links rechts angeschoben, bricht auf schmalen Schirmen um.

## Elevation & Depth

Tiefe entsteht durch Flächen, die mit weichem, breitem Schatten über dem Raster schweben. Das gehört zur Identität: Neue Elemente, die sich vom Grund abheben sollen, bekommen Fläche und Schatten, keine Rahmen. Es gibt nur eine Schattenstufe, sie wechselt mit dem Schema.

### Shadow Vocabulary
- **Schwebe, Nacht** (`box-shadow: 0 10px 30px rgba(0, 0, 0, .35)`): Karten, Pillen, Umschalter und Arbeitgeber-Hinweis im dunklen Schema.
- **Schwebe, Tag** (`box-shadow: 0 8px 28px rgba(40, 30, 10, .10)`): dieselben Elemente im hellen Schema, warm getönt passend zum Papiergrund.

### Named Rules
**The Surfaces-not-Lines Rule.** Keine Rahmen, keine Trennlinien, keine Hairlines. Die einzigen Linien sind die des Karorasters im Hintergrund. Was getrennt werden soll, bekommt eine eigene Fläche oder Abstand.

**The One Lift Rule.** Es gibt genau eine Schattenstufe. Keine Hover-Hebung, keine gestaffelten Ebenen.

## Shapes

Zwei Formen, klar getrennt. Inhaltsflächen wie Karten und der Arbeitgeber-Hinweis haben deutlich abgerundete Ecken (14 px). Kleine, einzeilige Elemente wie Kennzahlen und Umschalter sind volle Pillen (999 px). Der Avatar im Fuß ist kreisrund. Das Porträt im Kopf ist freigestellt und hat gar keine Form; es steht direkt auf dem Leuchten.

## Components

### Navigation
Eine Zeile Konsolenpfad. Links die Marke `kazas.dev` in 700 mit Amber-Präfix `~/ `, rechts die Seitenlinks in 0,85 rem. Die aktive Seite ist amber mit Präfix `> `. Links sind ohne Unterstreichung; beim Hover erscheint eine Unterstreichung mit 4 px Abstand. Am rechten Ende sitzt der Umschalter. Die Zeile bricht auf schmalen Schirmen um, ein Menü-Button ist nicht vorgesehen.

### Umschalter (Farbschema)
Eine Pille auf Fläche mit Schatten, ohne Rahmen, 0,78 rem. Drei Stellungen mit Zeichen und Wort: `◐ auto`, `☀ hell`, `☾ dunkel`. Ohne JavaScript bleibt er verborgen.

### Statuszeile
Schlüssel-Wert-Paare in Meta-Größe: Schlüssel gedämpft, Werte in Messwert-Blau und 500. Steht über dem Namen und ist das deutlichste Konsolenzitat der Seite.

### Abschnittsüberschrift
Label in Großbuchstaben, gedämpft, mit zweistelliger Nummer und Schrägstrich in Amber davor (`01 / ARBEITSWEISE`). Die Nummern zählen fortlaufend über die Seite.

### Cards / Containers
- **Corner Style:** abgerundet (14 px)
- **Background:** Fläche (`nacht-flaeche` / `tag-flaeche`)
- **Shadow Strategy:** Schwebe (siehe Elevation & Depth)
- **Border:** keiner
- **Internal Padding:** 18 px, unter 560 px 14 px
- **Inhalt:** Titel in Tinte mit Amber-Quadrat `■` davor, darunter ein bis zwei Sätze in gedämpftem Body Small. Ist der Titel ein Link, folgt ihm ein Amber-Pfeil `→`.

### Kennzahl-Pille
Eine Pille auf Fläche mit Schatten: links die Zahl in Figure-Größe, rechts die Beschriftung in Label Small, grundlinienbündig mit 12 px Abstand. Nur für echte, belegte Zahlen.

### Arbeitgeber-Hinweis
Eine getönte Fläche in Arbeitgeber-Blau mit 14 px Ecken, Schatten und 24 px Innenabstand. Oben rechts steht klein die Marke „ARBEITGEBER“ in Arbeitgeber-Link und Label Small. Der Inhalt ist genau ein Satz in Arbeitgeber-Text; darin ist „SIGMA IT-Security und Infrastruktur“ voll ausgeschrieben und als Link in Arbeitgeber-Link und 700 gesetzt. Keine eigene Überschrift, kein zweiter Absatz.

Stand im Code: `index.html` zeigt den Block noch mit Überschrift, zwei Sätzen und separatem Link, und eine zweite Karte „Arbeitgeber“ unter „Weiter“. Beides wird an diese Beschreibung angepasst.

### Links
Links im Fließtext und in Karten erben die Textfarbe und sind am Pfeil und an der Hover-Unterstreichung erkennbar. Leise Links im Fuß stehen in Messwert-Blau. Eigenständige Linkzeilen, etwa auf der 404-Seite, beginnen mit `→ `. Der Fokusring ist bei allen Links und Buttons 2 px Amber mit 3 px Abstand.

### Porträt
Freigestelltes Foto ohne Rahmen und ohne Ecken, unten bündig, auf einem radialen Leuchten in Messwert-Blau. Darunter eine Bildunterschrift im Dateipfad-Stil in Meta-Größe.

### Bewegung
Die einzige Animation ist der Cursor `_` hinter dem Namen: Blinken mit 1 s in zwei harten Schritten, ohne Überblendung. Bei `prefers-reduced-motion: reduce` steht er still. Es gibt keine Übergänge, kein Einblenden beim Scrollen und keine Hover-Bewegung.

## Do's and Don'ts

### Do:
- **Do** alle Farben über die Variablen `--p`, `--ink`, `--mut`, `--card`, `--grid`, `--acc` und `--acc2` setzen und jede neue Farbe in beiden Schemata an allen drei Stellen definieren.
- **Do** neue Seiten mit derselben Navigation, demselben Fuß und demselben Karoraster bauen; Textseiten nutzen die schmale Dokumentspalte (höchstens 72 Zeichen) wie Datenschutz und 404.
- **Do** Abschnitte fortlaufend nummerieren (`01 /`, `02 /` …) und Konsolenzeichen per CSS setzen.
- **Do** Flächen mit Schatten statt Rahmen verwenden: 14 px für Inhaltsflächen, Pillen für einzeilige Elemente.
- **Do** Amber auf Zeichen, Nummern und Fokus beschränken und Messwert-Blau für Werte und leise Links verwenden.
- **Do** Schrift und Bilder nur von kazas.dev selbst laden, als WebP mit `srcset` und festen Maßen.
- **Do** jede Bewegung mit `prefers-reduced-motion` abschalten.

### Don't:
- **Don't** wie eine Konzern-Beraterseite aussehen: keine Stockfotos, keine Schlagwort-Kacheln, keine blauen Verläufe, keine Handschlag-Bilder.
- **Don't** wie eine Startup-Landingpage aussehen: keine bunten Verläufe, keine Emojis, keine großen Aufforderungs-Buttons.
- **Don't** Rahmen, Trennlinien oder Hairlines einsetzen; die einzigen Linien sind die des Rasters.
- **Don't** eine zweite Schrift, Icon-Sets, Webfonts von fremden Servern oder eingebettete Inhalte einbinden.
- **Don't** Amber als Flächenfarbe für Buttons oder Hintergründe verwenden.
- **Don't** den Arbeitgeber mehr als einmal pro Seite zeigen oder ihm mehr als einen Satz geben.
- **Don't** mehrere Schattenstufen, Hover-Hebungen oder Scroll-Animationen einführen.
