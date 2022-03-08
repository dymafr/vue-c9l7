import type { InjectionKey } from 'vue';
import type { AuthorInterface } from './App.vue';

export const authorKey = Symbol() as InjectionKey<{
  data: AuthorInterface;
  updateBirthday: () => void;
}>;
