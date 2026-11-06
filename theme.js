// Auto folgt dem System. Der Umschalter setzt hell oder dunkel fest und merkt sich die Wahl im Browser.
(function () {
  var k = "kazas-theme", h = document.documentElement, mq = null;
  try { mq = matchMedia("(prefers-color-scheme: light)"); } catch (e) {}
  try { var v = localStorage.getItem(k); if (v === "light" || v === "dark") h.classList.add(v); } catch (e) {}
  function isLight() { return h.classList.contains("light") || (!h.classList.contains("dark") && mq && mq.matches); }
  function label(b) { b.textContent = isLight() ? "☀ hell" : "☾ dunkel"; }
  document.addEventListener("DOMContentLoaded", function () {
    var b = document.getElementById("tog"); if (!b) return;
    label(b);
    b.addEventListener("click", function () {
      var next = isLight() ? "dark" : "light";
      h.classList.remove("light", "dark"); h.classList.add(next);
      try { localStorage.setItem(k, next); } catch (e) {}
      label(b);
    });
    if (mq && mq.addEventListener) mq.addEventListener("change", function () { label(b); });
  });
})();
