<script setup>
const error = useError();
</script>

<template> 
  <div class="container">
    <div>
      <h1 v-if = "error.statusCode === 404">404エラー！</h1>
      <h1 v-else>エラー</h1>
      <p>{{ error.message }}</p>
    </div>
    <div class="img">
      <img src="~/assets/errimg.jpg">
    </div>    
    <div class="bottom">
      <NuxtLink to="/" class="back">Go Back</NuxtLink>
    </div>
      
  </div>
</template>

<style scoped>
  .container{
    height: 100vh;
    background: #faf1e0;;
    position: relative;
  }

  h1{
    text-align: center;
    margin: 0;
  }
  
  .img{
    text-align: center;
  }
  
  .back{
    font-size: 20px;
    border-radius: 24px;
    border: 2px solid rgb(218, 218, 218);
    background: rgb(56, 56, 56);
    color: rgb(218, 218, 218);
    box-shadow: 0 10px 10px 0 rgba(50, 50, 50, 0.5);
    padding: 10px 20px;
    text-decoration: none;
    cursor: pointer;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50% , 0);
     }
</style>