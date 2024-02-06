<template>
    <div class="spiral">
        <span class="char" v-for="(ch, n) in range" :style="{ '--char-percent': `${n / range.length}` }">
            {{ ch }}
        </span>
    </div>
</template>

<script setup>
const chars = [
    "for",
    "<div>",
    "{",
    "import",
    ";",
    "class",
    "}",
    "if",
    '"',
    "switch",
    "=>",
    "else",
    "match"
];
const range = [...Array(chars.length * 24).keys()].map(i => chars[i % chars.length]);
</script>

<style scoped>
@keyframes fade {

    0%,
    5% {
        opacity: 0;
    }

    50% {
        opacity: 0.3;
    }

    100% {
        opacity: 1;
    }
}

@keyframes spiral {
    0% {
        transform: scale(0.1) rotate(0turn) translateY(0em);
    }

    100% {
        transform: scale(1) rotate(calc(var(--spirals) * -1turn)) translateY(calc(-0.05em * var(--char-total) * (var(--size))));
    }
}

.spiral {
    --spirals: 16;
    --size: 3.2;
    --duration: 2000s;
    --char-total: v-bind('range.length');

    position: relative;
    color: black;
    font-size: calc(400vmax / var(--char-total));
    width: 65%;
    height: 0px;
}

.char {
    position: absolute;
    top: 50%;
    left: 50%;

    animation: spiral cubic-bezier(0, 0.57, 0.71, 0.88) infinite,
        fade cubic-bezier(0, 0.57, 0.71, 0.88) infinite both;
    animation-duration: var(--duration);
    animation-delay: calc((-1 * var(--duration)) + var(--duration) * (var(--char-percent)));
}
</style>
