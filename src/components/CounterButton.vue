<script setup lang="ts">
import { useStore } from '@/stores';
const store = useStore();
const countUp = () => store.commit('increment');
</script>

<template>
  <div class="card">
    <button type="button" @click="countUp">
      count is {{ store.state.count.count }}
    </button>
  </div>
</template>
