<script setup>
import NavBar from "./../components/NavBar.vue";
</script>

<template>
  <div class="container mx-auto">
    <nav-bar></nav-bar>
    <div class="w-full">
      <slot></slot>
    </div>
  </div>
</template>