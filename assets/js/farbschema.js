/* Farbschema-Schalter für kazas.dev.
   Ohne Wahl folgt die Seite dem Gerät, dann wird nichts gespeichert.
   Eine Wahl (hell oder dunkel) liegt nur im localStorage dieses Browsers. */
(function () {
  var root = document.documentElement;
  var KEY = 'farbschema';
  var REIHE = ['system', 'hell', 'dunkel'];
  var TEXT = { system: 'wie Gerät', hell: 'hell', dunkel: 'dunkel' };
  var modus = 'system';

  try {
    var gespeichert = window.localStorage.getItem(KEY);
    if (REIHE.indexOf(gespeichert) > -1) modus = gespeichert;
  } catch (e) { /* kein Speicher verfügbar, Gerät entscheidet */ }

  function anwenden() {
    if (modus === 'hell') root.setAttribute('data-theme', 'light');
    else if (modus === 'dunkel') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    root.setAttribute('data-farbschema', modus);
  }
  anwenden();

  document.addEventListener('DOMContentLoaded', function () {
    var knopf = document.querySelector('.schema');
    if (!knopf) return;

    function beschriften() {
      var naechster = REIHE[(REIHE.indexOf(modus) + 1) % REIHE.length];
      knopf.setAttribute('aria-label', 'Farbschema ' + TEXT[modus] + ', wechseln zu ' + TEXT[naechster]);
      knopf.title = 'Farbschema: ' + TEXT[modus];
    }

    knopf.addEventListener('click', function () {
      modus = REIHE[(REIHE.indexOf(modus) + 1) % REIHE.length];
      try {
        if (modus === 'system') window.localStorage.removeItem(KEY);
        else window.localStorage.setItem(KEY, modus);
      } catch (e) { /* Wahl gilt dann nur bis zum Neuladen */ }
      anwenden();
      beschriften();
    });

    beschriften();
    knopf.hidden = false;
  });
})();
