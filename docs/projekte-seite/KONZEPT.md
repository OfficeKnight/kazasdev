# Projekte-Seite für kazas.dev

Stand 15.11.2026. Dieser Ordner ist Arbeitsmaterial für die Umsetzung der Seite `projekte.html`. Er liegt nur auf dem Zweig `projekte-seite`. Vor dem Zusammenführen nach `main` wird er gelöscht, sonst wäre er unter `kazas.dev/docs/` öffentlich abrufbar.

## Was hier liegt

| Datei | Zweck |
| --- | --- |
| `KONZEPT.md` | Dieses Dokument mit Aufbau, Entscheidungen und Umsetzungsschritten |
| `mockup.html` | Entwurf der Seite als fertiges HTML, nutzt das echte `style.css` der Seite |
| `mockup.css` | Die zusätzlichen Stilregeln, die `style.css` für die Seite noch braucht |
| `SCREENSHOTS.md` | Liste der Screenshots und Fotos, die noch erstellt werden |

Der erste Entwurf entstand als Design-Canvas in Claude (Desktop und Handy). Das HTML hier ist dieselbe Seite, nur mit den Klassen und Farbvariablen der echten Seite gebaut. Ein Unterschied ist gewollt. Tags und Statusmarken sind hier Flächen statt Rahmen, weil `style.css` nach dem Grundsatz „Flächen statt Linien“ gebaut ist.

Ansehen lässt sich der Entwurf lokal mit einem kleinen Webserver im Hauptordner des Repos.

```
python -m http.server 8000
```

Danach im Browser `http://localhost:8000/docs/projekte-seite/mockup.html` öffnen.

## Idee

Das Portfolio ist noch klein. Die Seite setzt deshalb auf Tiefe statt Menge. Ein Projekt wird groß und ehrlich gezeigt, die übrigen folgen als kurze Karten mit Status. So wirkt die Seite auch mit wenigen Einträgen vollständig und wächst später ohne Umbau.

## Aufbau

| Nr. | Abschnitt | Inhalt |
| --- | --- | --- |
| Kopf | Projekte | Statuszeile (Pfad, Anzahl Kunde, eigene, pausiert, Stand), Überschrift, ein Satz Einleitung |
| 01 | Im Fokus | Nadelneu als große Karte mit zwei Screenshots, Gegenüberstellung „Übernommen“ und „Von mir“, drei Kennzahlen, Technik, zwei Links |
| 02 | Eigene Projekte | Vier Karten mit Bereich, Status, Kurztext, Technik und Link |
| 03 | Früher | Drei Zeilen mit Zeitraum, Titel und einem Satz |
| 04 | Weiter | Eine Karte mit Link zu LinkedIn |

Alle Texte stehen fertig in `mockup.html`. Dort wird geändert, nicht hier.

## Rolle bei Nadelneu

Die Frage war, ob der Beitrag nur „Backend“ ist. Die Antwort aus dem Projektverlauf lautet nein.

| Übernommen | Von mir |
| --- | --- |
| Gestaltung und Bildsprache | Neues Dashboard mit Anmeldung, Konten und Passwort-Reset |
| Aufbau der Startseite | Verwaltung von Fotos, Videos, Texten und Kontaktangaben |
| Fotos und Videos des Studios | Besucherstatistik ohne Cookies |
| | Englisch als zweite Sprache |
| | Sicherheitsreview und automatische Prüfungen |
| | Docker-Testumgebung und Sicherung |

Empfohlene Rollenbezeichnung für Lebenslauf und LinkedIn ist „Weiterentwicklung, Dashboard und Sicherheit, Design übernommen“.

## Platzhalter

Dieses Repo ist öffentlich. Deshalb stehen drei Angaben zu Nadelneu im Entwurf nur als Platzhalter.

| Platzhalter | Was hinein soll | Wann |
| --- | --- | --- |
| `[Status]` | Stand des Projekts, zum Beispiel „live“ | Bei der Umsetzung, nach Rücksprache mit dem Studio |
| `[Zahl]` Befunde behoben | Zahl aus dem Sicherheitsreview | Bei der Umsetzung, nach Rücksprache mit dem Studio |
| `[Zahl]` automatische Prüfungen | Zahl aus dem Sicherheitsreview | Bei der Umsetzung, nach Rücksprache mit dem Studio |

Die Werte stehen im privaten Projekt-Repo im Bericht zum Sicherheitsreview. Angaben zu einem Kundenprojekt kommen erst mit der fertigen Seite und dem Einverständnis des Studios in die Öffentlichkeit.

## Offene Entscheidungen

- [ ] Einverständnis des Studio-Inhabers, dass das Studio mit Namen und Screenshots gezeigt wird
- [ ] Fallstudie zu Nadelneu als eigene Seite (`projekte/nadelneu.html`) oder zunächst nur die große Karte ohne den Knopf „Fallstudie lesen“
- [ ] Abschnitt „Früher“ behalten oder streichen (enthält Berufliches, die Seite sollte sonst nur Privates zeigen)
- [ ] Schulungsplattform zeigen, obwohl sie pausiert ist
- [ ] Ziele für die Links „Bilder und Aufbau“ (rokacharger) und „So ist die Seite gebaut“ (kazas.dev). Ohne Zielseite werden die Links weggelassen
- [ ] Prüfen, ob der Fork `OfficeKnight/winutil` öffentlich ist, bevor er verlinkt wird

## Umsetzung

1. `mockup.html` nach `projekte.html` in den Hauptordner kopieren. Pfade anpassen (`../../` entfällt), die Zeile mit `noindex` und den Hinweis-Kommentar entfernen, Titel, Beschreibung, `canonical` und die Open-Graph-Angaben wie in `index.html` ergänzen.
2. Den Inhalt von `mockup.css` ans Ende von `style.css` hängen.
3. Den Eintrag „Projekte“ in die Navigation von `index.html` und `datenschutz.html` aufnehmen.
4. Screenshots nach `SCREENSHOTS.md` erstellen, in `assets/projekte/` ablegen und die Platzhalter `<div class="ph">` durch `<img>` mit `width`, `height`, `alt` und `loading="lazy"` ersetzen.
5. Platzhalter aus dem Abschnitt oben füllen, Links setzen.
6. Tabelle in `README.md` um `projekte.html` und `assets/projekte/` ergänzen.
7. Den Ordner `docs/` löschen.
8. Vor dem Push auf `main` in 390 px und 1280 px Breite prüfen, jeweils hell und dunkel.

## Technische Randbedingungen

- Die Seite hat eine strenge Content-Security-Policy. Erlaubt sind nur eigene Dateien. Keine `style`-Attribute, kein eingebettetes CSS oder JavaScript, keine Bilder oder Schriften von fremden Servern.
- Kein Build-Schritt, kein Framework. Eine HTML-Datei je Seite.
- Farben nur über die Variablen aus `style.css`, damit hell und dunkel stimmen.
- Bilder ohne Personen und ohne EXIF- und GPS-Daten.
- Schreibregeln für Texte auf der Seite. Keine Gedankenstriche, kein Doppelpunkt als Satzeinleitung, der Arbeitgeber heißt immer „SIGMA IT-Security und Infrastruktur“.
