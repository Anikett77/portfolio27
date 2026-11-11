import { useEffect, useRef } from "react";

export function GlobalAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;
    audio.muted = false;

    let done = false;

    const cleanup = () => {
      events.forEach((e) => window.removeEventListener(e, onGesture));
      document.removeEventListener("visibilitychange", onVisible);
    };

    const tryPlay = () => {
      const p = audio.play();
      if (p && typeof p.then === "function") {
        p.then(() => {
          done = true;
          cleanup();
        }).catch(() => {});
      }
    };

    const onGesture = () => {
      if (done) return;
      tryPlay();
    };

    const onVisible = () => {
      if (!done && document.visibilityState === "visible") tryPlay();
    };

    // Mobile browsers require a user gesture — keep listening until playback starts.
    const events = ["pointerdown", "touchstart", "touchend", "click", "keydown", "scroll"] as const;
    events.forEach((e) =>
      window.addEventListener(e, onGesture, { passive: true } as AddEventListenerOptions)
    );
    document.addEventListener("visibilitychange", onVisible);

    tryPlay();

    return cleanup;
  }, []);

  return (
    <audio ref={audioRef} loop autoPlay preload="auto">
      <source src="/audio/double-take.m4a" type="audio/mp4" />
      <source src="/audio/double-take.webm" type="audio/webm" />
    </audio>
  );
}
