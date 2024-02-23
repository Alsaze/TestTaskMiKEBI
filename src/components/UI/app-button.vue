<template>
  <button
    class="btn" :class="[{ btn_icon: icon }, { btn_big: big }, { btn_medium: medium }]"
    @click="clickOnButton()"
  >
    <slot v-if="icon" name="icon">
      <Component :is="icon" />
    </slot>

    <slot v-if="!icon" />
  </button>
</template>

<script setup>
defineProps({
  icon: {},
  big: {
    type: Boolean,
    default: false,
  },
  medium: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['click'])

function clickOnButton() {
  emit('click')
}
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: white;
  color: black;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: .2s;

  &_icon {
    padding: 10px;
    background-color: #F4F5FD;
    border-radius: 8px;
    width: 44px;
    height: 44px;
  }

  &_big {
    width: 300px;
    height: 30px;
  }

  &_medium {
    width: 140px;
    height: 42px;
    background-color: #FFE27A;
  }
}
</style>
