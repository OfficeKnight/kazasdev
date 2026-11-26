---
name: kazas.dev
description: Persönliche Fachpräsenz von Rostislaw Kazas im Design „Konsole ohne Rahmen“
colors:
  messgeraete-amber: "#ffb224"
  messgeraete-amber-tag: "#955309"
  messwert-blau: "#7dd3fc"
  messwert-blau-tag: "#1d6992"
  nacht-grund: "#0b0e13"
  nacht-flaeche: "#171f2b"
  nacht-raster: "#161c26"
  nacht-tinte: "#e6e9ef"
  nacht-gedaempft: "#8b94a3"
  tag-grund: "#f4f2ec"
  tag-flaeche: "#ffffff"
  tag-raster: "#e6e2d8"
  tag-tinte: "#1d222b"
  tag-gedaempft: "#5c6470"
  arbeitgeber-grund: "#142032"
  arbeitgeber-text: "#b9c8da"
  arbeitgeber-link: "#8fcbf3"
  arbeitgeber-grund-tag: "#e9eff6"
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
  contact:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "clamp(1rem, .6rem + 2.2vw, 1.55rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  figure:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "1.8rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  figure-word:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.2
  role:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  title:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.6
  body:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.9rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.12em"
  body-small:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.88rem"
    fontWeight: 400
    lineHeight: 1.6
  nav:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.6
  footer:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.6
  toggle:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.6
  label-small:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.14em"
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
  touch: "44px"
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
  measure:
    textColor: "{colors.nacht-tinte}"
    typography: "{typography.figure}"
  measure-label:
    textColor: "{colors.nacht-gedaempft}"
    typography: "{typography.label-small}"
  theme-toggle:
    backgroundColor: "{colors.nacht-flaeche}"
    textColor: "{colors.nacht-tinte}"
    typography: "{typography.toggle}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
  nav-link:
    textColor: "{colors.nacht-tinte}"
    typography: "{typography.nav}"
    height: "44px"
  nav-link-active:
    textColor: "{colors.messgeraete-amber}"
  section-label:
    textColor: "{colors.nacht-gedaempft}"
    typography: "{typography.label}"
  linkedin-line:
    textColor: "{colors.nacht-tinte}"
    typography: "{typography.body}"
    height: "44px"
  contact:
    backgroundColor: "{colors.nacht-flaeche}"
    textColor: "{colors.nacht-tinte}"
    typography: "{typography.contact}"
    rounded: "{rounded.card}"
    padding: "22px 24px"
  quiet-link:
    textColor: "{colors.messwert-blau}"
    typography: "{typography.footer}"
    height: "44px"
  employer-note:
    backgroundColor: "{colors.arbeitgeber-grund}"
    textColor: "{colors.arbeitgeber-text}"
    rounded: "{rounded.card}"
    padding: "16px 120px 16px 20px"
---

# Design System: kazas.dev

## Overview

**Creative North Star: "Konsole ohne Rahmen"**

Die Seite liest sich wie eine Konsolenausgabe, ohne eine Konsole nachzubauen. Es gibt kein Fenster, keine Titelleiste und keine Eingabezeile. Was bleibt, ist die Grammatik einer Konsole: eine Monospace-Schrift für alles, Pfad- und Prompt-Zeichen als Wegweiser, nummerierte Abschnitte und ein Cursor hinter dem Namen. Darunter liegt ein ruhiges Karoraster wie auf Millimeterpapier oder einem Schaltplan.

Die Konsolen-Grammatik trägt nur, was der Besucher braucht. Kostüm ohne Inhalt gehört nicht dazu: Eine Statuszeile mit `host / loc / status` oder Bildunterschriften im Dateipfad-Stil wurden bewusst entfernt, weil sie für Nicht-Techniker wie Rauschen wirkten.

Inhalte stehen auf Flächen statt in Rahmen. Karten, der Kontakt und der Umschalter heben sich mit weichem Schatten vom Raster ab, Linien und Rahmen gibt es nicht. Die Farbe ist sparsam: Messgeräte-Amber zeigt an, wo man hinschauen soll, Messwert-Blau markiert leise Links. Alles andere ist Tinte auf Grund in zwei Grautönen.

Die Seite ist dunkel als Vorgabe und hat ein vollwertiges helles Schema. Ohne Wahl folgt sie der Systemeinstellung. Sie soll weder wie eine Konzern-Beraterseite (Stockfotos, Schlagworte, blaue Verläufe, Handschlag-Bilder) noch wie eine Startup-Landingpage (bunte Verläufe, Emojis, große Aufforderungs-Buttons) aussehen.

**Key Characteristics:**
- Eine einzige Schrift, JetBrains Mono, selbst ausgeliefert
- Karoraster im Hintergrund, 48 px Teilung
- Flächen mit weichem Schatten statt Linien und Rahmen
- Konsolenzeichen als Markierungen: `~/`, `>`, `01 /`, `■`, `→`, `_`, für Screenreader stumm
- Zwei Schemata, Nacht als Vorgabe und Tag als Gegenstück, jede Farbe in beiden Fassungen
- Akzentfarbe nur als Signal, nie als große Fläche
- Der Weg zu LinkedIn steht im ersten Bildschirm und als eigener Abschluss
- Belege erscheinen als Messwerte ohne Fläche: große Zahl, kleine Beschriftung darunter

## Colors

Fast unbunte Tinte auf Grund, dazu ein warmes Signal und ein kühler Messwert. Jede Rolle hat eine Nacht- und eine Tag-Fassung. Im Code heißen die Variablen `--p`, `--ink`, `--mut`, `--card`, `--grid`, `--acc`, `--acc2` und `--sig-*`; das Schema tauscht nur deren Werte.

### Primary
- **Messgeräte-Amber** (Nacht `messgeraete-amber`, Tag `messgeraete-amber-tag`): das Signal. Es steht am Cursor hinter dem Namen, an der Rollenzeile, an den Abschnittsnummern, am Pfadzeichen `~/`, an der aktiven Navigation, an den Quadraten vor Kartentiteln, als Unterstrich und Pfeil am LinkedIn-Link und an der Kontakt-Adresse, an der Kennung `EN`, am Fokusring und an der Textmarkierung. Im hellen Schema wird es zu einem dunklen Kupferbraun, damit es auf hellem Grund lesbar bleibt.

### Secondary
- **Messwert-Blau** (Nacht `messwert-blau`, Tag `messwert-blau-tag`): die leisen Links im Fuß und das Leuchten hinter dem Porträt (22 % und 8 % Deckkraft, radial auslaufend).

### Tertiary
- **Arbeitgeber-Blau** (`arbeitgeber-grund`, `arbeitgeber-text`, `arbeitgeber-link` und ihre Tag-Fassungen): eine eigene, zurückgenommene Tönung nur für den Arbeitgeber-Hinweis. Nachts ein gedämpftes Marineblau, tagsüber ein blasses Eisblau. Sie kommt nirgendwo sonst vor.

### Neutral
- **Grund** (`nacht-grund`, `tag-grund`): Seitenhintergrund. Nachts fast Schwarz mit Blaustich, tagsüber ein warmes Papierweiß. Das Papierweiß ist eine bewusste Entscheidung des Seiteninhabers (bestätigt am 26.11.2026) und wird nicht gegen ein neutrales Weiß oder Grau getauscht.
- **Fläche** (`nacht-flaeche`, `tag-flaeche`): Karten, Kontakt, Umschalter. Nachts deutlich heller als der Grund, damit die Fläche auch ohne sichtbaren Schatten trägt; tagsüber reines Weiß.
- **Raster** (`nacht-raster`, `tag-raster`): nur für die 1-px-Linien des Karorasters im Hintergrund.
- **Tinte** (`nacht-tinte`, `tag-tinte`): Fließtext, Namen, Titel, Messwerte, LinkedIn-Link.
- **Gedämpft** (`nacht-gedaempft`, `tag-gedaempft`): Abschnittsüberschriften, Einleitung, Kartentext, Sätze in den Erfahrungsfeldern, englischer Absatz, Messwert-Beschriftungen, Fuß.

### Named Rules
**The Signal Rule.** Messgeräte-Amber markiert, es füllt nicht. Es erscheint auf Zeichen, Nummern, kurzen Zeilen, Unterstrichen und Ringen, nie als Hintergrund einer Fläche oder eines Buttons.

**The Two Schemes Rule.** Jede neue Farbe bekommt eine Nacht- und eine Tag-Fassung und wird an drei Stellen gesetzt: in `:root`, im `prefers-color-scheme: light`-Block unter `html:not(.dark)` und in `html.light`. Fehlt eine Stelle, bricht der Umschalter.

**The Grid Headroom Rule.** Text im hellen Schema muss AA (4,5:1) auch dort bestehen, wo eine Rasterlinie (`tag-raster`) unter den Buchstaben liegt, nicht nur auf dem Papierweiß.

## Typography

**Display Font:** JetBrains Mono (mit ui-monospace, SFMono-Regular, Menlo, Consolas, monospace)
**Body Font:** JetBrains Mono
**Label/Mono Font:** JetBrains Mono

**Character:** Eine einzige Monospace-Schrift in variablen Strichstärken (100 bis 800). Sie liefert die Konsolenanmutung, ohne dass ein Element sie vortäuschen muss. Die Hierarchie entsteht aus Größe, Strichstärke, Großschreibung, Sperrung und Farbe. Alle Größen sind in rem gesetzt und folgen der Schriftgröße des Browsers.

### Hierarchy
- **Display** (700, `clamp(2rem, 4.6vw, 3.6rem)`, Zeilenhöhe 1, Sperrung −0,03 em): nur der Name auf der Startseite, gefolgt vom Cursor `_`.
- **Headline** (700, 1,8 rem, Zeilenhöhe 1): Seitentitel auf Unterseiten wie Datenschutz und 404, ohne Cursor.
- **Contact** (700, `clamp(1rem, .6rem + 2.2vw, 1.55rem)`, Zeilenhöhe 1,2): die LinkedIn-Adresse im Kontakt-Abschluss.
- **Figure** (700, 1,8 rem, Zeilenhöhe 1, Sperrung −0,02 em): jede Zahl eines Messwerts, in Erfahrungsfeldern, Vorher-nachher-Werten und Kennzahlen gleich groß. Steht an der Zahlenstelle ein Wort, weil es keine belegte Zahl gibt, dann in **Figure Word** (700, 1,15 rem).
- **Role** (400, 1 rem, Messgeräte-Amber): die Berufszeile direkt unter dem Namen.
- **Title** (700, 1 rem): Kartentitel als Begriff plus Kürzel, mit Amber-Quadrat davor; Titel der Erfahrungsfelder ohne Zeichen.
- **Body** (400, 0,9375 rem, Zeilenhöhe 1,6): Fließtext, höchstens 70 Zeichen breit, `text-wrap: pretty`.
- **Lead** (400, 0,92 rem, gedämpft): die Einleitung im Kopf, höchstens 56 Zeichen breit.
- **Label** (500, 0,9 rem, Großbuchstaben, Sperrung 0,12 em, gedämpft): Abschnittsüberschriften mit Nummer davor. Dieselbe Größe trägt den Satz im Arbeitgeber-Hinweis.
- **Body Small** (400, 0,88 rem, gedämpft): Kartentext, Sätze in den Erfahrungsfeldern und Satz im Kontakt, auf allen Breiten gleich.
- **Nav / Footer / Toggle** (400; 0,85 / 0,8 / 0,78 rem): Navigation, Fuß und Umschalter.
- **Label Small** (500, 0,75 rem, Großbuchstaben, Sperrung 0,14 em): Messwert-Beschriftungen, Marke „ARBEITGEBER“, Kennung `EN`. Das ist die kleinste Stufe der Seite (12 px).

### Named Rules
**The One Font Rule.** Es gibt nur JetBrains Mono. Keine zweite Schrift für Überschriften, keine Systemschrift für Fließtext. Neue Hierarchie entsteht aus Größe, Strichstärke, Großschreibung und Farbe.

**The 12 px Floor Rule.** Keine Schrift unter 0,75 rem. Kleine Beschriftungen gewinnen Lesbarkeit über Sperrung und Großschreibung, nicht über noch kleinere Größen.

**The Glyph Grammar Rule.** Konsolenzeichen sind die einzige Ikonografie. `~/` steht vor der Marke, `> ` vor der aktiven Seite, `01 / ` vor Abschnittsüberschriften, `■ ` vor Kartentiteln, `→` an Links, `_` hinter dem Namen. Sie werden per CSS gesetzt, und zwar immer mit leerem Alternativtext und Rückfall-Deklaration davor (`content: "■ "; content: "■ " / "";`), damit Screenreader sie nicht vorlesen. Steht ein Zeichen im HTML, bekommt es `aria-hidden="true"`. Keine Icon-Sets.

## Layout

Eine zentrierte Spalte von höchstens 1040 px, mit mindestens 16 px Seitenrand, der die sicheren Bereiche von Notch-Geräten berücksichtigt. Der Hintergrund ist ein Karoraster aus zwei 1-px-Verläufen mit 48 px Teilung. Es liegt auf dem `body` und läuft unter allen Inhalten durch.

Der Kopf ist ein zweispaltiges Raster (1,1 fr zu 0,9 fr, 30 px Abstand), unten bündig: links Name, Rolle, Einleitung und der LinkedIn-Link, rechts das freigestellte Porträt auf einem blauen Leuchten. Unter 760 px stapeln sich beide Spalten, der Text samt LinkedIn-Link kommt zuerst und steht damit im ersten Bildschirm.

Abschnitte folgen mit 36 px Abstand und sind fortlaufend nummeriert (01 Arbeitsweise, 02 Hintergrund, 03 Kernthemen, 04 Ausbildung und Sprachen, 05 Kontakt). Der Beleg steht vor dem Leistungsversprechen: erst der Hintergrund, dann die Kernthemen. Der Arbeitgeber-Hinweis gehört zu 02 und steht an dessen Ende. Der englische Absatz steht ohne Nummer zwischen 04 und 05. Fließtext bleibt bei höchstens 70 Zeichen Breite und lässt rechts Raum frei; Karten und Kontakt nutzen die volle Breite.

- **Karten:** vier Spalten mit 14 px Abstand, unter 980 px zwei, unter 560 px eine.
- **Erfahrungsfelder:** drei gleichrangige Spalten, unter 640 px eine. Titel, Messwert und Satz liegen über `subgrid` auf gemeinsamen Zeilen, damit die Felder auch bei unterschiedlich langen Beschriftungen bündig bleiben.
- **Vorher-nachher-Werte und Kennzahlen:** Messwerte in zwei Spalten mit 48 px Abstand, unter 420 bzw. 560 px enger oder einspaltig.
- **Tippflächen:** Jedes Bedienelement ist mindestens 44 px hoch: Navigationslinks und Fußlinks über Innenabstand, der Umschalter über eine unsichtbar erweiterte Trefferfläche, der Kontakt als ganze Fläche.
- **Fuß:** 44 px Abstand nach oben; Avatar und Name links, Links rechts angeschoben. Unter 560 px stehen die Links in einer eigenen Zeile, eingerückt bündig unter dem Namen.

## Elevation & Depth

Tiefe entsteht durch Flächen, die mit weichem, breitem Schatten über dem Raster schweben. Das gehört zur Identität: Neue Elemente, die sich vom Grund abheben sollen, bekommen Fläche und Schatten, keine Rahmen. Es gibt nur eine Schattenstufe, sie wechselt mit dem Schema. Im dunklen Schema ist der Schatten auf fast schwarzem Grund kaum zu sehen; dort trägt der hellere Flächenton (`nacht-flaeche`) die Trennung.

### Shadow Vocabulary
- **Schwebe, Nacht** (`box-shadow: 0 10px 30px rgba(0, 0, 0, .35)`): Karten, Kontakt, Umschalter und Arbeitgeber-Hinweis im dunklen Schema.
- **Schwebe, Tag** (`box-shadow: 0 8px 28px rgba(40, 30, 10, .10)`): dieselben Elemente im hellen Schema, warm getönt passend zum Papierweiß.

### Named Rules
**The Surfaces-not-Lines Rule.** Keine Rahmen, keine Trennlinien, keine Hairlines, auch keine einseitigen Lichtkanten. Die einzigen Linien sind die des Karorasters im Hintergrund und die Unterstriche von Links. Was getrennt werden soll, bekommt eine eigene Fläche oder Abstand.

**The One Lift Rule.** Es gibt genau eine Schattenstufe. Keine Hover-Hebung, keine gestaffelten Ebenen.

## Shapes

Zwei Formen, klar getrennt. Inhaltsflächen wie Karten, Kontakt und der Arbeitgeber-Hinweis haben deutlich abgerundete Ecken (14 px). Der Umschalter ist eine volle Pille (999 px); die Pillenform ist damit Bedienelementen vorbehalten. Messwerte haben keine Form, sie stehen frei auf dem Raster. Der Avatar im Fuß ist kreisrund. Das Porträt im Kopf ist freigestellt und hat gar keine Form; es steht direkt auf dem Leuchten, ohne Bildunterschrift.

## Components

### Navigation
Eine Zeile Konsolenpfad. Links die Marke `kazas.dev` in 700 mit Amber-Präfix `~/ `, rechts die Seitenlinks in 0,85 rem, jeweils mit 44 px Tippfläche. Die aktive Seite ist amber mit Präfix `> `. Links sind ohne Unterstreichung; beim Hover erscheint eine Unterstreichung mit 4 px Abstand. Am rechten Ende sitzt der Umschalter. Die Zeile bricht auf schmalen Schirmen um, ein Menü-Button ist nicht vorgesehen.

### Umschalter (Farbschema)
Eine Pille auf Fläche mit Schatten, ohne Rahmen, 0,78 rem, mit auf 44 px erweiterter Trefferfläche. Stellungen mit Zeichen und Wort: `◐ auto`, `☀ hell`, `☾ dunkel`. Ein Klick wechselt von auto auf das Gegenteil der Systemeinstellung, der nächste zurück auf auto; so ändert jeder Klick sichtbar etwas. Nur eine feste Wahl wird im Browser gespeichert. Der Umschalter setzt auch die Farbe der Browserleiste (`meta theme-color`, je Schema eine Fassung im HTML); bei fester Wahl liest er sie aus dem Token `--p`. Ohne JavaScript bleibt er verborgen.

### LinkedIn-Link im Kopf
Die Handlung im ersten Bildschirm, direkt unter der Einleitung: „Auf LinkedIn schreiben“ in Tinte und 700, mit dauerhaftem Amber-Unterstrich (2 px, 6 px Abstand) und einem Amber-Pfeil davor, der nicht mit unterstrichen wird. Beim Hover wechselt der Unterstrich auf die Textfarbe. 44 px Tippfläche. Kein Button, keine Fläche.

### Abschnittsüberschrift
Label in Großbuchstaben, gedämpft, mit zweistelliger Nummer und Schrägstrich in Amber davor (`01 / ARBEITSWEISE`). Die Nummern zählen fortlaufend über die Seite.

### Cards / Containers
- **Corner Style:** abgerundet (14 px)
- **Background:** Fläche (`nacht-flaeche` / `tag-flaeche`)
- **Shadow Strategy:** Schwebe (siehe Elevation & Depth)
- **Border:** keiner
- **Internal Padding:** 18 px, unter 560 px 14 px
- **Inhalt:** Titel als Begriff plus Kürzel in Tinte, mit Amber-Quadrat `■` davor, darunter ein Satz in gedämpftem Body Small. Inhaltskarten sind nicht klickbar.

### Messwert
Die Form für jede belegte Zahl: Zahl in Figure oben, Beschriftung in Label Small darunter, ohne Fläche, ohne Schatten, ohne Rahmen, damit Messwerte nie wie Buttons wirken. Zwischen Zahl und Beschriftung steht im HTML ein Leerzeichen, damit Screenreader beides getrennt lesen. Nur für echte, belegte Werte; gibt es keine Zahl, steht an ihrer Stelle ein Wort in Figure Word, nie eine geschätzte Zahl.

### Erfahrungsfeld
Titel, Messwert und ein Satz, in „02 / Hintergrund“. Die Felder sind gleichrangig und ohne Reihenfolge: keine Nummern, keine Jahreszahlen, keine Pfeile zwischen ihnen, damit der Werdegang nicht als Zeitstrahl gelesen wird.

### Vorher-nachher-Beleg
Unter den Erfahrungsfeldern ein Satz zur Arbeitsweise, daneben Messwerte der Form `2 h → 20 min` mit Beschriftung. Der Pfeil steht hier für vorher → nachher und ist das einzige Pfeilzeichen im Fließinhalt; für Screenreader ist er ausgeschrieben („von 2 Stunden auf 20 Minuten“), die sichtbare Form ist `aria-hidden`. Automatisierung erscheint so als Beleg der Arbeitsweise, nicht als eigenes Feld oder Kernthema.

### Arbeitgeber-Hinweis
Eine getönte Fläche in Arbeitgeber-Blau mit 14 px Ecken und Schatten, am Ende von „02 / Hintergrund“, höchstens 70 Zeichen breit. Oben rechts steht klein die Marke „ARBEITGEBER“ (für Screenreader stumm, die Fläche ist als `aside` mit `aria-label` ausgezeichnet). Der Inhalt ist genau ein Satz in Arbeitgeber-Text; darin ist „SIGMA IT-Security und Infrastruktur“ voll ausgeschrieben und als Link in Arbeitgeber-Link gesetzt, mit dünner Unterstreichung statt Fettung, damit er nicht der kräftigste Link der Seitenmitte wird. Keine eigene Überschrift, kein zweiter Absatz, keine weitere Nennung auf der Seite.

### Kontakt-Abschluss
Der letzte Abschnitt „05 / Kontakt“ ist eine einzige Fläche mit 14 px Ecken und Schatten, die als Ganzes zu LinkedIn führt. Oben die Adresse `linkedin.com/in/rkazas` in Contact-Größe mit dauerhaftem Amber-Unterstrich wie beim Link im Kopf und Amber-Pfeil (der Pfeil bricht nie allein um und wird nicht unterstrichen), darunter ein Satz in Sie-Form, der zur Nachricht einlädt. Beim Hover wechselt der Unterstrich auf die Textfarbe, beim Antippen tönt sich die Fläche leicht in Amber. Der Fokusring umrahmt die ganze Fläche. LinkedIn steht hier allein; der Unterstrich unterscheidet die Kontaktfläche von den nicht klickbaren Inhaltskarten.

### Englischer Absatz
Drei Sätze auf Englisch zwischen „04“ und „05“, als `section lang="en"` ausgezeichnet, gedämpft, mit der Kennung `EN` in Amber und Label Small davor.

### Links
Links im Fließtext erben die Textfarbe und sind an der Hover-Unterstreichung erkennbar. Leise Links im Fuß stehen in Messwert-Blau, mit 44 px Tippfläche. Eigenständige Linkzeilen, etwa auf der 404-Seite, beginnen mit `→ `. Der Fokusring ist bei allen Links und Buttons 2 px Amber mit 3 px Abstand.

### Porträt
Freigestelltes Foto ohne Rahmen, ohne Ecken und ohne Bildunterschrift, unten bündig, auf einem radialen Leuchten in Messwert-Blau.

### Bewegung
Die einzige Animation ist der Cursor `_` hinter dem Namen: Er blinkt nach dem Laden viermal hart an und aus (je 0,5 s sichtbar und unsichtbar) und bleibt dann sichtbar stehen. Damit endet das Blinken vor der 5-Sekunden-Grenze aus WCAG 2.2.2. Bei `prefers-reduced-motion: reduce` steht er von Anfang an still. Es gibt keine Übergänge, kein Einblenden beim Scrollen und keine Hover-Bewegung.

## Do's and Don'ts

### Do:
- **Do** alle Farben über die Variablen `--p`, `--ink`, `--mut`, `--card`, `--grid`, `--acc`, `--acc2` und `--sig-*` setzen und jede neue Farbe in beiden Schemata an allen drei Stellen definieren.
- **Do** neue Seiten mit derselben Navigation, demselben Fuß und demselben Karoraster bauen; Textseiten nutzen die schmale Dokumentspalte (höchstens 72 Zeichen) wie Datenschutz und 404.
- **Do** den Weg zu LinkedIn auf jeder neuen Inhaltsseite erreichbar halten, mindestens im Fuß.
- **Do** Abschnitte fortlaufend nummerieren (`01 /`, `02 /` …) und Konsolenzeichen per CSS mit leerem Alternativtext setzen.
- **Do** Flächen mit Schatten statt Rahmen verwenden: 14 px für Inhaltsflächen, die Pillenform nur für Bedienelemente wie den Umschalter.
- **Do** jedem Bedienelement 44 px Tippfläche geben, notfalls über Innenabstand oder eine erweiterte Trefferfläche.
- **Do** Amber auf Zeichen, Nummern, Unterstriche und Fokus beschränken und Messwert-Blau für leise Links verwenden.
- **Do** Schrift und Bilder nur von kazas.dev selbst laden, als WebP mit `srcset` und festen Maßen.
- **Do** jede Bewegung mit `prefers-reduced-motion` abschalten und jedes Blinken vor 5 Sekunden enden lassen.

### Don't:
- **Don't** wie eine Konzern-Beraterseite aussehen: keine Stockfotos, keine Schlagwort-Kacheln, keine blauen Verläufe, keine Handschlag-Bilder.
- **Don't** wie eine Startup-Landingpage aussehen: keine bunten Verläufe, keine Emojis, keine großen Aufforderungs-Buttons.
- **Don't** Konsolen-Kostüm ohne Inhalt einsetzen: keine Statuszeilen wie `host / loc / status`, keine Bildunterschriften im Dateipfad-Stil.
- **Don't** Rahmen, Trennlinien, Hairlines oder einseitige Lichtkanten einsetzen; die einzigen Linien sind die des Rasters und der Unterstrich des LinkedIn-Links.
- **Don't** eine zweite Schrift, Icon-Sets, Webfonts von fremden Servern oder eingebettete Inhalte einbinden.
- **Don't** Schrift unter 0,75 rem setzen.
- **Don't** den Werdegang als Zeitstrahl zeigen: keine Pfeile, Nummern oder Jahreszahlen zwischen Erfahrungsfeldern. Pfeile im Inhalt nur für Vorher-nachher-Werte.
- **Don't** Messwerte in Pillen oder auf Flächen setzen; die Pillenform gehört dem Umschalter.
- **Don't** Amber als Flächenfarbe für Buttons oder Hintergründe verwenden.
- **Don't** den Arbeitgeber mehr als einmal pro Seite zeigen oder ihm mehr als einen Satz geben.
- **Don't** mehrere Schattenstufen, Hover-Hebungen, Scroll-Animationen oder endlose Animationen einführen.
- **Don't** das Papierweiß des hellen Schemas gegen neutrales Weiß oder Grau tauschen.
