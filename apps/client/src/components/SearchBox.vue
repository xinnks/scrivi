<script setup>
import {ref} from "vue";

let searchQuery = ref("")
let searchResults = ref([
  {
    title: "Search result 1",
    link: "#result-1"
  },
  {
    title: "Search result 2",
    link: "#result-2"
  }
])
</script>

<template>
  <input
    type="text"
    v-model="searchQuery"
    class="p-2 outline-2 outline-emerald-300 w-full"
    >
    
  <div
    v-if="searchResults"
  >
    <ul
      v-for="(result,key) of searchResults"
      :key="key"
    >
      <li>
        <a
          :href="result.link"
          target="_blank"
          >
          {{result.title}}
        </a>
      </li>
    </ul>
  </div>
</template>