import React, { useEffect, useRef } from 'react';

export const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: Particle[] = [];
    const particleCount = Math.min(window.innerWidth / 15, 80); // Slightly increased count
    const connectionDistance = 150;
    const mouseDistance = 200;

    let mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      colorType: 'gold' | 'slate';
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3; // Slightly faster for vitality
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 2 + 1; // Slightly larger base size
        this.colorType = Math.random() > 0.6 ? 'gold' : 'slate'; 
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseDistance - distance) / mouseDistance;
          const directionX = forceDirectionX * force * 0.5;
          const directionY = forceDirectionY * force * 0.5;
          this.vx += directionX * 0.05;
          this.vy += directionY * 0.05;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Increased opacity so they are visible but still elegant
        if (this.colorType === 'gold') {
           ctx.fillStyle = 'rgba(212, 175, 55, 0.4)'; 
        } else {
           ctx.fillStyle = 'rgba(148, 163, 184, 0.4)'; 
        }
        ctx.fill();
      }
    }

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      particles.forEach((a, index) => {
        for (let j = index + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - (distance / connectionDistance);
            // Increased opacity from 0.04 to 0.15 so lines are visible
            ctx.strokeStyle = `rgba(148, 163, 184, ${opacity * 0.2})`; 
            ctx.lineWidth = 0.5; 
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0)_0%,rgba(241,245,249,0.5)_100%)] z-[1]" />
      <div className="absolute inset-0 opacity-[0.03] z-[2]" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)', 
             backgroundSize: '60px 60px' 
           }} 
      />
      <canvas ref={canvasRef} className="absolute inset-0 z-[3]" />
      <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-multiply z-[4]" />
    </div>
  );
};