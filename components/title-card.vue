<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <div class="inline-block w-screen h-screen overflow-hidden">
    <div class="flex flex-col align-center items-center justify-center w-full h-full">
      <div class="flex flex-col lg:flex-row items-center">
        <div class="relative">
          <video
            class="size-[200px] bg-black rounded-full lg:size-[240px] lg:p-[20px] lg:rounded-none lg:rounded-l-full"
            autoPlay
            loop
            muted
            playsInline
            src="/memoji.mp4?url"
          />
          <spiral-background class="max-w-0 max-h-0 absolute inset-1/2" />
        </div>
        <div
          class="flex flex-col items-center justify-center text-center text-white bg-black mt-6 lg:mt-0 px-12 py-5 lg:p-0 lg:pr-[80px] lg:h-[240px] rounded-full lg:rounded-l-none"
        >
          <h1 class="font-bold text-3xl lg:text-5xl">Tanner Cecchetti</h1>
          <h2 class="text-l lg:text-2xl mt-2">Software engineer 👨‍💻</h2>
          <h2 class="text-l lg:text-2xl">Seattle, WA 🌲</h2>
        </div>
      </div>
      <div class="mt-4">
        <a target="_" href="https://www.linkedin.com/in/tanner-cecchetti/">
          <FontAwesomeIcon class="inline size-10 lg:size-16" :icon="faLinkedin" />
        </a>
        <a target="_" href="https://github.com/lightningboltemoji">
          <FontAwesomeIcon class="inline size-10 lg:size-16 ml-1" :icon="faGithubSquare" />
        </a>
        <a target="_" href="mailto:tanner@cecchetti.xyz">
          <FontAwesomeIcon class="inline size-10 lg:size-16 ml-1" :icon="faSquareEnvelope" />
        </a>
      </div>
    </div>
  </div>
</template>
