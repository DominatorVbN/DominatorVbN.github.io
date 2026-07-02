/*
 * Liquid Glass initialisation for amitsamant.dev
 * Powered by liquidGL (https://github.com/naughtyduk/liquidGL, MIT).
 * WebGL-based so it works on mobile browsers too; liquidGL itself
 * falls back to a CSS frosted-glass backdrop when WebGL is missing.
 */
(function () {
  function initLiquidGlass() {
    if (typeof window.liquidGL !== "function") {
      return;
    }

    var isSmallScreen = window.innerWidth < 768;

    window.liquidGL({
      target: ".liquid-glass",
      snapshot: "body",
      // Long image-heavy page: lower snapshot resolution on phones to
      // stay within mobile GPU texture limits.
      resolution: isSmallScreen ? 1.0 : 1.5,
      refraction: 0.012,
      bevelDepth: 0.09,
      bevelWidth: 0.16,
      frost: 3,
      shadow: true,
      specular: true,
      reveal: "fade",
      tilt: false,
      magnify: 1,
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLiquidGlass);
  } else {
    initLiquidGlass();
  }
})();
