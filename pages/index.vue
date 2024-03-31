<script setup lang="ts">
import TodoInput from '../components/TodoInput.vue';
import TodoListView from '../components/TodoListView.vue';
</script>

<template>
  <h1>To Do Task Manager</h1>
  <section>
    <div>
    <client-only>
      <TodoInput />
      <TodoListView />
    </client-only> 
  </div> 
  </section>   
</template>

<style scoped>
  h1{
    margin: 0;
    text-align: center;
    font-size: 48px;
    background: rgba(00, 99, 82, .5); 
    color: white; 
    border-top:   2px solid black;
    border-bottom: 2px solid black;
    line-height: 96px;
  }

  section{
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  div{
    font-size: 16px;
    text-align: center;
  }
</style>