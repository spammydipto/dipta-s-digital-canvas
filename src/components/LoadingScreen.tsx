import { useEffect, useState } from "react";
import { gsap } from "gsap";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(".preloader", {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: onLoadingComplete,
        });
      },
    });

    tl.to(".progress-bar", {
      width: "100%",
      duration: 2,
      ease: "power2.out",
      onUpdate: function () {
        setProgress(Math.round(this.progress() * 100));
      },
    });

    gsap.to(".loading-orb", {
      y: -20,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, [onLoadingComplete]);

  return (
    <div className="preloader fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        <div className="loading-orb w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple glow-cyan" />
        <h2 className="text-4xl font-bold gradient-text">Loading Experience</h2>
        <div className="w-64 h-2 bg-card rounded-full overflow-hidden mx-auto">
          <div className="progress-bar h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink" style={{ width: 0 }} />
        </div>
        <p className="text-muted-foreground text-lg">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
