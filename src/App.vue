<template>
  <div class="app-content">
    <header>
      <div>
        <h1 class="title">Stop Watch</h1>
      </div>
    </header>

    <main class="container">
      <div class="timer-text">
        <div class="flex-container">
          <span class="hour">00</span>
          <div class="colon">:</div>
          <span class="minute">00</span>
          <div class="colon">:</div>
          <span class="second">00</span>
        </div>
      </div>

      <div class="timer-controls">
        <button class="control-button">
          <PlayIcon class="icon" />
        </button>
        <button class="control-button">
          <PauseIcon class="icon" />
        </button>
        <button class="control-button">
          <RotateIcon class="icon" />
        </button>
      </div>
    </main>
  </div>

</template>

<script setup lang="ts">
import PlayIcon from '@/components/PlayIcon.vue';
import PauseIcon from '@/components/PauseIcon.vue';
import RotateIcon from '@/components/RotateIcon.vue';

</script>

<style scoped>

.app-content {}

.title {
  @apply text-4xl font-bold text-center text-gray-400;
}

.timer-text {
  @apply text-9xl font-bold text-center;
}

.flex-container {
  @apply flex items-center justify-center;
}

.colon {
  @apply pb-8 text-gray-500 h-max;
}

.timer-controls {
  @apply flex justify-center;
}

.control-button {
  @apply px-6 py-4 m-2 text-white bg-blue-500 rounded-md;
}


</style>
