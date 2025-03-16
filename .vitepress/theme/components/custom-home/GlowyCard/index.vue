<template>
  <section class="glow-card" data-glow>
    <div data-glow />
    <slot />
  </section>
</template>

<style scoped>
.glow-card:first-of-type {
  --base: 80;
  --spread: 500;
  --outer: 1;
}

.glow-card:last-of-type {
  --outer: 1;
  --base: 220;
  --spread: 200;
}

.glow-card {
  position: relative;
  border-radius: calc(var(--glowy-card-radius) * 1px);
  backdrop-filter: blur(5px);
}

/* Glow specific styles, if set the --glowy-card-hue a constant, it's a constant glow */

/* --glowy-card-hue: calc(var(--base) + (var(--xp, 0) * var(--spread, 0))); */
[data-glow] {
  --glowy-card-border-size: calc(var(--glowy-card-border, 2) * 1px);
  --glowy-card-spotlight-size: calc(var(--glowy-card-size, 150) * 1px);

  position: relative;
  background-color: var(--glowy-card-backdrop, transparent);
  background-image:
    radial-gradient(
      var(--glowy-card-spotlight-size) var(--glowy-card-spotlight-size) at calc(var(--glowy-card-x, 0) * 1px) calc(
        var(--glowy-card-y, 0) * 1px
      ),
      hsl(
        var(--glowy-card-hue, 210) calc(var(--glowy-card-saturation, 100) * 1%) calc(
          var(--glowy-card-lightness, 70) * 1%
        ) / var(--bg-spot-opacity, 0.1)
      ),
      transparent
    );
  background-attachment: fixed;
  background-position: 50% 50%;
  background-size:
    calc(100% + (2 * var(--glowy-card-border-size))) calc(
      100% + (2 * var(--glowy-card-border-size))
    );
  border: var(--glowy-card-border-size) solid var(--glowy-card-backup-border);
}

[data-glow]::before,
[data-glow]::after {
  position: absolute;
  inset: calc(var(--glowy-card-border-size) * -1);
  pointer-events: none;
  content: "";
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 50% 50%;
  background-size:
    calc(100% + (2 * var(--glowy-card-border-size))) calc(
      100% + (2 * var(--glowy-card-border-size))
    );
  border: var(--glowy-card-border-size) solid transparent;
  border-radius: calc(var(--glowy-card-radius) * 1px);
  mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
  mask-clip: padding-box, border-box;
  mask-composite: intersect;
}

/* This is the emphasis light */
[data-glow]::before {
  background-image:
    radial-gradient(
      calc(var(--glowy-card-spotlight-size) * 0.75) calc(var(--glowy-card-spotlight-size) * 0.75) at
      calc(var(--glowy-card-x, 0) * 1px) calc(var(--glowy-card-y, 0) * 1px),
      hsl(
        var(--glowy-card-hue, 210) calc(var(--glowy-card-saturation, 100) * 1%) calc(
          var(--glowy-card-lightness, 50) * 1%
        ) / var(--border-spot-opacity, 1)
      ),
      transparent 100%
    );
  filter: brightness(2);
}

/* This is the spotlight */
[data-glow]::after {
  background-image:
    radial-gradient(
      calc(var(--glowy-card-spotlight-size) * 0.5) calc(var(--glowy-card-spotlight-size) * 0.5) at calc(
        var(--glowy-card-x, 0) * 1px
      ) calc(var(--glowy-card-y, 0) * 1px),
      hsl(0deg 100% 100% / var(--border-light-opacity, 1)),
      transparent 100%
    );
}

[data-glow] [data-glow] {
  position: absolute;
  inset: 0;
  border: none;
  opacity: var(--outer, 1);
  will-change: filter;
}

[data-glow] > [data-glow] {
  pointer-events: none;
  background: none;
  border-width: calc(var(--glowy-card-border-size) * 20);
  border-radius: calc(var(--glowy-card-radius) * 1px);
  filter: blur(calc(var(--glowy-card-border-size) * 10));
}

[data-glow] > [data-glow]::before {
  inset: -10px;
  border-width: 10px;
}

[data-glow] :is(a, button) {
  border: var(--glowy-card-border-size) solid transparent;
  border-radius: calc(var(--glowy-card-radius) * 1px);
}

[data-glow] :is(a, button) [data-glow] {
  background: none;
}

[data-glow] :is(a, button) [data-glow]::before {
  inset: calc(var(--glowy-card-border-size) * -1);
  border-width: calc(var(--glowy-card-border-size) * 1);
}
</style>
