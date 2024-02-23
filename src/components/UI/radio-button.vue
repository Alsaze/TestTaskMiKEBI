<template>
  <input
    :id="id"
    type="radio"
    :name="name"
    :value="value"
    :checked="modelValue === value"
    :disabled="disabled"
    class="radiobutton"
    @input="handleClick($event)"
  >
  <label :for="id">{{ label }}</label>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  group: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['update:modelValue'])

function handleClick(event) {
  emits('update:modelValue', event.target.value)
}
</script>

<style lang="scss" scoped>
.radiobutton {
  position: absolute;
  z-index: -1;
  opacity: 0;

  & + label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 6px 16px;

    background-color: #F4F5FD;

    width: 300px;
    height: 30px;
  }
  &:checked + label{
    background-color: #FFE27A;
  }
}
</style>
