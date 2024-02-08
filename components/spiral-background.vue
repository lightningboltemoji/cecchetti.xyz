<template>
  <div>
    <div class="relative text-black text-xs -z-50">
      <span class="token" v-for="(t, n) in range" :style="{ '--percent': `${n / range.length}` }">
        {{ t }}
      </span>
    </div>
  </div>
</template>

<script setup>
const tokens =
  'const for <div> { let import ; class } final if " switch => else match private '.split(" ");
const range = [...Array(400).keys()].map((i) => tokens[i % tokens.length]);
</script>

<style scoped>
* {
  --radius: 50vmax * 1.5;
  --rotations: -14turn;
  --duration: 3000s;
  --scale-start: 0.5;
  --scale-end: 1.75;
}

@keyframes fade {
  0%,
  0% {
    opacity: 0.2;
  }

  40%,
  90% {
    opacity: 1;
  }

  100% {
    opacity: 0.2;
  }
}

@keyframes spiral {
  0% {
    transform: rotate(0) translateY(0) scale(var(--scale-start));
  }

  100% {
    transform: rotate(var(--rotations)) translateY(calc(var(--radius) * -1)) scale(var(--scale-end));
  }
}

.token {
  position: absolute;
  top: 50%;
  left: 50%;

  animation: spiral cubic-bezier(0, 0.31, 0.39, 0.64) infinite, fade linear infinite;
  animation-duration: var(--duration);
  animation-delay: calc(var(--percent) * -1 * var(--duration));
}
</style>
