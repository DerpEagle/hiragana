/* prettier-ignore */
/*
 *    _____ _     _____ _   _ _   _
 *   / ____| |   |  ___| \ | | \ | |
 *  | |  __| |   | |__ |  \| |  \| |
 *  | | |_ | |   |  __|| . ` | . ` |
 *  | |__| | |___| |___| |\  | |\  |
 *   \_____|_____|_____|_| \_|_| \_|
 *
 *  theme.js — Light/dark theme switcher
 *  Glenn's Japanese Trainer
 */

(function () {
  var stored = localStorage.getItem("app-theme") || "system";
  var mql = window.matchMedia("(prefers-color-scheme: light)");

  function apply(pref) {
    var resolved = pref === "system"
      ? (mql.matches ? "light" : "dark")
      : pref;
    document.documentElement.dataset.theme = resolved;
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = resolved === "light" ? "#dfe5ec" : "#0f3460";
  }

  apply(stored);

  mql.addEventListener("change", function () {
    if ((localStorage.getItem("app-theme") || "system") === "system") {
      apply("system");
    }
  });

  window.setTheme = function (value) {
    localStorage.setItem("app-theme", value);
    apply(value);
  };
})();
