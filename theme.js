// Farbschema: "auto" folgt der Systemeinstellung des Geraets, "hell" und "dunkel" legen es fest.
// Ein Klick wechselt von auto auf das Gegenteil der Systemeinstellung und beim naechsten Klick
// zurueck auf auto, so aendert jeder Klick sichtbar etwas. Nur eine feste Wahl wird im Browser
// gemerkt, in der Stellung auto wird nichts gespeichert.
(function () {
  var k = "kazas-theme", h = document.documentElement, mq = null;
  var text = { auto: "◐ auto", light: "☀ hell", dark: "☾ dunkel" };
  var name = { auto: "automatisch nach Systemeinstellung", light: "hell", dark: "dunkel" };
  var bar = { light: "#f4f2ec", dark: "#0b0e13" };
  var metas = document.querySelectorAll('meta[name="theme-color"]');
  try { mq = matchMedia("(prefers-color-scheme: light)"); } catch (e) {}
  function sysLight() { return !!(mq && mq.matches); }
  function load() { try { var v = localStorage.getItem(k); return (v === "light" || v === "dark") ? v : "auto"; } catch (e) { return "auto"; } }
  function apply(m) {
    h.classList.remove("light", "dark");
    if (m !== "auto") h.classList.add(m);
    // Browserleiste am Handy: bei fester Wahl beide Eintraege auf die gewaehlte Farbe,
    // bei auto wieder je Systemeinstellung
    for (var i = 0; i < metas.length; i++) {
      var el = metas[i];
      if (!el.hasAttribute("data-c")) el.setAttribute("data-c", el.getAttribute("content"));
      el.setAttribute("content", m === "auto" ? el.getAttribute("data-c") : bar[m]);
    }
  }
  var mode = load();
  apply(mode);
  function label(b) {
    b.textContent = text[mode];
    b.setAttribute("aria-label", "Farbschema " + name[mode] + ", zum Wechseln klicken");
  }
  document.addEventListener("DOMContentLoaded", function () {
    var b = document.getElementById("tog"); if (!b) return;
    b.hidden = false;
    label(b);
    b.addEventListener("click", function () {
      mode = mode === "auto" ? (sysLight() ? "dark" : "light") : "auto";
      apply(mode);
      try { if (mode === "auto") localStorage.removeItem(k); else localStorage.setItem(k, mode); } catch (e) {}
      label(b);
    });
  });
})();
