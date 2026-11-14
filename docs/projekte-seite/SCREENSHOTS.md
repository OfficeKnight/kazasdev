# Screenshots und Fotos für die Projekte-Seite

Zielordner ist `assets/projekte/`. Jedes Bild gibt es in zwei Breiten, damit Handys die kleine Fassung laden.

## Technik

| Punkt | Vorgabe |
| --- | --- |
| Fenstergröße beim Aufnehmen | 1440 × 900, Zoom 100 % |
| Format | WebP, Qualität etwa 80 |
| Große Fassung | 1600 px breit |
| Kleine Fassung | 800 px breit, Dateiname mit `-800` am Ende |
| Seitenverhältnis Startseite und Projektbilder | 16 zu 10 |
| Seitenverhältnis Dashboard | 16 zu 7 (flacher Ausschnitt) |
| Metadaten | EXIF und GPS entfernen |

In Chrome geht ein sauberer Screenshot ohne Erweiterung. Entwicklerwerkzeuge öffnen, Befehlsmenü mit Strg+Umschalt+P aufrufen und diesen Befehl eingeben.

```
Capture screenshot
```

## Pflicht

| Erledigt | Datei | Motiv | Hinweise |
| --- | --- | --- | --- |
| [ ] | `nadelneu-startseite.webp` | Startseite des Studios, oberer Bereich mit Titel und Menü | Die Fassung zeigen, die zum Text der Karte passt |
| [ ] | `nadelneu-dashboard.webp` | Dashboard, Bereich „Fotos und Videos verwalten“ | Aus der Docker-Testumgebung mit Beispieldaten aufnehmen |

## Kann die Seite aufwerten

| Erledigt | Datei | Motiv | Hinweise |
| --- | --- | --- | --- |
| [ ] | `nadelneu-statistik.webp` | Besucherstatistik im Dashboard | Nur mit Testdaten |
| [ ] | `nadelneu-handy.webp` | Startseite in Handybreite (390 px) | Für die Fallstudie |
| [ ] | `winutil-profile.webp` | WinUtil RoKa Edition, Reiter mit den Profilen | In der Windows-VM aufnehmen |
| [ ] | `rokacharger-aufbau.webp` | Foto von Labornetzteil und Raspberry Pi auf dem Werktisch | Ohne Personen, aufgeräumter Hintergrund |
| [ ] | `rokacharger-oberflaeche.webp` | Weboberfläche während eines Ladevorgangs | Keine IP-Adressen im Bild |

## Worauf zu achten ist

- Keine echten Namen, E-Mail-Adressen, Besucherzahlen oder Kundendaten im Bild. Das Dashboard deshalb nur aus der Testumgebung zeigen.
- Keine Adressleiste mit internen Adressen, keine Lesezeichenleiste, keine Browser-Erweiterungen. Am einfachsten nur den Seiteninhalt aufnehmen. Den Rahmen mit der Adresse zeichnet die Seite selbst.
- Keine Personen auf Fotos. Bilder aus dem Studio (Tätowierungen, Kundschaft) nur mit Einverständnis des Inhabers.
- Dunkle Motive passen besser zur Seite. Beim Dashboard die Ansicht wählen, die im dunklen Design der Projekte-Seite nicht grell wirkt.
- Zu jedem Bild einen kurzen Alternativtext notieren, der beschreibt, was zu sehen ist.

## Einbau

Der Platzhalter in `mockup.html` wird durch ein Bild ersetzt. Beispiel für die Startseite.

```html
<img src="assets/projekte/nadelneu-startseite.webp"
     srcset="assets/projekte/nadelneu-startseite-800.webp 800w, assets/projekte/nadelneu-startseite.webp 1600w"
     sizes="(max-width: 980px) 100vw, 480px"
     width="1600" height="1000" loading="lazy"
     alt="Startseite von Nadelneu Tattoo Atelier Chemnitz">
```
