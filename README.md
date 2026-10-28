# kazas.dev

Persönliche Seite von Rostislaw Kazas. Statisches HTML und CSS, kein Build, kein JavaScript, kein Tracking.

## Dateien

| Datei | Zweck |
| --- | --- |
| `index.html` | Über-mich-Seite |
| `datenschutz.html` | Datenschutzerklärung |
| `style.css` | Gestaltung, hell als Vorgabe, dunkel nach Systemeinstellung |
| `assets/` | Fotos, Vorschaubild für geteilte Links, Schriften (Newsreader, Public Sans, beide SIL Open Font License) |
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

- Text ändern in `index.html`, pushen nach `main`, nach etwa einer Minute ist es live.
- `security.txt` einmal im Jahr das Datum in `Expires` verlängern.
- Bei einem Wechsel der E-Mail-Adresse `datenschutz.html` und `security.txt` anpassen.
