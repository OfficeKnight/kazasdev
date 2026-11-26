# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

In dieser Rangfolge:

1. **LinkedIn-Kontakte:** Leute, die von seinen Beiträgen (Notfallplanung, NIS-2, Technik im Mittelstand) kommen und die Person dahinter kennenlernen wollen.
2. **Entscheider im Mittelstand:** Geschäftsführung, IT-Leitung oder ISB, die prüfen, ob Rostislaw Kazas als Berater für Informationssicherheit passt.
3. **Fach-Community:** Techniker, Admins und Security-Leute, die sich für die geplante Projektseite und später für das Homelab interessieren.
4. **Recruiter und Arbeitgeber:** bewerten ihn als Fachkraft. Eine Lebenslauf-Seite ist geplant, aber zurückgestellt.

Wenn sich Inhalte oder Reihenfolge widersprechen, gilt diese Rangfolge.

## Product Purpose

kazas.dev ist die persönliche Fachpräsenz von Rostislaw Kazas, IT-Security- und ISMS-Consultant in Chemnitz. Die Seite gehört ihm, nicht seinem Arbeitgeber, und soll mit der Zeit eigene Inhalte aufnehmen. Als Nächstes kommt eine Projektseite, später Lebenslauf und Homelab. Ein guter Besuch heißt: Der Besucher versteht, wofür er fachlich steht und woher seine Erfahrung kommt, und nimmt ihn als eigenständigen Fachmann wahr.

Erfolgsmaß sind Klicks zu LinkedIn und Nachrichten dort. Auf der Seite selbst wird das nicht gemessen, weil es kein Tracking gibt.

Die Seite entwickelt sich noch. Eine spätere Selbstständigkeit ist möglich, aber nicht entschieden. Künftige Arbeit sollte diesen Weg offenhalten und die Seite nicht fest an den aktuellen Arbeitgeber binden.

## Positioning

Kommt aus der Technik und denkt in Mechanismen statt in Papier. Er hat Schaltschränke für Industrieanlagen verdrahtet, Server und Netzwerke betreut und Versuchsfahrzeuge mit Messtechnik auf TISAX-zertifizierten Prüfgeländen ausgerüstet. Deshalb schreibt er Richtlinien, die in der Werkhalle und im Serverraum umsetzbar sind, und erklärt Sachverhalte so, dass Geschäftsführung und Technik dasselbe verstehen. Leitsatz zur Arbeitsweise: Wenige, gut gewählte Mechanismen bringen schnell große Wirkung, und ein Betrieb muss nicht jeden Stein absichern, um bei einem IT-Ausfall handlungsfähig zu bleiben.

## Operating Context

- Besucher kommen vor allem über LinkedIn-Profil und Beiträge, über geteilte Links (Vorschaubild `assets/og.jpg`) und über die Suche nach seinem Namen.
- Der aktuelle Arbeitgeber ist SIGMA IT-Security und Infrastruktur, Systemhaus und Consulting in Chemnitz. Er arbeitet dort im Consulting, die technische Umsetzung übernimmt das Technikerteam von SIGMA.
- Pflege: Text ändern, auf `main` pushen, nach etwa einer Minute live über GitHub Pages.

## Capabilities and Constraints

Verbindlich:

- **Keine fremden Ressourcen:** kein Tracking, keine Cookies, keine Inhalte von fremden Servern, strenge Content-Security-Policy (`default-src 'none'`, alles nur von der eigenen Domain), Schrift selbst ausgeliefert. Die Datenschutzerklärung beschreibt genau diesen Zustand.
- **Kontakt:** LinkedIn ist der einzige sichtbare Kontaktweg. Die E-Mail-Adresse steht nur im Impressum, in der Datenschutzerklärung und in `security.txt`. Kein Kontaktformular. Ein Impressum gibt es im Repo noch nicht.
- **Sprache:** Deutsch, dazu drei englische Sätze. Keine vollständige englische Fassung.
- **Arbeitgeber:** nur ein Satz mit Link, immer ausgeschrieben als „SIGMA IT-Security und Infrastruktur“.

Technik und Pflege:

- Statisches HTML und CSS auf GitHub Pages (`CNAME` kazas.dev). Ein kleines Skript (`theme.js`) für den Umschalter hell, dunkel und automatisch. Keine Build-Kette.
- Seiten heute: Startseite (`index.html`), Datenschutz (`datenschutz.html`), 404-Seite (`404.html`, mit absoluten Pfaden).
- Eine neue Seite braucht eine eigene HTML-Datei, einen Eintrag in der Navigation aller Seiten sowie Einträge in `sitemap.xml` und `llms.txt`.
- `security.txt` läuft am 28.10.2027 ab und wird jährlich verlängert.
- Eine Vorschau von LinkedIn-Beiträgen auf der Seite ist vorerst nicht geplant.
- Fachbegriffe, wie sie auf der Seite verwendet werden: ISMS, BSI IT-Grundschutz, ISO 27001, NIS-2, CRA, BCM (Notfallplanung), OT, TISAX.

Offen:

- Inhalt und Form der Projektseite;
- wann Lebenslauf und Homelab folgen.

## Brand Commitments

- Name und Domain: kazas.dev, Person Rostislaw Kazas, Chemnitz.
- Sprache Deutsch. Er schreibt in der Ich-Form, Besucher werden gesiezt.
- Ton: sachlich und konkret, aus der Praxis, keine Werbesprache.
- Der Arbeitgeber heißt immer voll „SIGMA IT-Security und Infrastruktur“.

## Evidence on Hand

- Porträtfotos: `assets/rostislaw-kazas-portrait*.webp`, Avatar `assets/rostislaw-kazas-avatar.webp`. Ein Roboterfoto (`assets/rostislaw-kazas-ottobot*.webp`) liegt im Repo, wird aber nicht mehr verwendet.
- Vorschaubild für geteilte Links: `assets/og.jpg` (1200 × 630).
- Kennzahlen auf der Startseite: 7 Jahre IT-Dienstleister, 8 Jahre Fahrzeugerprobung, B.Sc. IT-Sicherheit, 3 Sprachen.
- Sprachen: Deutsch und Russisch als Muttersprachen, Englisch fließend.
- Werdegang in Textform: Schaltschrankbau, Server und Netzwerke, Ausrüstung von Versuchsfahrzeugen auf TISAX-zertifizierten Prüfgeländen, selbst programmierte Werkzeuge, die Berichte von Stunden auf Minuten verkürzt haben.
- LinkedIn-Profil: https://www.linkedin.com/in/rkazas/

Nicht vorhanden und nicht zu erfinden: Kundennamen, Referenzen und Testimonials, Fallstudien, Zertifikate und Auditor-Qualifikationen, Projektbeschreibungen, Publikationen außerhalb von LinkedIn, Preise oder Leistungspakete.

## Product Principles

1. **Eigene Präsenz vor Arbeitgeber-Seite.** Die Seite zeigt den Fachmann. Der Arbeitgeber ist Kontext, nicht Absender, damit ein Wechsel oder eine Selbstständigkeit die Seite nicht entwertet.
2. **Praxis statt Behauptung.** Glaubwürdigkeit entsteht aus konkretem Werdegang und echten Zahlen, nicht aus Schlagworten. Was nicht belegt ist, kommt nicht auf die Seite.
3. **Für Geschäftsführung und Technik zugleich lesbar.** Jede Aussage muss für eine Geschäftsführerin verständlich und für einen Admin nicht peinlich sein.
4. **Die Seite lebt vor, was er berät.** Datensparsamkeit, wenig Angriffsfläche und eine ehrliche Datenschutzerklärung gehören zur Glaubwürdigkeit eines Security-Beraters.
5. **Wachsen ohne Umbau.** Neue Bereiche (Projekte, Lebenslauf, Homelab) sollen sich einfügen, ohne die Startseite neu erfinden zu müssen.
