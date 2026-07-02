/*
 * Liquid Glass initialisation for amitsamant.dev
 * Powered by liquidGL (https://github.com/naughtyduk/liquidGL, MIT).
 *
 * The WebGL lens draws at scroll offsets known to JS, but touch devices
 * (iOS Safari especially) scroll on the compositor thread, so the lens
 * visibly lags and ghosts during scroll. On those devices we skip the
 * WebGL lens entirely and use native CSS glass (backdrop-filter), which
 * stays in sync with scrolling. Desktop gets the full refraction effect.
 */
(function () {
  function prefersWebGLLens() {
    var finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    var isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    return finePointer && !isIOS;
  }

  function initLiquidGlass() {
    var elements = document.querySelectorAll(".liquid-glass");
    if (!elements.length) return;

    if (!prefersWebGLLens() || typeof window.liquidGL !== "function") {
      Array.prototype.forEach.call(elements, function (el) {
        el.classList.add("liquid-glass-css");
      });
      return;
    }

    window.liquidGL({
      target: ".liquid-glass",
      snapshot: "body",
      resolution: 1.5,
      refraction: 0.012,
      bevelDepth: 0.09,
      bevelWidth: 0.16,
      // frost > 0 uses randomised sampling that renders as grainy static;
      // 0 uses a smooth blur instead.
      frost: 0,
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
