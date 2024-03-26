<script setup lang="ts">
  useHead({
    title: "To Do List",
    link: [
      {rel: "preconnect",href: "https://fonts.googleapis.com"},
      {rel: "preconnect", href: "https://fonts.gstatic.com"},
      {href: "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Noto+Serif+JP&display=swap", rel: "stylesheet"}
    ],
  });
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
html{
  font-family: EB Garamond, Noto Serif JP,serif;
  }
  body{
    margin: 0;    
    background: rgba(0,0,0,.1);
  }
</style>