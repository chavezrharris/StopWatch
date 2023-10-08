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

.title {
  @apply text-2xl font-bold text-center text-gray-300;
}

.timer-text {
  @apply text-7xl font-bold text-center text-gray-100 mt-8;
}

.flex-container {
  @apply flex items-center justify-center;
}

.colon {
  @apply pb-4 text-gray-300;
}

.timer-controls {
  @apply flex justify-center mt-8;
}

.control-button {
  @apply px-6 py-4 m-2 text-white bg-slate-800 rounded-md shadow;
}

@media (min-width: 640px) {
  .title {
    @apply text-3xl;
  }

  .timer-text {
    @apply text-9xl;
  }

  .colon {
    @apply pb-8;
  }

  .control-button {
    @apply px-8 py-6;
  }
}

</style>
