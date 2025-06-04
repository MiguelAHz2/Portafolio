import { useEffect, useRef } from 'react';
import '../styles/CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const trailsRef = useRef([]);
  const trailElementsRef = useRef([]);
  const positionRef = useRef({ x: 0, y: 0 });
  const ringPositionRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastMousePositionRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const isClickingRef = useRef(false);
  const frameRef = useRef();
  const trailContainerRef = useRef(null);

  // Función principal de animación
  const animate = () => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    // Calcular velocidad y posición del anillo
    const dx = positionRef.current.x - lastMousePositionRef.current.x;
    const dy = positionRef.current.y - lastMousePositionRef.current.y;
    
    velocityRef.current = {
      x: dx * 0.1 + velocityRef.current.x * 0.9,
      y: dy * 0.1 + velocityRef.current.y * 0.9
    };

    // Actualizar posición del anillo con suavizado
    ringPositionRef.current = {
      x: ringPositionRef.current.x + (positionRef.current.x - ringPositionRef.current.x) * 0.15,
      y: ringPositionRef.current.y + (positionRef.current.y - ringPositionRef.current.y) * 0.15
    };

    // Aplicar transformaciones
    const velocity = Math.sqrt(
      velocityRef.current.x * velocityRef.current.x +
      velocityRef.current.y * velocityRef.current.y
    );

    // Actualizar posición del cursor principal
    cursor.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
    
    // Actualizar posición del anillo
    ring.style.transform = `translate(${ringPositionRef.current.x}px, ${ringPositionRef.current.y}px) scale(${1 + velocity * 0.005})`;

    // Actualizar trails
    if (trailContainerRef.current) {
      const newTrail = document.createElement('div');
      newTrail.className = 'cursor-trail';
      newTrail.style.left = '0';
      newTrail.style.top = '0';
      newTrail.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px) scale(${0.3 + velocity * 0.01})`;
      
      trailContainerRef.current.appendChild(newTrail);
      trailElementsRef.current.push(newTrail);

      // Eliminar trails antiguos
      if (trailElementsRef.current.length > 8) {
        const oldTrail = trailElementsRef.current.shift();
        if (oldTrail && oldTrail.parentNode) {
          oldTrail.parentNode.removeChild(oldTrail);
        }
      }

      // Actualizar opacidad de los trails
      trailElementsRef.current.forEach((trail, index) => {
        if (trail) {
          trail.style.opacity = (0.3 - (index * 0.03)).toString();
        }
      });
    }

    lastMousePositionRef.current = { ...positionRef.current };
    frameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const trailContainer = document.createElement('div');
    trailContainer.className = 'trail-container';
    document.body.appendChild(trailContainer);
    trailContainerRef.current = trailContainer;

    const handleMouseMove = (e) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = (e) => {
      const isInteractive = e.target.matches('a, button, [role="button"], input, select, textarea, [data-cursor="pointer"]');
      isHoveringRef.current = isInteractive;
      
      if (cursorRef.current) {
        cursorRef.current.classList.toggle('cursor-hover', isInteractive);
      }
      if (ringRef.current) {
        ringRef.current.classList.toggle('cursor-hover', isInteractive);
      }
    };

    const handleMouseDown = () => {
      isClickingRef.current = true;
      if (cursorRef.current) {
        cursorRef.current.classList.add('cursor-click');
      }
      if (ringRef.current) {
        ringRef.current.classList.add('cursor-click');
      }
    };

    const handleMouseUp = () => {
      isClickingRef.current = false;
      if (cursorRef.current) {
        cursorRef.current.classList.remove('cursor-click');
      }
      if (ringRef.current) {
        ringRef.current.classList.remove('cursor-click');
      }
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseEnter, true);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseEnter, true);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      if (trailContainer.parentNode) {
        trailContainer.parentNode.removeChild(trailContainer);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          transform: `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          transform: `translate(${ringPositionRef.current.x}px, ${ringPositionRef.current.y}px)`
        }}
      />
    </>
  );
};

export default CustomCursor; 