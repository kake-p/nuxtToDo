<script setup lang="ts">
import TodoInput from '../components/TodoInput.vue';
import TodoListView from '../components/TodoListView.vue';
</script>

<template>
  <div>
    <client-only>
      <TodoInput />
      <TodoListView />
    </client-only>
    
  </div>  
</template>