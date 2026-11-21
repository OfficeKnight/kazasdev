# Wissensseiten für kazas.dev

Stand 21.11.2026. Konzept für die vier Themenseiten hinter den Kacheln „Kernthemen“ der Startseite. Das Mockup liegt als Artefakt in Claude (kazas-dev-isms-mockup) und enthält Startseite, ISMS, NIS-2 / CRA, BCM und OT.

## Ziel und Leser

Die Seiten erklären IT-Sicherheit für Geschäftsführer. Jede Seite soll in wenigen Minuten lesbar sein, ohne Vorwissen auskommen und mit etwas enden, das der Leser in die nächste Leitungsrunde mitnehmen kann. Fachbegriffe werden beim ersten Auftreten in einem Halbsatz erklärt.

## Seitenschema

Alle vier Seiten folgen demselben Aufbau. Das macht sie vergleichbar und spart Arbeit bei weiteren Themen.

| Baustein | Zweck |
| --- | --- |
| Kopf mit Pfad, Thema, Stand, Lesezeit | Einordnung auf einen Blick |
| Kurz gesagt | Drei Sätze für Leser, die nur 30 Sekunden haben |
| Was ist das | Zwei bis drei kurze Absätze in Alltagssprache |
| Wann es greift | Auslöser von außen und der Fall ohne äußeren Druck |
| Zusammenhang | Die gemeinsame Themengrafik, das eigene Thema hervorgehoben |
| Grundsätzliches Vorgehen | Sechs Schritte als Karten |
| Häufige Missverständnisse | Vier Zitate mit Richtigstellung |
| Worauf ich in der Praxis achte | Persönlicher Teil, bis zur Freigabe als Platzhalter markiert |
| Fünf Fragen für die Leitungsrunde | Fragen, die der Geschäftsführer intern stellen kann |
| Quellen und Weiterlesen | Primärquellen, danach Links zu den anderen drei Themen |

## Eigener Baustein je Seite

| Seite | Baustein | Inhalt |
| --- | --- | --- |
| ISMS | Kasten „Neu“ | Grundschutz++ und BSI-Standard 300-1 |
| NIS-2 / CRA | Auf einen Blick | Gegenüberstellung in zwei Spalten mit Rechtsform, Adressaten, Pflichten, Meldefristen, Geltung, Bußgeld, Rolle der Leitung |
| BCM | Drei Zahlen | MTA, RTO und RPO mit Beispiel, darunter der Ablauf Ausfall, Notbetrieb, Wiederanlauf, Normalbetrieb |
| OT | IT und OT im Vergleich, Einfallstore | Gegenüberstellung in zwei Spalten und vier typische Angriffswege nach BSI |

## Entscheidungen (21.11.2026)

| Frage | Entscheidung |
| --- | --- |
| NIS-2 und CRA | Vorerst eine gemeinsame Seite `nis2-cra.html`. Eine spätere Trennung bleibt möglich. |
| Schrift für den Fließtext | Inter, selbst ausgeliefert als woff2 aus dem eigenen Repository, damit die Content-Security-Policy hält. |
| Navigation | Ein Sammelpunkt „Themen“, der zu den vier Themenseiten führt. |
| „Kurz gesagt“ und „Fünf Fragen“ | Bleiben auf allen vier Seiten, auch auf der ISMS-Seite. |
| „Worauf ich in der Praxis achte“ | Bleibt auf allen Seiten als markierter Platzhalter. Rostik schreibt den Teil später selbst. |

## Noch offen

- [ ] Abschnitt „Worauf ich in der Praxis achte“ auf allen vier Seiten in eigenen Worten schreiben.

## Vor dem Livegang prüfen

- Kasten „Neu“ auf der Seite NIS-2 / CRA. Der Beschluss des CRA-Durchführungsgesetzes am 15.10.2026 stammt aus Fachmedien, die sich auf eine Mitteilung des BSI vom 16.10.2026 berufen. Vor Veröffentlichung die BSI-Mitteilung als Quelle ergänzen und prüfen, ob das Gesetz verkündet ist.
- Sektorenliste bei NIS-2 gegen Anlage 1 und 2 des BSI-Gesetzes halten.
- Auswahl der vier Einfallstore gegen BSI-CS 005 (Top 10 Bedrohungen 2022) halten.
- Links zu EUR-Lex und zur Allianz für Cybersicherheit einmal anklicken.
- Beispielwerte bei MTA, RTO und RPO sind frei gewählt.

## Umgang mit Normen

ISO/IEC 27001 und 27002 liegen im Projekt als lizenzierte Exemplare. Auf den Seiten stehen deshalb nur Normnummern und Maßnahmennummern (zum Beispiel 5.29 und 5.30), keine Normtexte und keine nahen Umschreibungen. Frei zitierbar sind Gesetze, EU-Recht und die Veröffentlichungen des BSI.

## Umsetzung im Repository kazasdev

1. Je Thema eine HTML-Datei im Hauptordner anlegen (`isms.html`, `nis2-cra.html`, `bcm.html`, `ot.html`). Kopf wie in `index.html` mit Titel, Beschreibung, `canonical` und Open-Graph-Angaben.
2. Die Stilregeln der Themenseiten und die Ergänzungen (`.tldr`, `.cmp`, `.nums`, `.flow`, `.gates`, `.ask`, `.cards.three`, `a.card`) ans Ende von `style.css` hängen. Die Mockup-Leiste und die Regeln für `data-theme` gehören nicht dazu.
3. Inter als woff2 im Repository ablegen und per `@font-face` in `style.css` einbinden.
4. Kacheln auf der Startseite zu Links machen und auf allen Seiten den Navigationspunkt „Themen“ ergänzen.
5. Die Content-Security-Policy erlaubt nur eigene Dateien. Das Mockup nutzt keine `style`-Attribute, die Grafik ist eingebettetes SVG und damit zulässig.
6. `README.md` um die neuen Dateien ergänzen.
7. In 390 px und 1280 px Breite prüfen, jeweils hell und dunkel.

## Reihenfolge der Arbeit

1. Die Themenseiten samt Quellenprüfung in einem Ultracode-Lauf in Claude Code bauen.
2. Danach ein technisches Audit über alle Seiten (Sicherheitsheader, Barrierefreiheit, Ladezeit, Meta-Angaben, Darstellung).

## Schreibregeln

Keine Gedankenstriche, kein Doppelpunkt als Satzeinleitung, kurze Sätze, Zahlen und Fristen immer mit Fundstelle. Der Arbeitgeber heißt „SIGMA IT-Security und Infrastruktur“.
