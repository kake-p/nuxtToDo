<template>
  <div>
    <p v-if="isErrMsg">タスク・期限を両方入力してください。</p>
    <form @submit="onSubmitForm">
      <label>やること<input type="text" v-model="input"/></label>
      <label>期限<input type="date" v-model="inputDate"/></label>
      <input type="submit" value="登録！"/>
    </form>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  // import { statuses } from "~/public/statuses";
  // import { onMounted } from "vue";

  // onMounted(() => {
  const input = ref("");
  const inputDate = ref("");
  const isErrMsg = ref(false);

  //「登録！」時の操作
  function onSubmitForm(){
    if(input.value == "" || inputDate.value == ""){
      isErrMsg.value=true;
      event.preventDefault();
      return;
    }
    
    //ローカルストレージからデータを取得
    const items = JSON.parse(localStorage.getItem("items")) || [];
    //保存するオブジェクトを作成
    const newItem = {
      id: items.length,
      content: input.value,
      limit: inputDate.value,
      // state: statuses.NOT_START,
      onEdit: false,
    };

    //取得したデータに新しいデータをpush
    items.push(newItem);
    //配列をローカルストレージに保存
    if (typeof localStorage !== "undefined") {
      console.log(localStorage.getItem('items'))
    }
    localStorage.setItem("items", JSON.stringify(items));
  }
// })
</script>

<style scoped>
  div{
    border: 1px solid black;
    border-radius: 4px;
    padding: 2px;
  }
  label{
    margin: 0 2px;
  }
</style>