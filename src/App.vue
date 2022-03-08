<template>
  <input type="text" v-model="author.name" />
  <div>
    <Blog />
  </div>
</template>

<script setup lang="ts">
import { provide, reactive, readonly, InjectionKey } from 'vue';
import Blog from './Blog.vue';

export interface AuthorInterface {
  author: string;
  birthdate: number;
}

const author = reactive({
  name: 'Chateaubriand',
  birthdate: 1768,
});

const authorKey = Symbol() as InjectionKey<{
  data: AuthorInterface;
  updateBirthday: function;
}>;

function updateBirthday() {
  author.birthdate = 2000;
}

provide('author', readonly({ author, updateBirthday }));
</script>

<style scoped lang="scss"></style>
