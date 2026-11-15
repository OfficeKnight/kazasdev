// Farbschema mit drei Stellungen. "auto" folgt der Systemeinstellung des Geraets,
// "hell" und "dunkel" legen es fest. Die feste Wahl wird nur im Browser gemerkt.
(function () {
  var k = "kazas-theme", h = document.documentElement, mq = null;
  var order = ["auto", "light", "dark"];
  var text = { auto: "◐ auto", light: "☀ hell", dark: "☾ dunkel" };
  var name = { auto: "automatisch nach Systemeinstellung", light: "hell", dark: "dunkel" };
  try { mq = matchMedia("(prefers-color-scheme: light)"); } catch (e) {}
  function load() { try { var v = localStorage.getItem(k); return (v === "light" || v === "dark") ? v : "auto"; } catch (e) { return "auto"; } }
  function apply(m) { h.classList.remove("light", "dark"); if (m !== "auto") h.classList.add(m); }
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
      mode = order[(order.indexOf(mode) + 1) % order.length];
      apply(mode);
      try { if (mode === "auto") localStorage.removeItem(k); else localStorage.setItem(k, mode); } catch (e) {}
      label(b);
    });
  });
})();
