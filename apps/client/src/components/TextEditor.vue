<script setup>
import {ref} from "vue"

let content = ref("Start writing here!")
</script>

<template>
  <div class="p-4 bg-slate-300 dark:bg-zinc-700 flex w-full h-full">
    <textarea
      v-model="content"
      class="=outline-2 outline-violet-200 dark:outline-violet-600 ring-violet-500 resize-none rounde-sm w-full h-[70vh] p-2"
      >
    </textarea>
  </div>
</template>