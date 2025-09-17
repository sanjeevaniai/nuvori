import { useEffect, useRef } from 'react';

interface HeartTrail {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  rotation: number;
}

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const heartsRef = useRef<HTMLDivElement[]>([]);
  const trailHeartsRef = useRef<HeartTrail[]>([]);
  const animationRef = useRef<number>();
  const lastMoveTime = useRef<number>(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    
    if (!cursor || !trail) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let isVisible = false;

    // Force hide default cursor on the entire document
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';
    
    // Also hide cursor on all elements
    const hideCursorOnAllElements = () => {
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
        (el as HTMLElement).style.cursor = 'none';
      });
    };
    
    // Initial hide
    hideCursorOnAllElements();
    
    // Periodically re-hide cursor on any new elements
    const cursorHideInterval = setInterval(hideCursorOnAllElements, 100);

    // Heart trail animation
    const animateTrail = () => {
      const now = Date.now();
      
      // Update trail hearts
      trailHeartsRef.current = trailHeartsRef.current
        .map(heart => ({
          ...heart,
          opacity: heart.opacity - 0.02,
          scale: heart.scale - 0.01,
          rotation: heart.rotation + 2
        }))
        .filter(heart => heart.opacity > 0);

      // Render trail hearts
      if (trail) {
        trail.innerHTML = trailHeartsRef.current.map(heart => `
          <div style="
            position: absolute;
            left: ${heart.x}px;
            top: ${heart.y}px;
            width: 12px;
            height: 12px;
            opacity: ${heart.opacity};
            transform: scale(${heart.scale}) rotate(${heart.rotation}deg);
            pointer-events: none;
            z-index: 9999;
          ">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                    fill="#D4A5A5" 
                    stroke="#C89595" 
                    stroke-width="0.5"/>
            </svg>
          </div>
        `).join('');
      }

      // Smooth cursor movement
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      cursor.style.transform = `translate(${cursorX - 12}px, ${cursorY - 12}px)`;
      cursor.style.opacity = isVisible ? '1' : '0';

      animationRef.current = requestAnimationFrame(animateTrail);
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      const now = Date.now();
      
      // Add trail heart every 50ms
      if (now - lastMoveTime.current > 50) {
        trailHeartsRef.current.push({
          id: now,
          x: mouseX - 6,
          y: mouseY - 6,
          opacity: 0.8,
          scale: 1,
          rotation: Math.random() * 360
        });
        
        // Keep only last 20 trail hearts
        if (trailHeartsRef.current.length > 20) {
          trailHeartsRef.current = trailHeartsRef.current.slice(-20);
        }
        
        lastMoveTime.current = now;
      }
    };

    // Mouse enter/leave handlers for the page content
    const handleMouseEnter = (e: MouseEvent) => {
      // Only show cursor when over page content, not outside
      if (e.target && (e.target as Element).closest('body')) {
        isVisible = true;
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      // Hide cursor when leaving the page area
      if (!(e.target && (e.target as Element).closest('body'))) {
        isVisible = false;
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    
    // Also hide cursor when mouse leaves the viewport
    document.addEventListener('mouseleave', () => {
      isVisible = false;
    });

    // Start animation
    animateTrail();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      // Clear the cursor hiding interval
      clearInterval(cursorHideInterval);
      // Restore default cursor
      document.body.style.cursor = '';
      document.documentElement.style.cursor = '';
    };
  }, []);

  return (
    <>
      {/* Main cursor with two hearts */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-200"
        style={{ transform: 'translate(-12px, -12px)' }}
      >
        <div className="relative">
          {/* First heart */}
          <div 
            className="absolute custom-cursor-heart" 
            style={{ 
              transform: 'translate(-8px, -8px) rotate(-15deg)',
              filter: 'drop-shadow(0 2px 4px rgba(212, 165, 165, 0.3))'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                fill="#D4A5A5" 
                stroke="#C89595" 
                strokeWidth="0.8"
              />
            </svg>
          </div>
          
          {/* Second heart */}
          <div 
            className="absolute custom-cursor-heart" 
            style={{ 
              transform: 'translate(2px, 2px) rotate(15deg)',
              filter: 'drop-shadow(0 2px 4px rgba(232, 180, 180, 0.3))',
              animationDelay: '0.5s'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                fill="#E8B4B4" 
                stroke="#D4A5A5" 
                strokeWidth="0.6"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Trail container */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ width: '100vw', height: '100vh' }}
      />
    </>
  );
};
