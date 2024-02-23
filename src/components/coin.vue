<template>
  <div class="coin">
    <slot />
    <IconCoin />
  </div>
</template>

<script setup>
import IconCoin from '@/assets/icons/IconCoin.vue'
</script>

<style scoped>
.coin{
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
}
</style>
