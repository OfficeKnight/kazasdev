# kazas.dev

Lebenslauf-Seite ist zurückgestellt und liegt noch nicht im Repo.

Persönliche Seite von Rostislaw Kazas im Konsolendesign. Statisches HTML und CSS, ein kleines Skript für den Hell/Dunkel-Umschalter, kein Tracking.

## Dateien

| Datei | Zweck |
| --- | --- |
| `index.html` | Startseite |
| `isms.html` | Themenseite ISMS, Managementsystem für Informationssicherheit |
| `nis2-cra.html` | Themenseite NIS-2 und Cyber Resilience Act |
| `bcm.html` | Themenseite BCM, Notfallplanung |
| `ot.html` | Themenseite OT, Sicherheit für Maschinen und Anlagen |
| `datenschutz.html` | Datenschutzerklärung |
| `style.css` | Gestaltung, dunkel als Vorgabe, hell per Umschalter |
| `theme.js` | Merkt sich die Wahl hell oder dunkel im Browser |
| `assets/` | Fotos, Vorschaubild für geteilte Links, Schriften JetBrains Mono und Inter (beide SIL Open Font License, Lizenztext für Inter in `assets/fonts/inter-OFL.txt`) |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Browser-Symbole mit den Initialen |
| `.well-known/security.txt` | Kontakt für Sicherheitsmeldungen, läuft am 28.10.2027 ab |
| `CNAME`, `robots.txt`, `.nojekyll` | GitHub Pages |

## Pflege

- Text ändern, auf `main` pushen, nach etwa einer Minute live.
- Neue Seiten (Projekte, Homelab) bekommen eine eigene HTML-Datei und einen Eintrag in der Navigation aller Seiten.
- Bei inhaltlichen Änderungen an einer Themenseite das Stand-Datum und die Quellen nachziehen. Neue Themen folgen dem Aufbau der bestehenden Themenseiten und bekommen eine Kachel unter Kernthemen auf der Startseite. Sie brauchen keinen eigenen Navigationspunkt, denn „Themen“ führt zu diesen Kacheln.
- `security.txt` einmal im Jahr verlängern.
