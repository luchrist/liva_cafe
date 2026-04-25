Hero video assets — Liva's Matcha
==================================

Drop the user-supplied animation here:

  matcha-splash.mp4   (the scroll-scrubbed clip: matcha at rest -> ice cube
                       falls in -> matcha splashes out)
  matcha-poster.jpg   (a still frame used as poster while the video loads)

The Hero component (src/components/hero.tsx) wires window scroll progress
to video.currentTime, so the user "scrubs" through the clip as they scroll
down the first 280vh of the page.

Recommended encode:
  - H.264 baseline / main, faststart (-movflags +faststart)
  - 1080x1920 portrait or 1920x1080 landscape, 30fps, 6-10s
  - Constant frame rate, no audio (muted anyway)
  - ~6-12 MB target

Until the file is dropped in, the component automatically falls back to a
CSS-driven cup + ice-cube + splash animation that scrubs with scroll.
