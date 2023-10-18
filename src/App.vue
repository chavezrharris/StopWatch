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
          <span class="hour">{{ state.time.hour >= 10 ? state.time.hour : '0' + state.time.hour }}</span>
          <div class="colon">:</div>
          <span class="minute">{{ state.time.minute >= 10 ? state.time.minute : '0' + state.time.minute }}</span>
          <div class="colon">:</div>
          <span class="second">{{ state.time.second >= 10 ? state.time.second : '0' + state.time.second }}</span>
        </div>
      </div>

      <div class="timer-controls">
        <button @click="startTimer()" class="control-button">
          <PlayIcon class="icon" />
        </button>
        <button @click="pauseTimer"  class="control-button">
          <PauseIcon class="icon" />
        </button>
        <button @click="resetTimer" class="control-button">
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

import { reactive } from 'vue';

const state = reactive({
  time: {
    hour: 0,
    minute: 0,
    second: 0,
  },
  interval: 0 as number,
});

const startTimer = () => {
  state.interval = setInterval(() => {
    state.time.second++;
    if (state.time.second === 60) {
      state.time.second = 0;
      state.time.minute++;
    }
    if (state.time.minute === 60) {
      state.time.minute = 0;
      state.time.hour++;
    }
    if (state.time.hour === 24) {
      state.time.hour = 0;
    }
  }, 1000);
};

const pauseTimer = () => {
  clearInterval(state.interval);
};

const resetTimer = () => {
  state.time = {
    hour: 0,
    minute: 0,
    second: 0,
  };
};

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
