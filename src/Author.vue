<template>
  <small> {{ author.name }} - {{ author.birthdate }}</small>
  <p>{{ api }}</p>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { authorKey } from './provideKeys.ts';

const { author, updateBirthday } = inject(authorKey)!;
const api = inject('API_URL');

setTimeout(() => {
  author.updateBirthday();
});
</script>

<style scoped lang="scss"></style>
