<template>
  <div v-if="modelValue" class="helper">
    <AppButton :icon="IconCross" @click="$emit('update:modelValue', false)" />
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { AppButton } from '@/components/UI'
import IconCross from '@/assets/icons/IconCross.vue'

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.helper {
  padding: 30px;
  width: 400px;
  height: 200px;
  border: 5px solid #61EBC1;
  background-color: #fff;
  border-radius: 10px;

  position: fixed;
  display: flex;
  flex-direction: column;
}
</style>
