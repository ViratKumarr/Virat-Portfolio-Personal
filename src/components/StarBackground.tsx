'use client';

import React, { useRef, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match container
    const setCanvasSize = () => {
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Star properties
    const stars: Star[] = [];
    const numStars = 150; // Reduced number of stars
    const starColor = isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.5)';
    const starGlowColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

    // Mouse tracking with reduced sensitivity
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    container.addEventListener('mousemove', handleMouseMove);

    // Star class
    class Star {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      glowSize: number;
      private readonly canvasWidth: number;
      private readonly canvasHeight: number;

      constructor(width: number, height: number) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.x = Math.random() * this.canvasWidth;
        this.y = Math.random() * this.canvasHeight;
        this.size = Math.random() * 1.5 + 0.5;
        // Increased base speed
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.glowSize = this.size * 4;
      }

      update() {
        // Faster base movement
        this.x += this.speedX * 1.5;
        this.y += this.speedY * 1.5;

        // Mouse interaction with increased force and radius
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200; // Increased interaction radius

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          this.x -= (dx / distance) * force * 0.8; // Increased force
          this.y -= (dy / distance) * force * 0.8;
        }

        // Wrap around screen
        if (this.x < 0) this.x = this.canvasWidth;
        if (this.x > this.canvasWidth) this.x = 0;
        if (this.y < 0) this.y = this.canvasHeight;
        if (this.y > this.canvasHeight) this.y = 0;
      }

      draw(context: CanvasRenderingContext2D) {
        // Draw glow with increased size
        const gradient = context.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.glowSize
        );
        gradient.addColorStop(0, starGlowColor);
        gradient.addColorStop(1, 'transparent');

        context.beginPath();
        context.fillStyle = gradient;
        context.arc(this.x, this.y, this.glowSize, 0, Math.PI * 2);
        context.fill();

        // Draw star
        context.beginPath();
        context.fillStyle = starColor;
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push(new Star(canvas.width, canvas.height));
    }

    // Animation loop with slower frame rate
    let lastTime = 0;
    const frameInterval = 1000 / 30; // 30 FPS instead of 60

    const animate = (currentTime: number) => {
      if (!canvas || !ctx) return;

      const deltaTime = currentTime - lastTime;
      if (deltaTime < frameInterval) {
        requestAnimationFrame(animate);
        return;
      }

      lastTime = currentTime - (deltaTime % frameInterval);
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.update();
        star.draw(ctx);
      });
      requestAnimationFrame(animate);
    };
    animate(0);

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDark]); // Re-run effect when theme changes

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default StarBackground; 