import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

export default function scroll() {
  const lenis = new Lenis({
    duration: 1.8,
    easing: function (t) {
      return Math.min(1, 1.001 - Math.pow(2, -10 * t));
    },
    infinite: false,
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
