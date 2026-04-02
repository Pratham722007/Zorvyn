"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      init();
    };
    window.addEventListener('resize', handleResize);

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener('mouseout', handleMouseOut);

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > w || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > h || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Extremely subtle mouse collision (particles drift away slightly)
        if (mouse.x && mouse.y) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx*dx + dy*dy);
          if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < w - this.size * 10) { this.x += 0.5; }
            if (mouse.x > this.x && this.x > this.size * 10) { this.x -= 0.5; }
            if (mouse.y < this.y && this.y < h - this.size * 10) { this.y += 0.5; }
            if (mouse.y > this.y && this.y > this.size * 10) { this.y -= 0.5; }
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      let numberOfParticles = Math.min((h * w) / 12000, 150); // cap max particles for performance
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 1.5) + 0.5;
        let x = (Math.random() * ((w - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((h - size * 2) - (size * 2)) + size * 2);
        
        // very slow drifting
        let directionX = (Math.random() * 0.4) - 0.2;
        let directionY = (Math.random() * 0.4) - 0.2;
        let color = '#3a8ecc';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function connect() {
      if (!ctx) return;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
            + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
          
          if (distance < 15000) {
            let opacityValue = 1 - (distance/15000);
            ctx.strokeStyle = `rgba(0, 136, 204, ${opacityValue * 0.15})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
      
      // Connect to mouse pointer
      if (mouse.x && mouse.y) {
         for (let a = 0; a < particlesArray.length; a++) {
           let dx = mouse.x - particlesArray[a].x;
           let dy = mouse.y - particlesArray[a].y;
           let distance = (dx * dx) + (dy * dy);
           if (distance < 20000) {
             let opacityValue = 1 - (distance/20000);
             ctx.strokeStyle = `rgba(0, 136, 204, ${opacityValue * 0.2})`;
             ctx.lineWidth = 1;
             ctx.beginPath();
             ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
             ctx.lineTo(mouse.x, mouse.y);
             ctx.stroke();
           }
         }
      }
    }

    let animationId: number;
    function animate() {
      if (!ctx) return;
      animationId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#0a0a0a]">
      {/* Ultra faint structural grid fallback */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_10%,transparent_100%)] z-0" />
      
      {/* Network Particle Canvas */}
      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-60 z-10 relative" 
      />
    </div>
  );
}
