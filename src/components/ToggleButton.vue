<template>
  <div toggle>
    <template v-for="option of options" :key="option.value">
      <button
        type="button"
        :class="{ selected: modelValue === option.value }"
        @click="$emit('update:model-value', option.value)"
      >
        {{ option.label }}
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { KeyValue } from '@/types/toggle'
import type { PropType } from 'vue'

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  options: {
    type: Array as PropType<KeyValue<string>[]>,
    required: true
  }
})
defineEmits<{
  (e: 'update:model-value', value: string): void
}>()

defineOptions({
  name: 'ToggleButton'
})
</script>

<style scoped>
button {
  background-color: rgb(255, 255, 255);
  color: rgb(18, 18, 18);
  padding: 0.75rem;
  border-radius: 0.125rem;
  min-width: 3.5rem;
  border: 1px solid rgb(229 231 235);
  cursor: pointer;
  font-size: 1rem;
  outline-color: rgba(18, 18, 18, 0.9);
}
.selected {
  background-color: rgb(229 231 235);
}
</style>
