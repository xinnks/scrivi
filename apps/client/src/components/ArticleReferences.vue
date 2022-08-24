<script setup>
import {ref} from "vue";

const references = ref([
  {
    title: "Ref 1",
    link: "#ref-1"
  },
  {
    title: "Ref 2",
    link: "ref-2"
  }
])
</script>

<template>
  <div class="p-4 bg-slate-300 dark:bg-zinc-700 flex w-full h-full">
    <ul class="p-4 w-full flex flex-col space-y-2">
      <li
        v-for="(ref, key) of references"
        :key="key"
        class="p-2 ring-1 ring-emerald-300 rounded-md"
        >
        <a :href="ref.link">
          {{ ref.title }}
        </a>
      </li>
    </ul>
  </div>
</template>