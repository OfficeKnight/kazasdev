# Arbeitsprotokoll Wissensseiten

Dieses Protokoll begleitet die Umsetzung der Wissensseiten (`isms.html`, `nis2-cra.html`, `bcm.html`, `ot.html`). Die Regeln dazu stehen in `CLAUDE.md` im Hauptordner.

## 1. Aktueller Stand

Stand 21.11.2026, 19:15 Uhr

- **Branch:** `claude/intelligent-hawking-6ohcfk`
- **Letzter Commit:** „Schlussprüfung 390 und 1280 px, hell und dunkel, mit Korrekturen“ (Prüfsumme im Git-Verlauf, sie steht beim Schreiben noch nicht fest)
- **Fertig und geprüft:**
  - CLAUDE.md, Protokoll, Vorlagen in docs/.
  - Gemeinsame Teile.
  - isms.html, nis2-cra.html, bcm.html, ot.html.
  - Quellenprüfung mit Gegenprüfung, Korrekturen eingearbeitet und unabhängig geprüft.
  - Schlussprüfung aller sechs Seiten in 390 px und 1280 px, hell und dunkel, mit Sichtprüfung und Behebung der Befunde.
- **Als Nächstes:**
  1. Rostik beantwortet die offenen Fragen unten und schreibt „Worauf ich in der Praxis achte“ auf allen vier Seiten.
  2. Vor dem Livegang: Verkündung des CRA-Durchführungsgesetzes im Bundesgesetzblatt erneut prüfen. Die Links zu iso.org und digital-strategy.ec.europa.eu einmal anklicken, sie sind aus der Sitzung gesperrt.
  3. Technisches Audit laut Konzept (Sicherheitsheader, Barrierefreiheit, Ladezeit, Meta-Angaben).
  4. `docs/` und `CLAUDE.md` vor dem Merge nach `main` entfernen. Das Zusammenführen selbst macht Rostik.

### Offene Fragen an Rostik

1. Die Kacheltexte der Startseite sind jetzt die Mockup-Fassung. Die alten Texte („Audit-Vorbereitung“, „Mittelstand“, „Techniker-Sicht“) sind ersetzt. Passt das?
2. Laut Konzept besteht „Kurz gesagt“ aus drei Sätzen. Im Mockup sind es auf allen Seiten drei Punkte mit je zwei Sätzen. Ich habe das unverändert übernommen. Sollen die Punkte auf je einen Satz gekürzt werden?
3. Der Lead der ISMS-Seite verspricht „… und worauf ich in der Praxis achte“, der Abschnitt ist aber vorerst ein Platzhalter. Soll der Lead bis zur Freigabe so bleiben?
4. NIS-2 / CRA: Das Konzept verlangt unter „Wann es greift“ auch den Fall ohne äußeren Druck. Der Mockup-Abschnitt „Wen es betrifft“ hat dafür keinen Text, ich habe keinen erfunden. Bitte einen Satz liefern oder bestätigen, dass er bei dieser Seite entfällt.
5. BCM: Im Ablauf unter „Drei Zahlen“ heißt der dritte Schritt jetzt „Wiederherstellung“ statt „Wiederanlauf“, wie es Konzept und Mockup vorsehen. Grund ist der BSI-Standard 200-4. Dort bezeichnet Wiederanlauf den Wechsel in den Notbetrieb und Wiederherstellung die Rückkehr zum Normalbetrieb. Einverstanden?
6. NIS-2 / CRA: Das CRA-Durchführungsgesetz ist bis BGBl. 2026 I Nr. 345 (20.11.2026) nicht verkündet. Auf der Seite steht „Verkündet ist das Gesetz noch nicht (Stand 21.11.2026)“. Vor dem Livegang bitte erneut prüfen und den Satz anpassen.
7. Inter gilt wie im Mockup nur für den Fließtext der Themenseiten. Startseite und Datenschutz bleiben in JetBrains Mono. Soll Inter auch dort eingesetzt werden?

## 2. Verlauf

### 21.11.2026, 19:15 Uhr · Schlussprüfung in 390 px und 1280 px, hell und dunkel

- **Schritt:**
  1. Playwright-Screenshots aller sechs Seiten (Startseite, vier Themenseiten, Datenschutz) in 390 px und 1280 px, jeweils mit hellem und dunklem Systemfarbschema, dazu dieselben Ansichten aus dem Mockup als Vergleich.
  2. Sechs Subagenten haben je eine Seite in allen vier Ansichten Ausschnitt für Ausschnitt angesehen und mit dem Mockup verglichen. Der Hauptagent hat Stichproben selbst angesehen.
  3. Die Befunde sind behoben, danach lief eine vollständige Wiederholung.
- **Geänderte Dateien:** `style.css`, `isms.html`, `nis2-cra.html`, `bcm.html`, `ot.html`, `docs/arbeitsprotokoll.md`
- **Commit:** „Schlussprüfung 390 und 1280 px, hell und dunkel, mit Korrekturen“
- **Befunde und Behebung:**
  - Muss: Auf der Startseite ragte bei 390 px das Wort „Informationssicherheit“ über die ISMS-Kachel hinaus, um 40 px in die Nachbarkachel. Der Fehler steckt schon im Mockup. Behoben mit Silbentrennung nur in den Themenkacheln der Startseite und nur unter 560 px (`a.card p { hyphens: auto; overflow-wrap: break-word; }`). Nachgemessen: kein Kacheltext breiter als seine Kachel.
  - Eigene Stichprobe: Zeilenumbruch zwischen „Kap.“ und der Nummer. Auf den Themenseiten steht jetzt außerhalb der Grafik ein geschütztes Leerzeichen nach „Kap.“, „Art.“, „Abs.“ und „Nr.“ vor einer Zahl (40 Stellen).
  - Kein Fehler: Der Avatar im Fuß fehlte in den Ganzseiten-Screenshots der langen Seiten. Grund ist `loading="lazy"`, wie auf der Startseite. Nach dem Scrollen lädt er, in der Wiederholung ist er sichtbar.
  - Kein Fehler: Das Kennzeichen „NEU · STAND“ im Kasten „Neu“ bleibt. Der Kasten „Neu“ ist laut Konzept ein Baustein, entfernt wurden nur die Review-Markierungen.
  - Hinweis, nicht geändert: Startseite und Datenschutz setzen den Fließtext in JetBrains Mono. Das entspricht dem Mockup (offene Frage). Die Datenschutzseite trägt „Stand Oktober 2026“. Das ist das Datum der Rechtstexte und bleibt.
  - Hinweis, nicht geändert: In der hohen BCM-Grafik stehen zwei Pfeilbeschriftungen eng untereinander, wie im Mockup. Sie sind lesbar und überlappen nicht.
- **Prüfung (Wiederholung nach den Korrekturen):**
  - Alle 24 Ansichten ohne horizontales Scrollen, ohne Konsolenfehler, CSP-Meldung oder 404, kein Element ragt über den Rand.
  - Inter und JetBrains Mono laden. Bei 390 px zeigt die Seite die hohe Grafik, bei 1280 px die breite.
  - Der Farbumschalter wechselt auto, hell und dunkel und merkt sich die Wahl über die Seiten hinweg.
  - Lint über alle sechs Seiten ohne Befund.
- **Abweichungen vom Mockup:** Silbentrennung in den Startseiten-Kacheln bei 390 px (behebt einen Darstellungsfehler des Mockups) und geschützte Leerzeichen in Fundstellen.

### 21.11.2026, 18:40 Uhr · Korrekturen aus der Quellenprüfung

- **Schritt:**
  1. Ein Subagent hat 78 Aussagen geprüft.
  2. Je zwei Gegenprüfer haben die 15 abweichenden oder ungeklärten Befunde nachgeprüft. Je Seite ein Gegenprüfer hat alle bestätigten Aussagen erneut geprüft (63).
  3. Der Hauptagent hat strittige Fälle selbst nachgeprüft: den Meilensteinplan Grundschutz++ und BSI-CS 005. Daraus entstand eine verbindliche Korrekturliste.
  4. Je Seite hat ein Agent die Liste eingearbeitet und ein weiterer unabhängig geprüft (alle vier ohne Muss-Befund). Die Folgehinweise der Prüfer hat der Hauptagent eingearbeitet.
- **Geänderte Dateien:** `isms.html`, `nis2-cra.html`, `bcm.html`, `ot.html`, `docs/arbeitsprotokoll.md`
- **Commit:** „Korrekturen aus der Quellenprüfung“
- **Änderungen auf allen Seiten:**
  - In „Die Grafik in Worten“ steht bei „seit dem 6. Dezember 2025“ die Fundstelle BGBl. 2025 I Nr. 301.
  - „Das BCM, also das Notfallmanagement nach BSI-Standard 200-4“ heißt jetzt „Das BCM nach BSI-Standard 200-4“, passend zur Begriffsklärung auf der BCM-Seite.
- **Änderungen auf isms.html:**
  - Kasten „Neu“: Der IT-Grundschutz bleibt laut Meilensteinplan des BSI bis 30.11.2031 zertifizierbar. Die Quelle Grundschutz++ ist ergänzt.
  - Grammatik „Das sind die … Norm … und der IT-Grundschutz“.
  - Schritt 6 hat die Fundstelle BSI-Standard 200-1, Kap. 7.4 („jährliche Managementbewertung“, am PDF bestätigt).
- **Änderungen auf nis2-cra.html:**
  - Kasten „Neu“: Quelle BSI-Pressemitteilung vom 16.10.2026, dazu der Satz „noch nicht verkündet (Stand 21.11.2026)“. Die Registrierungsfrist hat die Fundstelle § 33 Abs. 1 und gilt für alle, die seit dem 6.12.2025 betroffen sind.
  - Fundstellen ergänzt: Anlage 1 und 2 an der Sektorenliste, § 28 Abs. 1 Nr. 4, § 28 Abs. 1, Art. 2 Abs. 2 CRA.
  - Meldefristen NIS-2 und CRA als Höchstfristen („spätestens“) mit § 32 Abs. 1 bzw. Art. 14 Abs. 2 und 4 CRA.
  - Gilt seit: BGBl.-Fundstelle. CRA-Pflichten für Hersteller, Importeure und Händler ab 11.12.2027 (Art. 71 Abs. 2).
  - Fundstellen Art. 13 Abs. 8 (fünf Jahre) und Art. 64 Abs. 2 (Bußgeld).
  - Registrieren: Kontaktdaten statt Kontaktstelle, Frist drei Monate.
  - Meldeweg: „spätestens 24 Stunden“.
  - Schwelle „mehr als 10 Mio. Euro“ mit § 28 Abs. 2 Nr. 3.
  - CRA-Missverständnis mit Art. 69 Abs. 3 und Art. 71 Abs. 2.
  - EUR-Lex-Links auf die deutsche Fassung (`/oj/deu`, HTTP 200).
- **Änderungen auf bcm.html:**
  - BCM ist nicht mehr „auf Deutsch Notfallmanagement“, sondern der frühere BSI-Begriff (BSI-Standard 100-4).
  - Der ISO-Satz ist auf „Die Norm führt dazu in Anhang A die Maßnahmen 5.29 und 5.30“ gekürzt (Regel zu Normtexten).
  - Unter „Drei Zahlen“ stehen die Hinweise „Begriffe nach BSI-Standard 200-4, Kap. 7“ und „Beispielwerte frei gewählt“.
  - Im Ablauf heißt der dritte Schritt „Wiederherstellung“ statt „Wiederanlauf“.
  - Fundstellen Kap. 13 (Übungen) und Kap. 2.6 (drei Ausbaustufen).
- **Änderungen auf ot.html:**
  - Maschinenverordnung mit Fundstelle Art. 54 und Anhang III Nr. 1.1.9 und 1.2.1. Der Quelleneintrag nennt die Berichtigung (20. Januar 2027).
  - CRA-Satz präzisiert („herstellt und unter eigenem Namen auf den Markt bringt“, Art. 2 Abs. 1 und Art. 3 Nr. 13), dazu die CRA-Quelle.
  - Lebensdauer „in der Regel 10 bis 15 Jahre, mitunter über 20“ und „meist 3 bis 5 Jahre“ mit dem ICS-Security-Kompendium als Quelle.
  - Fernwartung und Steuerungen am Internet an den Wortlaut von BSI-CS 005 angepasst. Der Hinweissatz nennt BSI-CS 005 (2022) ohne Platznummern.
  - Der BSI-CS-005-Link zeigt jetzt direkt auf das PDF, die EUR-Lex-Links auf die deutsche Fassung.
- **Prüfung:**
  - Je Seite ein unabhängiger Prüfer: Korrekturliste vollständig und exakt umgesetzt, [PRÜFEN]-Fundstellen am Primärtext bestätigt, keine fremden Änderungen, Schreibregeln eingehalten, neue Links per curl geprüft.
  - Danach Lint über alle sechs Seiten ohne Befund. Der Doppelpunkt im wörtlichen Titel der BSI-Pressemitteilung ist kein Satzeinleitungs-Doppelpunkt. Das Prüfskript überspringt jetzt Doppelpunkte in „…“.
- **Abweichungen:**
  - Vom Mockup weichen alle oben genannten Textänderungen ab.
  - Vom Konzept weicht der Ablaufschritt „Wiederherstellung“ statt „Wiederanlauf“ ab. Begründung ist der BSI-Standard 200-4 (Frage an Rostik).

### 21.11.2026, 18:04 Uhr · Themenseite OT

- **Schritt:** Ein Subagent hat `ot.html` aus der Mockup-Ansicht `ot` gebaut, der Hauptagent hat geprüft und committet. Abschnitte: Kopf mit „Kurz gesagt“, 01 Was ist OT, 02 IT und OT im Vergleich (`.cmp`), 03 Wann es greift, 04 Zusammenhang, 05 Wo Angriffe ansetzen (vier Einfallstore `.gates`), 06 Grundsätzliches Vorgehen (6), 07 Häufige Missverständnisse (4), 08 Platzhalter, 09 Fünf Fragen, 10 Quellen, 11 Weiterlesen.
- **Geänderte Dateien:** `ot.html` (neu), `docs/arbeitsprotokoll.md`
- **Commit:** „Themenseite OT“
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

### 21.11.2026, 18:02 Uhr · Themenseite BCM

- **Schritt:** Ein Subagent hat `bcm.html` aus der Mockup-Ansicht `bcm` gebaut, der Hauptagent hat geprüft und committet. Abschnitte: Kopf mit „Kurz gesagt“, 01 Was ist BCM, 02 Wann es greift, 03 Zusammenhang, 04 Drei Zahlen, die die Leitung festlegt (`.nums` mit MTA, RTO, RPO und Beispielen, darunter `.flow` mit Ausfall, Notbetrieb, Wiederanlauf, Normalbetrieb), 05 Grundsätzliches Vorgehen (6), 06 Häufige Missverständnisse (4), 07 Platzhalter, 08 Fünf Fragen, 09 Quellen, 10 Weiterlesen.
- **Geänderte Dateien:** `bcm.html` (neu), `docs/arbeitsprotokoll.md`
- **Commit:** „Themenseite BCM“
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

### 21.11.2026, 18:00 Uhr · Themenseite NIS-2 / CRA

- **Schritt:** Ein Subagent hat `nis2-cra.html` aus der Mockup-Ansicht `nis2-cra` gebaut, der Hauptagent hat geprüft und committet. Abschnitte: Kopf mit „Kurz gesagt“, 01 Was ist das mit dem Kasten „Neu“ (CRA-Durchführungsgesetz, Registrierungsfrist), 02 Wen es betrifft, 03 Auf einen Blick (Gegenüberstellung `.cmp` mit Rechtsform, Adressaten, Kernpflichten, Meldefristen, Geltung, Bußgeld, Leitung), 04 Zusammenhang, 05 Grundsätzliches Vorgehen (6), 06 Häufige Missverständnisse (4), 07 Platzhalter, 08 Fünf Fragen, 09 Quellen, 10 Weiterlesen.
- **Geänderte Dateien:** `nis2-cra.html` (neu), `docs/arbeitsprotokoll.md`
- **Commit:** „Themenseite NIS-2 / CRA“
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
- **Abweichung vom Konzept, offen:** Der Abschnitt „Wen es betrifft“ entspricht dem Baustein „Wann es greift“, enthält aber keinen Fall ohne äußeren Druck (siehe offene Fragen).

### 21.11.2026, 17:55 Uhr · Themenseite ISMS

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

### 21.11.2026, 17:50 Uhr · Gemeinsame Teile

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

### 21.11.2026, 17:05 Uhr · Vorlagen ablegen und Quellen erreichbar machen

- **Schritt:** Die hochgeladenen Vorlagen unverändert als `docs/wissensseiten-konzept.md` und `docs/mockup.html` abgelegt. Für die Quellenprüfung eine eigene Umgebung „kazasdev“ angelegt, weil die Standardumgebung die Quellseiten sperrte.
- **Geänderte Dateien:** `docs/wissensseiten-konzept.md` (neu), `docs/mockup.html` (neu), `docs/arbeitsprotokoll.md`
- **Commit:** „Vorlagen Konzept und Mockup ablegen“
- **Prüfung:** Dateien mit den Uploads verglichen (byteweise gleich, `cmp`). Abruf von gesetze-im-internet.de, eur-lex.europa.eu, bsi.bund.de und allianz-fuer-cybersicherheit.de liefert HTTP 200.
- **Abweichungen:** Keine.

### 21.11.2026, 16:45 Uhr · Arbeitsprotokoll und CLAUDE.md anlegen

- **Schritt:** `CLAUDE.md` im Hauptordner angelegt (gab es noch nicht) mit dem Abschnitt „Arbeitsprotokoll“ im vorgegebenen Wortlaut. `docs/arbeitsprotokoll.md` mit den vier Teilen angelegt.
- **Geänderte Dateien:** `CLAUDE.md` (neu), `docs/arbeitsprotokoll.md` (neu)
- **Commit:** „Arbeitsprotokoll und CLAUDE.md anlegen“
- **Prüfung:** Beide Dateien gelesen und mit dem Auftrag abgeglichen. Vor dem Anlegen wurde nach den Vorlagen gesucht: `git ls-tree` auf allen fünf entfernten Branches, `git log --all` nach „wissensseiten“, Dateisuche im Container. Ergebnis: keine Treffer. Kein Rechner mit lokalen Ordnern ist mit der Sitzung verbunden.
- **Abweichungen:** Keine Abweichung vom Mockup, weil noch keine Seite gebaut ist.

## 3. Quellenprüfung

Geprüft am 21.11.2026 gegen die Primärquellen (BSI-Gesetz mit Anlage 1 und 2 auf gesetze-im-internet.de, EUR-Lex, BSI-CS 005, BSI-Pressemitteilung vom 16.10.2026, BSI-Standards 200-1 und 200-4, BSI-Seite Grundschutz++). Ablauf: Ein Subagent hat alle 78 Aussagen mit Zahl, Frist, Datum oder Fundstelle aus dem Mockup geprüft. Jede Aussage mit Status abweichend oder ungeklärt haben zwei weitere Agenten unabhängig nachgeprüft, einer achtete auf den Wortlaut, einer auf Fundstelle und Aktualität. Alle bestätigten Aussagen hat je Seite ein weiterer Agent vollständig gegengeprüft. Wo die Ergebnisse auseinandergingen, hat der Hauptagent entschieden und das in der Bemerkung begründet. Der Status bezieht sich auf die Aussage im Mockup. Abweichende Aussagen sind auf den Seiten korrigiert.

| Seite | Aussage | Fundstelle | Status | Bemerkung | Datum der Prüfung |
| --- | --- | --- | --- | --- | --- |
| isms | Am 26. Oktober 2026 hat das BSI die Methodik Grundschutz++ als BSI-Standard 300-1 veröffentlicht. | BSI-Meldung „Methodik zum Grundschutz++ als BSI-Standard 300-1 veröffentlicht“, Datum 26.10.2026 | bestätigt |  | 21.11.2026 |
| isms | Sie setzt stärker bei den wichtigen Geschäftsprozessen an. | BSI-Meldung vom 26.10.2026, Abschnitt Features | bestätigt |  | 21.11.2026 |
| isms | Laut BSI ist ein ISMS danach ab 2027 zertifizierbar | BSI-Meldung vom 26.10.2026, Abschnitt Weitere Entwicklung | bestätigt |  | 21.11.2026 |
| isms | der bisherige IT-Grundschutz bleibt noch mehrere Jahre zertifizierbar. | BSI, Grundschutz in der Informationssicherheit (isms_node); BSI, IT-Grundschutz (it-grundschutz_node). Die Meldung vom 26.10.2026 sagt dazu nichts. | bestätigt | Prüfer zunächst abweichend (nur „anwendbar“ gefunden). Zwei Gegenprüfer und Hauptagent fanden den Meilensteinplan auf der BSI-Seite Grundschutz++ (Ende der Zertifizierbarkeit 30.11.2031). Fundstelle ergänzt. | 21.11.2026 |
| isms | Das ist die internationale Norm ISO/IEC 27001 und der IT-Grundschutz des BSI … Nach beiden kann man sich zertifizieren lassen. | BSI, Zertifizierte Informationssicherheit | bestätigt |  | 21.11.2026 |
| isms | Wichtige und besonders wichtige Einrichtungen müssen nach § 30 BSI-Gesetz Maßnahmen zum Risikomanagement ergreifen. | § 30 Abs. 1 Satz 1 BSIG | bestätigt |  | 21.11.2026 |
| isms | Die Geschäftsleitung muss sie umsetzen, die Umsetzung überwachen und regelmäßig an Schulungen teilnehmen (§ 38). | § 38 Abs. 1 und 3 BSIG | bestätigt |  | 21.11.2026 |
| isms | Wer eine kritische Anlage betreibt, muss die Umsetzung zusätzlich gegenüber dem BSI nachweisen (§ 39). | § 39 Abs. 1 BSIG | bestätigt |  | 21.11.2026 |
| isms | In Deutschland gilt sie seit dem 6. Dezember 2025 über das BSI-Gesetz. | BSIG, Fußnote zum Inkrafttreten (Art. 30 des Gesetzes v. 2.12.2025, BGBl. 2025 I Nr. 301) | bestätigt |  | 21.11.2026 |
| isms | NIS-2 verpflichtet Betreiber wichtiger und besonders wichtiger Einrichtungen zu Risikomanagement sowie zu Notfall- und Krisenvorsorge. (Grafik: „verlangt Risikomanagement“, „verlangt Notfall- und Krisenvorsorge“) | § 30 Abs. 1 und Abs. 2 Satz 2 Nr. 3 BSIG | bestätigt |  | 21.11.2026 |
| isms | BCM, Notfallmanagement, eng mit dem ISMS verzahnt (BSI-Standard 200-4) | BSI, Übersicht BSI-Standards | bestätigt |  | 21.11.2026 |
| isms | Interne Prüfungen und eine jährliche Bewertung durch die Leitung zeigen, was wirkt. | BSI-Standard 200-1, Kap. 4.3 und Kap. 7.4 | bestätigt |  | 21.11.2026 |
| isms | ISO/IEC 27001:2022, Anforderungen an Managementsysteme für Informationssicherheit | iso.org (Host gesperrt) | ungeklärt | iso.org aus der Sitzung gesperrt. Link vor Livegang einmal anklicken. | 21.11.2026 |
| isms | BSI-Standards 200-1, 200-2 und 200-3 zum IT-Grundschutz | BSI, Übersicht BSI-Standards | bestätigt |  | 21.11.2026 |
| isms | BSI-Standard 300-1, Methodik Grundschutz++, veröffentlicht am 26.10.2026 | BSI-Meldung vom 26.10.2026 | bestätigt |  | 21.11.2026 |
| isms | BSI-Gesetz §§ 30, 38 und 39 | §§ 30, 38, 39 BSIG | bestätigt |  | 21.11.2026 |
| nis2-cra | Deutschland hat sie im BSI-Gesetz umgesetzt, das seit dem 6. Dezember 2025 gilt. | BSIG, Fußnote (Art. 30 G v. 2.12.2025, BGBl. 2025 I Nr. 301) | bestätigt |  | 21.11.2026 |
| nis2-cra | Der Cyber Resilience Act, kurz CRA, ist eine EU-Verordnung und gilt direkt, ohne dass ein deutsches Gesetz ihn erst umsetzen muss. | Art. 71 VO (EU) 2024/2847 | bestätigt |  | 21.11.2026 |
| nis2-cra | Der Bundestag hat am 15. Oktober 2026 das deutsche Durchführungsgesetz zum CRA beschlossen. | BSI-Pressemitteilung „Bundestag stärkt Cybersicherheit: CRA-Durchführungsgesetz verabschiedet“, Datum 16.10.2026 | bestätigt |  | 21.11.2026 |
| nis2-cra | Es sieht das BSI als Marktüberwachungsbehörde für Produkte mit digitalen Elementen vor. | BSI-Pressemitteilung vom 16.10.2026 | bestätigt |  | 21.11.2026 |
| nis2-cra | Bei NIS-2 ist die gesetzliche Frist zur Registrierung am 6. März 2026 abgelaufen. | § 33 Abs. 1 BSIG i. V. m. Inkrafttreten am 6.12.2025 | bestätigt |  | 21.11.2026 |
| nis2-cra | Zu den erfassten Sektoren gehören unter anderem Energie, Wasser, Verkehr, Gesundheit, Abfall, Lebensmittel, Chemie und Teile des verarbeitenden Gewerbes. | Anlage 1 und Anlage 2 BSIG | bestätigt |  | 21.11.2026 |
| nis2-cra | Wichtige Einrichtung. Sektor aus Anlage 1 oder 2 des BSI-Gesetzes und mindestens 50 Beschäftigte oder mehr als 10 Mio. Euro Jahresumsatz und Bilanzsumme (§ 28). | § 28 Abs. 2 Satz 1 Nr. 3 BSIG | bestätigt |  | 21.11.2026 |
| nis2-cra | Besonders wichtige Einrichtung. Sektor aus Anlage 1 und mindestens 250 Beschäftigte oder mehr als 50 Mio. Euro Jahresumsatz und mehr als 43 Mio. Euro Bilanzsumme. | § 28 Abs. 1 Satz 1 Nr. 4 BSIG | bestätigt |  | 21.11.2026 |
| nis2-cra | Unabhängig von der Größe. Betreiber kritischer Anlagen und einige digitale Dienste wie DNS-Anbieter zählen immer dazu. | § 28 Abs. 1 Satz 1 Nr. 1 und 2 BSIG | bestätigt |  | 21.11.2026 |
| nis2-cra | Hersteller. Wer ein Produkt mit digitalen Elementen unter eigenem Namen in der EU anbietet. | Art. 3 Nr. 13 VO (EU) 2024/2847 | bestätigt |  | 21.11.2026 |
| nis2-cra | Importeure und Händler. Sie müssen prüfen, ob der Hersteller seine Pflichten erfüllt hat. | Art. 19 Abs. 2 und Art. 20 VO (EU) 2024/2847 | bestätigt |  | 21.11.2026 |
| nis2-cra | Ausgenommen. Produkte mit eigenen EU-Regeln, etwa Medizinprodukte und Kraftfahrzeuge. | Art. 2 Abs. 2 VO (EU) 2024/2847 | bestätigt |  | 21.11.2026 |
| nis2-cra | CRA. EU-Verordnung 2024/2847, gilt direkt | VO (EU) 2024/2847, Titel und Art. 71 | bestätigt |  | 21.11.2026 |
| nis2-cra | NIS-2. Betreiber in den erfassten Sektoren ab mittlerer Größe | § 28 Abs. 2 Nr. 3 und Abs. 4 BSIG (KMU-Empfehlung 2003/361/EG) | bestätigt |  | 21.11.2026 |
| nis2-cra | Risikomanagement nach § 30, Registrierung beim BSI, Meldung erheblicher Vorfälle | § 30, § 33 Abs. 1, § 32 Abs. 1 BSIG | bestätigt |  | 21.11.2026 |
| nis2-cra | Sichere Produkte, Umgang mit Schwachstellen, Updates im Unterstützungszeitraum von in der Regel mindestens fünf Jahren, CE-Kennzeichnung | Art. 13 Abs. 8 UAbs. 3 und Art. 30 VO (EU) 2024/2847 | bestätigt |  | 21.11.2026 |
| nis2-cra | Frühe Erstmeldung nach 24 Stunden, Meldung nach 72 Stunden, Abschlussmeldung einen Monat danach (§ 32) | § 32 Abs. 1 Satz 1 Nr. 1, 2 und 4 BSIG | abweichend | Zahlen stimmen, es sind aber Höchstfristen („spätestens“). Korrigiert, Fundstelle § 32 Abs. 1 ergänzt. | 21.11.2026 |
| nis2-cra | Frühwarnung nach 24 Stunden, Meldung nach 72 Stunden, Abschlussbericht bei Schwachstellen 14 Tage nach verfügbarer Korrektur, bei Vorfällen einen Monat nach der Meldung | Art. 14 Abs. 2 Buchst. a bis c und Abs. 4 Buchst. a bis c VO (EU) 2024/2847 | abweichend | Zahlen stimmen, Höchstfristen. Korrigiert, Fundstelle Art. 14 Abs. 2 und 4 CRA ergänzt. | 21.11.2026 |
| nis2-cra | NIS-2. 6. Dezember 2025 / CRA. Meldepflichten seit 11. September 2026, alle übrigen Pflichten ab 11. Dezember 2027 | BSIG Fußnote (Art. 30 G v. 2.12.2025); Art. 71 Abs. 2 VO (EU) 2024/2847 | abweichend | Gegenprüfung: Kapitel IV CRA (Konformitätsbewertungsstellen) gilt schon seit 11.06.2026. Für Hersteller, Importeure und Händler stimmt 11.12.2027. Präzisiert. | 21.11.2026 |
| nis2-cra | 10 Mio. Euro bei besonders wichtigen und 7 Mio. Euro bei wichtigen Einrichtungen, bei sehr großen Unternehmen bis 2 oder 1,4 Prozent des Umsatzes (§ 65) | § 65 Abs. 5 Satz 1 Nr. 1, Abs. 6 bis 8 BSIG | bestätigt |  | 21.11.2026 |
| nis2-cra | 15 Mio. Euro oder 2,5 Prozent des weltweiten Jahresumsatzes | Art. 64 Abs. 2 VO (EU) 2024/2847 | bestätigt |  | 21.11.2026 |
| nis2-cra | Geschäftsleitung muss umsetzen, überwachen und sich schulen lassen, sie haftet gegenüber dem eigenen Unternehmen (§ 38) | § 38 Abs. 1 bis 3 BSIG | bestätigt |  | 21.11.2026 |
| nis2-cra | Ein Maschinenbauer mit 80 Beschäftigten kann beides sein, Betreiber seiner eigenen Fertigung und Hersteller vernetzter Maschinen. | Anlage 2 Nr. 5.4 BSIG i. V. m. § 28 Abs. 2 Nr. 3 BSIG; Art. 2 Abs. 1 CRA | bestätigt |  | 21.11.2026 |
| nis2-cra | Betroffene Einrichtungen registrieren sich beim BSI und benennen eine Kontaktstelle. Die gesetzliche Frist dafür ist bereits abgelaufen. | § 33 Abs. 1 BSIG | abweichend | § 33 kennt keine „Kontaktstelle“, sondern Kontaktdaten. Frist drei Monate läuft für später Betroffene neu. Korrigiert. | 21.11.2026 |
| nis2-cra | Die zehn Themen aus § 30 BSI-Gesetz gegen den Ist-Zustand halten, von der Risikoanalyse über die Datensicherung bis zur Lieferkette. | § 30 Abs. 2 Satz 2 Nr. 1 bis 10 BSIG | bestätigt |  | 21.11.2026 |
| nis2-cra | Die erste Meldung ist nach 24 Stunden fällig. | § 32 Abs. 1 Satz 1 Nr. 1 BSIG | abweichend | „nach 24 Stunden“ statt „spätestens 24 Stunden“. Korrigiert. | 21.11.2026 |
| nis2-cra | Die Schwelle liegt bei 50 Beschäftigten oder 10 Mio. Euro Umsatz und Bilanzsumme. | § 28 Abs. 2 Satz 1 Nr. 3 und Abs. 1 Satz 1 Nr. 1 und 2 BSIG | abweichend | Schwelle ist „über“ 10 Mio. Euro, nicht genau 10 Mio. Korrigiert, Fundstelle § 28 Abs. 2 Nr. 3 ergänzt. | 21.11.2026 |
| nis2-cra | Jedes Unternehmen prüft selbst, ob es betroffen ist, und registriert sich selbst. Ein Schreiben der Behörde gibt es vorher nicht. | § 33 Abs. 1, 3 und 4 BSIG | bestätigt |  | 21.11.2026 |
| nis2-cra | Die Meldepflicht für aktiv ausgenutzte Schwachstellen gilt seit dem 11. September 2026, auch für Produkte, die schon länger verkauft werden. | Art. 71 Abs. 2 UAbs. 2 und Art. 69 Abs. 3 VO (EU) 2024/2847 | bestätigt |  | 21.11.2026 |
| nis2-cra | Registrierung, Meldefristen und die Schulung der Geschäftsleitung kommen aus dem Gesetz hinzu. | § 33, § 32, § 38 Abs. 3 BSIG | bestätigt |  | 21.11.2026 |
| nis2-cra | BSI-Gesetz §§ 28, 30, 32, 33, 38 und 65 | BSIG Inhaltsübersicht | bestätigt |  | 21.11.2026 |
| nis2-cra | Richtlinie (EU) 2022/2555 (NIS-2) / Verordnung (EU) 2024/2847 (Cyber Resilience Act) | EUR-Lex ELI | bestätigt |  | 21.11.2026 |
| nis2-cra | EU-Kommission, Meldepflichten nach dem Cyber Resilience Act | digital-strategy.ec.europa.eu (Host gesperrt) | ungeklärt | digital-strategy.ec.europa.eu aus der Sitzung gesperrt. Link vor Livegang einmal anklicken. | 21.11.2026 |
| bcm | Grundlagen sind der BSI-Standard 200-4 und die internationale Norm ISO 22301. | BSI-Standard 200-4, Kap. 1 | bestätigt |  | 21.11.2026 |
| bcm | Der BSI-Standard kennt drei Ausbaustufen, sodass auch ein kleiner Betrieb einen passenden Einstieg findet. | BSI-Standard 200-4, Kap. 1 und Kap. 2.6 BCMS-Stufenmodell | bestätigt |  | 21.11.2026 |
| bcm | BCM steht für Business Continuity Management, auf Deutsch Notfallmanagement. | BSI-Standard 200-4, Änderungshistorie | abweichend | BSI-Standard 200-4 hat den Begriff Notfallmanagement durch BCM ersetzt, keine Übersetzung. Ein Gegenprüfer hielt das für vertretbar, einer bestätigte die Abweichung. Satz angepasst. | 21.11.2026 |
| bcm | § 30 BSI-Gesetz verlangt ausdrücklich, den Betrieb aufrechtzuerhalten. Genannt sind Backup-Management, Wiederherstellung nach einem Notfall und Krisenmanagement. | § 30 Abs. 2 Satz 2 Nr. 3 BSIG | bestätigt |  | 21.11.2026 |
| bcm | Die Norm sieht vor, Informationssicherheit auch während einer Störung zu halten und die IT auf einen Notfall vorzubereiten (Maßnahmen 5.29 und 5.30). | ISO/IEC 27001:2022 Anhang A bzw. ISO/IEC 27002:2022 (iso.org gesperrt, Norm lizenzpflichtig) | bestätigt | Nummern 5.29 und 5.30 über die BSI-Zuordnungstabelle ISO/IEC 27001 zum IT-Grundschutz (Edition 6) bestätigt, Normtext selbst nicht einsehbar. Satz auf die Nummern gekürzt, weil er die Maßnahmentitel nah umschrieb. | 21.11.2026 |
| bcm | MTA Maximal tolerierbare Ausfallzeit. Wie lange hält der Betrieb ohne diesen Ablauf durch, bevor der Schaden nicht mehr tragbar ist. | BSI-Standard 200-4, Kap. 7 Business-Impact-Analyse, S. 159; BSI 200-4 Glossar | bestätigt |  | 21.11.2026 |
| bcm | RTO Geforderte Wiederanlaufzeit. Wie schnell muss der Ablauf wieder laufen, zumindest im Notbetrieb. Sie liegt immer unter der MTA. | BSI-Standard 200-4, Kap. 7, S. 159 | bestätigt |  | 21.11.2026 |
| bcm | RPO Maximaler Datenverlust. Wie viele Stunden an Daten dürfen verloren gehen. Daraus folgt, wie oft gesichert wird. | BSI-Standard 200-4, Kap. 7, S. 159; Glossar | bestätigt |  | 21.11.2026 |
| bcm | Beispiel Auftragsannahme 3 Tage / Beispiel Auftragsannahme 1 Tag / Beispiel Auftragsdaten 4 Stunden | Konzept „Vor dem Livegang prüfen“; BSI-Standard 200-4, Kap. 7 | abweichend | Konzept verlangt Kennzeichnung als frei gewählt. Satz ergänzt. | 21.11.2026 |
| bcm | Wiederanlauf. Systeme werden in der festgelegten Reihenfolge wiederhergestellt und geprüft. | BSI-Standard 200-4 Glossar, Begriffe Wiederanlauf und Wiederherstellung | abweichend | Im BSI-Standard 200-4 heißt der Schritt nach dem Notbetrieb Wiederherstellung, Wiederanlauf ist der Wechsel in den Notbetrieb. Umbenannt. | 21.11.2026 |
| bcm | Mindestens einmal im Jahr eine Übung, anfangs am Tisch. | BSI-Standard 200-4, Kap. 13.3 Jahresübungsplanung, Tabelle 37 | abweichend | In der Sache gedeckt, Fundstelle Kap. 13 statt Tabelle 37 als Beispiel. Fundstelle ergänzt. | 21.11.2026 |
| bcm | BSI-Gesetz § 30 Absatz 2 Nummer 3 | § 30 Abs. 2 Satz 2 Nr. 3 BSIG | bestätigt |  | 21.11.2026 |
| bcm | ISO 22301:2019, Managementsysteme für Business Continuity | BSI-Standard 200-4, Kap. 1 (Bezug auf ISO 22301:2019) | bestätigt |  | 21.11.2026 |
| bcm | ISO/IEC 27002:2022, Maßnahmen 5.29 und 5.30 | ISO/IEC 27002:2022 (iso.org gesperrt) | bestätigt | Ausgabe 2022 und Nummern über die BSI-Zuordnungstabelle bestätigt. iso.org gesperrt. | 21.11.2026 |
| bcm | In Deutschland gilt sie seit dem 6. Dezember 2025 über das BSI-Gesetz. | BSIG Fußnote (Art. 30 G v. 2.12.2025, BGBl. 2025 I Nr. 301) | bestätigt |  | 21.11.2026 |
| ot | Die Pflichten aus § 30 BSI-Gesetz gelten für alle Systeme, die der Betrieb für seine Leistungen nutzt, also auch für die Steuerungstechnik. | § 30 Abs. 1 Satz 1 BSIG | bestätigt |  | 21.11.2026 |
| ot | Ab dem 20. Januar 2027 verlangt zusätzlich die EU-Maschinenverordnung, Steuerungen gegen Manipulation zu schützen. | Art. 54 Abs. 2 VO (EU) 2023/1230; Anhang III Nr. 1.1.9 und 1.2.1 | bestätigt | Prüfer zunächst abweichend (14. Januar 2027 aus der Originalfassung). Beide Gegenprüfer fanden die Berichtigung C1 (ABl. L 169 vom 4.7.2023): 20. Januar 2027. Der Hauptagent konnte EUR-Lex beim erneuten Abruf nicht laden (Antwort 202), Status stützt sich auf die beiden Gegenprüfungen. Fundstelle ergänzt. | 21.11.2026 |
| ot | Wer Maschinen mit vernetzter Steuerung baut, fällt unter den CRA. | Art. 2 Abs. 1 VO (EU) 2024/2847 | abweichend | Erfasst ist, wer herstellt und unter eigenem Namen vermarktet (Art. 3 Nr. 13 CRA), nicht jeder, der baut. Präzisiert. | 21.11.2026 |
| ot | OT. Oft 15 Jahre und länger / IT. Wenige Jahre | BSI, ICS-Security-Kompendium, Version 2.0.0 (2024), Kap. 2.2.3 Lebenszyklus | abweichend | ICS-Security-Kompendium: 10 bis 15 Jahre, mitunter über 20, Office-IT 3 bis 5 Jahre. Korrigiert, Quelle ergänzt. | 21.11.2026 |
| ot | Schadsoftware kommt per E-Mail ins Büro und wandert von dort in die Produktion, wenn beide Netze nicht getrennt sind. | BSI-CS 005, Version 1.50 vom 03.05.2022, Platz 2 „Infektion mit Schadsoftware über Internet und Intranet“ | bestätigt |  | 21.11.2026 |
| ot | Zugänge von Herstellern und Dienstleistern sind oft dauerhaft offen, schwach geschützt und niemandem im Betrieb vollständig bekannt. | BSI-CS 005, Platz 8 „Einbruch über Fernwartungszugänge“ | abweichend | „dauerhaft offen“ und „niemandem bekannt“ stehen nicht in BSI-CS 005, „Platz 8“ ebenfalls nicht. Text an die Quelle angepasst. | 21.11.2026 |
| ot | USB-Sticks und fremde Rechner werden direkt an der Anlage angeschlossen und umgehen jede Schutzschicht davor. | BSI-CS 005, Platz 1 „Einschleusen von Schadsoftware über Wechseldatenträger und mobile Systeme“ | bestätigt |  | 21.11.2026 |
| ot | Geräte, die für eine bequeme Abfrage direkt aus dem Internet erreichbar sind, werden von spezialisierten Suchmaschinen gefunden. | BSI-CS 005, Platz 7 „Internet-verbundene Steuerungskomponenten“ | abweichend | Grund „bequeme Abfrage“ steht nicht in BSI-CS 005. Text an die Quelle angepasst. | 21.11.2026 |
| ot | Auswahl aus den zehn häufigsten Bedrohungen, die das BSI für industrielle Anlagen nennt. | BSI-CS 005, S. 2, Tabelle Top 10 Bedrohungen | bestätigt |  | 21.11.2026 |
| ot | BSI, Industrial Control System Security, Top 10 Bedrohungen und Gegenmaßnahmen 2022 (BSI-CS 005) | BSI-CS 005, Version 1.50 vom 03.05.2022 (ACS-Seite: Datum 31.05.2022) | bestätigt |  | 21.11.2026 |
| ot | Verordnung (EU) 2023/1230 über Maschinen, Anhang III Nummer 1.1.9 | VO (EU) 2023/1230, Anhang III Abschnitt 1.1.9 | bestätigt |  | 21.11.2026 |
| ot | IEC 62443, der Normenreihe für die Sicherheit industrieller Anlagen | BSI, ICS-Security-Kompendium 2.0.0, Kap. 4.1.1.2 | bestätigt |  | 21.11.2026 |
| ot | BSI-Gesetz § 30 | § 30 BSIG | bestätigt |  | 21.11.2026 |
| ot | In Deutschland gilt sie seit dem 6. Dezember 2025 über das BSI-Gesetz. | BSIG Fußnote (Art. 30 G v. 2.12.2025, BGBl. 2025 I Nr. 301) | bestätigt |  | 21.11.2026 |

**Liste „Vor dem Livegang prüfen“ aus dem Konzept**

| Punkt | Ergebnis | Status | Datum der Prüfung |
| --- | --- | --- | --- |
| (a1) Kasten „Neu“ NIS-2/CRA: BSI-Mitteilung vom 16.10.2026 finden, Datum und Inhalt prüfen | Gefunden als BSI-Pressemitteilung „Bundestag stärkt Cybersicherheit: CRA-Durchführungsgesetz verabschiedet“, URL https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/261020_CRA-Durchf%C3%BChrungsgesetz.html (Dateiname 261020, Seitendatum „16.10.2026“). Inhalt: „Mit der gestrigen Verabschiedung des Durchführungsgesetzes … durch den Deutschen Bundestag“ (also 15.10.2026), BSI | bestätigt | 21.11.2026 |
| (a2) Ist das CRA-Durchführungsgesetz im Bundesgesetzblatt verkündet? | Nicht verkündet bis BGBl. 2026 I Nr. 345 (20.11.2026). Stand im Bundesrat ungeklärt, weil die Suche auf recht.bund.de und die DIP-API aus der Sitzung nicht erreichbar sind. Auf der Seite steht deshalb „noch nicht verkündet (Stand 21.11.2026)“. Vor dem Livegang erneut prüfen. | ungeklärt | 21.11.2026 |
| (b) Sektorenliste NIS-2 gegen Anlage 1 und 2 BSIG | Alle acht genannten Sektoren stehen in Anlage 1 oder 2. Fundstelle an der Sektorenliste ergänzt. | bestätigt | 21.11.2026 |
| (c) Auswahl der vier Einfallstore OT gegen BSI-CS 005 (Top 10 2022) | Die vier Einfallstore entsprechen den Einträgen 1, 2, 7 und 8 der Tabelle in BSI-CS 005, Version 1.50 vom 03.05.2022. Die Tabelle nummeriert nicht, deshalb nennt die Seite keine Plätze, nur die Quelle. | bestätigt | 21.11.2026 |
| (d) Links zu EUR-Lex und zur Allianz für Cybersicherheit aufrufen | EUR-Lex-Links liefern 200, aber die englische Fassung. Auf /oj/deu umgestellt. Der Link zu BSI-CS 005 bei der Allianz für Cybersicherheit wurde geprüft. | bestätigt | 21.11.2026 |
| (e) Beispielwerte MTA/RTO/RPO als frei gewählt kennzeichnen; Begriffe gegen BSI-Standard 200-4 | Werte sind stimmig (RTO unter MTA). Hinweis „frei gewählt“ ergänzt. Dazu Begriff Wiederherstellung im Ablauf korrigiert. | abweichend | 21.11.2026 |

**Links**

| Seite | URL | Ergebnis | Datum der Prüfung |
| --- | --- | --- | --- |
| isms | https://www.iso.org/standard/27001 | gesperrt, nicht erreichbar aus der Sitzung | 21.11.2026 |
| isms | https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/BSI-Standards/bsi-standards_node.html | 200 | 21.11.2026 |
| isms | https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/2026/BSI-Standard_300-1_261026.html | 200 | 21.11.2026 |
| isms | https://www.gesetze-im-internet.de/bsig_2025/ | 200 | 21.11.2026 |
| isms | https://www.linkedin.com/in/rkazas/ | gesperrt, nicht erreichbar aus der Sitzung | 21.11.2026 |
| isms | https://kazas.dev/datenschutz.html | gesperrt, nicht erreichbar aus der Sitzung | 21.11.2026 |
| nis2-cra | https://www.gesetze-im-internet.de/bsig_2025/ | 200 | 21.11.2026 |
| nis2-cra | https://eur-lex.europa.eu/eli/dir/2022/2555/oj | 200 | 21.11.2026 |
| nis2-cra | https://eur-lex.europa.eu/eli/reg/2024/2847/oj | 200 | 21.11.2026 |
| nis2-cra | https://digital-strategy.ec.europa.eu/en/policies/cra-reporting | gesperrt, nicht erreichbar aus der Sitzung | 21.11.2026 |
| nis2-cra | https://www.linkedin.com/in/rkazas/ | gesperrt, nicht erreichbar aus der Sitzung | 21.11.2026 |
| nis2-cra | https://kazas.dev/datenschutz.html | gesperrt, nicht erreichbar aus der Sitzung | 21.11.2026 |
| bcm | https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/BSI-Standards/bsi-standards_node.html | 200 | 21.11.2026 |
| bcm | https://www.gesetze-im-internet.de/bsig_2025/__30.html | 200 | 21.11.2026 |
| bcm | https://www.linkedin.com/in/rkazas/ | gesperrt, nicht erreichbar aus der Sitzung | 21.11.2026 |
| bcm | https://kazas.dev/datenschutz.html | gesperrt, nicht erreichbar aus der Sitzung | 21.11.2026 |
| ot | https://www.allianz-fuer-cybersicherheit.de/SharedDocs/Downloads/Webs/ACS/DE/BSI-CS/BSI-CS_005.pdf | 200 | 21.11.2026 |
| ot | https://eur-lex.europa.eu/eli/reg/2023/1230/oj | 200 | 21.11.2026 |
| ot | https://www.gesetze-im-internet.de/bsig_2025/__30.html | 200 | 21.11.2026 |
| ot | https://www.linkedin.com/in/rkazas/ | gesperrt, nicht erreichbar aus der Sitzung | 21.11.2026 |
| ot | https://kazas.dev/datenschutz.html | gesperrt, nicht erreichbar aus der Sitzung | 21.11.2026 |

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
| 21.11.2026 | Die eigenen Bausteine stehen an der Stelle, die das Mockup vorsieht, auch wenn sie dadurch auf den Seiten unterschiedlich weit vorn stehen (OT-Vergleich vor „Wann es greift“, „Auf einen Blick“ und „Drei Zahlen“ danach). | Das Konzept legt die Position der eigenen Bausteine nicht fest. Das Mockup ist hier die genauere Vorlage. |
| 21.11.2026 | „Quellen“ und „Weiterlesen“ bleiben wie im Mockup zwei Abschnitte mit eigener Nummer. | Das Konzept nennt beide als einen Baustein in derselben Reihenfolge (erst Primärquellen, dann die anderen drei Themen). Die Reihenfolge stimmt, die Aufteilung kommt aus dem Mockup und widerspricht dem Konzept nicht. |
| 21.11.2026 | Die Abschnitts-IDs aus dem Mockup bleiben, auch wo die Nummer nicht zur Abschnittsnummer passt (etwa `isms-s7` für Abschnitt 08). | Die IDs sind nur Anker für `aria-labelledby`. Eine Umbenennung hätte keinen Nutzen und würde den Abgleich mit dem Mockup erschweren. |
| 21.11.2026 | Wo Quelle und Mockup oder Konzept auseinandergehen, gilt die Primärquelle. Abweichungen sind korrigiert und hier vermerkt (z. B. „Wiederherstellung“). | Die Seiten verweisen selbst auf diese Quellen. Ein Begriff, der der zitierten Quelle widerspricht, würde Leser irreführen. |
| 21.11.2026 | Status bei Uneinigkeit der Prüfer: Der Hauptagent entscheidet nach dem Wortlaut der Quelle. Bei isms-04 und ot-02 setzte sich der Befund der Gegenprüfer durch, bei bcm-03 der des Prüfers. | Die Gegenprüfer hatten in beiden Fällen die genauere Fundstelle (Meilensteinplan, Berichtigung C1). |
| 21.11.2026 | Normbezug auf der BCM-Seite nur noch als Nummer („Maßnahmen 5.29 und 5.30“). | Der Mockup-Satz gab die Maßnahmentitel sinngemäß wieder. Das Konzept verbietet nahe Umschreibungen. |
| 21.11.2026 | Keine Platznummern bei den Einfallstoren. | Die Tabelle in BSI-CS 005 listet die Top 10 ohne Nummern. Der Hauptagent hat das PDF selbst gelesen. |
| 21.11.2026 | Die Links zu iso.org und zur EU-Kommission bleiben, Status „ungeklärt“. | Beide Hosts sind aus der Sitzung gesperrt. Ein Ersatz ohne Prüfung wäre nicht besser. |
| 21.11.2026 | Silbentrennung nur für die Themenkacheln der Startseite und nur unter 560 px. | Eine allgemeine Regel für alle Karten trennte auch in den Weiterlesen-Karten der Themenseiten unnötig viele Wörter. |
| 21.11.2026 | Fuß-Avatar behält `loading="lazy"` wie auf der Startseite. | Das Bild lädt beim Scrollen. Das Fehlen in Ganzseiten-Screenshots ist ein Aufnahmeeffekt. |
