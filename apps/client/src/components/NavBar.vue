<script setup>
</script>

<template>
  <nav class="m-0 py-2 w-full">
    <ul class="flex space-x-2">
      <router-link
        tag="li"
        to="/write"
        class="p-4"
        >Write</router-link>
      <router-link
        tag="li"
        to="/drafts"
        class="p-4"
        >Drafts</router-link>
      <router-link
        tag="li"
        to="/collaborations"
        class="p-4"
        >collaborations</router-link>
      <router-link
        tag="li"
        to="/settings"
        class="p-4"
        >Settings</router-link>
    </ul>
  </nav>
</template>