<script setup>
import {ref} from "vue";

const coWriters = ref([
  {
    name: "Anael",
    email: "anael@gmail.com",
    avatar: "#img-link",
    role: "read"
  },
  {
    name: "Franklin",
    email: "franklin@gmail.com",
    avatar: "write"
  }
])

const firstLetter = (text) => text[0].toUpperCase()
</script>

<template>
  <div class="p-4 bg-slate-300 dark:bg-zinc-700 flex w-full h-full">
    <ul class="p-2 flex flex-col space-y-2 w-full">
      <li
        v-for="(person, key) of coWriters"
        :key="key"
        class="p-2 ring-1 ring-orange-200 rounded-md bg-slate-100 text-black dark:bg-slate-700 dark:text-white"
        >
        <div
          class="p-1 flex items-center space-x-2"
          >
          <span class="flex items-center justify-center font-bold uppercase p-2 w-8 h-8 rounded-full ring-2 ring-orange-500 bg-orange-400">{{firstLetter(person.name)}}</span>
          <span>
            <a :href="`#${person.email}`">{{person.name}}</a>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>