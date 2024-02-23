<template>
  <div class="test-page">
    <div class="header">
      <div class="header__indication">
        <div class="counter">
          <div class="counter__text">
            <div>
              1 / 8
            </div>
            <IconBattary />
          </div>

          <Coin class="counter__coins">
            20
          </Coin>
        </div>

        <div class="block-wrapper">
          <div v-for="(item, index) in stepper" :key="index" :class="getBlockClass(item.state)" />
        </div>
      </div>

      <div class="header__scale">
        <Coin>160 / 200</Coin>
      </div>

      <div class="header__profile">
        <div class="name">
          Anton
        </div>
        <Coin>1000</Coin>
      </div>
    </div>

    <div class="game">
      <div class="game-header">
        <AppButton :icon="IconCross" />

        <div>
          {{ currentTask.task }}
        </div>

        <AppButton :icon="IconLamp" @click="helperVisible = !helperVisible" />
      </div>

      <div class="game__question">
        {{ currentTask.title }}
      </div>

      <div class="game__content">
        <img :src="currentTask.img" alt="#">
      </div>

      <form class="game__answers" @submit.prevent="responseAnswer">
        <div
          v-for="variable in currentTask.variable"
          :key="variable.id"
        >
          <RadioButton
            :id="variable.id"
            v-model="selectedAnswer"
            :value="variable.answer"
            :label="variable.answer"
            name="answer"
          />
        </div>

        <AppButton
          :medium="true"
          type="submit"
        >
          Check
        </AppButton>
      </form>
    </div>

    <Helper v-model="helperVisible">
      {{ currentTask.helper }}
    </Helper>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Coin from '@/components/coin.vue'
import IconCross from '@/assets/icons/IconCross.vue'
import IconBattary from '@/assets/icons/IconBattary.vue'
import IconLamp from '@/assets/icons/IconLamp.vue'
import Helper from '@/components/helper.vue'
import { AppButton, RadioButton } from '@/components/UI'

import task from '@/assets/tasks.json'

const currentTask = ref(task.items[0])
const helperVisible = ref(false)
const selectedAnswer = ref('')

function responseAnswer() {
  if (!selectedAnswer.value)
    return alert('Пожалуйста выберите вариант ответа')

  if (selectedAnswer.value === currentTask.value.rightAnswer)
    alert('Right answer')
  else alert('Wrong answer')
}

const stepper = [
  { state: 'positive' },
  { state: 'negative' },
  { state: 'unmark' },
  { state: 'unmark' },
  { state: 'unmark' },
  { state: 'unmark' },
  { state: 'unmark' },
  { state: 'unmark' },
]

function getBlockClass(state) {
  return {
    positive: 'block block__positive',
    negative: 'block block__negative',
    unmark: 'block block__unmark',
  }[state]
}
</script>

<style lang="scss" scoped>
.test-page {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 38px;
}

.block-wrapper {
  display: flex;
  flex-direction: row;
  gap: 16px;

  padding-block: 10px;

  .block {
    width: 30px;
    height: 8px;

    border-radius: 8px;

    &__positive {
      background: #61EBC1;
    }

    &__negative {
      background: red;
    }

    &__unmark {
      background: #E8E9F1;
    }
  }
}

.counter {
  display: flex;
  margin-bottom: 8px;

  &__text {
    display: flex;
    flex-direction: row;
    gap: 8px;

    align-items: center;
    margin-right: 205px;
  }
}

.header {
  width: 100%;
  max-width: 1110px;

  height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 20px;

  &__indication {
    flex: 1;
  }

  &__scale {
    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 18px;
    align-items: center;
  }

  &__profile {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: right;

    * {
      margin-left: auto;
    }
  }
}

.game {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  &__question {
    font-size: 28px;
  }

  &__content {
    margin-top: 20px;
    width: 730px;
    height: 450px;

    display: flex;
    align-items: center;
  }
  &__answers{
    display: flex;
    flex-direction: row;
    gap: 20px;

    padding: 20px;
    justify-content: center;
    background-color: #DCDCE1;
  }
}

.game-header {
  width: 100%;
  max-width: 1110px;

  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  justify-content: space-between;

  font-size: 20px;
  font-weight: 500;
}

.button-wrapper {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  margin-top: 80px;

  background: #DCDCE1;
  padding: 20px;
}
</style>
