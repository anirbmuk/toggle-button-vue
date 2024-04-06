<template>
  <header>Toggle Button Demo</header>
  <main>
    <ToggleButton :options="options" v-model="selected" />
    <div>
      Selected: <strong>{{ selected }}</strong>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { KeyValue } from '@/types/toggle'
import ToggleButton from './components/ToggleButton.vue'

const options = [
  {
    label: 'Male',
    value: 'M'
  },
  {
    label: 'Female',
    value: 'F'
  },
  {
    label: 'Diverse',
    value: 'D'
  }
] satisfies KeyValue<string>[]

const selected = ref<string>('F')
</script>

<style scoped></style>
