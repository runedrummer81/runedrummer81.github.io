import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { twMerge } from "tailwind-merge";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [1, 1, 1],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 }
  ]
};

export function Globe({ className, config = GLOBE_CONFIG }) {
  const phi = useRef(0);
  const [width, setWidth] = useState(0);
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100
  });

  const updatePointerInteraction = value => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = clientX => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        const newWidth = canvasRef.current.offsetWidth;
        setWidth(newWidth);
        console.log("[Globe] Canvas width set to:", newWidth);
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current || width === 0) {
      console.warn("[Globe] Canvas ref not ready or width is zero.");
      return;
    }
    let globe;
    try {
      globe = createGlobe(canvasRef.current, {
        ...config,
        width: width * 2,
        height: width * 2,
        onRender: state => {
          if (!pointerInteracting.current) phi.current += 0.005;
          state.phi = phi.current + rs.get();
          state.width = width * 2;
          state.height = width * 2;
        }
      });
      setTimeout(() => (canvasRef.current.style.opacity = "1"), 0);
      console.log("[Globe] Globe created with width:", width * 2);
    } catch (e) {
      console.error("[Globe] Error creating globe:", e);
    }
    return () => {
      if (globe) globe.destroy();
    };
  }, [rs, config, width]);

  return (
    <div className={twMerge("mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
      <canvas
        className={twMerge("size-[30rem] opacity-0 transition-opacity duration-500 [contain:layout_paint_size]")}
        ref={canvasRef}
        onPointerDown={e => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={e => updateMovement(e.clientX)}
        onTouchMove={e => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  );
}
