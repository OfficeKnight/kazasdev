# kazas.dev

Persönliche Seite von Rostislaw Kazas. Statisches HTML und CSS, kein Build, keine Cookies. Einziges Skript ist der Farbschema-Schalter (hell, dunkel, wie Gerät).

## Dateien

| Datei | Zweck |
| --- | --- |
| `index.html` | Startseite mit Kopf, Schwerpunkten und den vier Stationen |
| `werkstatt/index.html` | Werkstatt, Projekte aus der Freizeit, Fotos folgen |
| `datenschutz.html` | Datenschutzerklärung |
| `style.css` | Gestaltung, Farben als Tokens, hell und dunkel nach Systemeinstellung oder Schalter |
| `assets/js/farbschema.js` | Schalter für das Farbschema, speichert eine Wahl nur im localStorage |
| `assets/fonts/` | IBM Plex Sans und IBM Plex Mono (SIL Open Font License, siehe `OFL-IBM-Plex.txt`), offizielle Latin1-Teildateien von IBM |
| `assets/` | Fotos, Vorschaubild für geteilte Links |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Browser-Symbole mit den Initialen |
| `.well-known/security.txt` | Kontakt für Sicherheitsmeldungen, läuft am 28.10.2027 ab und muss dann verlängert werden |
| `CNAME` | Custom Domain für GitHub Pages |
| `robots.txt` | Freigabe für Suchmaschinen |
| `.nojekyll` | Verhindert, dass GitHub Pages den Ordner `.well-known` weglässt |

## Live schalten

1. Diesen Branch nach `main` mergen.
2. Im Repository auf GitHub unter Settings, Pages, bei Build and deployment die Source auf Deploy from a branch stellen, Branch `main`, Ordner `/ (root)`, speichern.
3. Auf derselben Seite unter Custom domain `kazas.dev` eintragen und speichern. GitHub prüft dann die DNS-Einträge.
4. Bei INWX für die Domain kazas.dev diese Einträge anlegen:

```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
AAAA  @    2606:50c0:8000::153
AAAA  @    2606:50c0:8001::153
AAAA  @    2606:50c0:8002::153
AAAA  @    2606:50c0:8003::153
CNAME www  officeknight.github.io.
TXT   @       "v=spf1 -all"
TXT   _dmarc  "v=DMARC1; p=reject;"
```

5. Den bisherigen A-Record auf die INWX-Parkseite entfernen.
6. Sobald GitHub unter Custom domain einen grünen Haken zeigt (meist nach wenigen Minuten, bis zu einer Stunde), den Haken bei Enforce HTTPS setzen. Ohne HTTPS lädt eine `.dev`-Domain in keinem Browser.
7. Prüfen: https://kazas.dev, https://www.kazas.dev (leitet auf kazas.dev um), https://kazas.dev/.well-known/security.txt

## Pflege

- Text ändern in `index.html` oder `werkstatt/index.html`, pushen nach `main`, nach etwa einer Minute ist es live.
- Die Links zu LinkedIn tragen schon `data-goatcounter-click`. Sobald GoatCounter eingebunden ist, zählen sie als Ereignis. Dann Content-Security-Policy in allen Seiten um die GoatCounter-Adresse erweitern und den Absatz zur Besucherstatistik in `datenschutz.html` ergänzen.
- `security.txt` einmal im Jahr das Datum in `Expires` verlängern.
- Bei einem Wechsel der E-Mail-Adresse `datenschutz.html` und `security.txt` anpassen.
