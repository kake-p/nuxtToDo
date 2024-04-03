<template>
  <div>
    <!-- エラーメッセージ -->
    <p v-if="isErrMsg">{{ errMsg }}</p>

    <!-- モーダル -->
    <div v-if="isShowModal" class="modal">
      <div class="modal-content">
        <p>「{{ deleteItemContent }}」を削除してもよろしいですか？</p>
        <button @click="onDeleteItem()">はい</button>
        <button @click="onHideModal()">キャンセル</button>
      </div>
    </div>

    <!-- ソート -->
    <div class="sorting">
      sort:
        <button @click="sortById()">ID</button>
        |
        <button @click="sortByLimit()">期限</button>
    </div>

    <table>
      <!-- 表頭 -->
      <tr>
        <th class="th-id">ID</th>
        <th class="th-value">やること</th>
        <th class="th-limit">期限</th>
        <th class="th-state">状態</th>
        <th class="th-edit">編集</th>
        <th class="th-delete">削除</th>
      </tr>

      <!-- 表 -->
      <tr v-for="item in items" :key="item.id" :class="{red: new Date(item.limit) < today}">
        <td>{{ item.id }}</td>
        <td>
          <span v-if="!item.onEdit">{{ item.content }}</span><!--onEditがtrueの時内容を表示-->
          <input v-else v-model="inputContent" type="text"/><!--onEditがfalseの時空欄を表示-->
        </td>
        <td>
          <span v-if="!item.onEdit">{{ item.limit }}</span>
          <input v-else v-model="inputLimit" t type="date"/>
        </td>
        <td>
          <span v-if="!item.onEdit">{{ item.state.value }}</span>
          <select v-else v-model="inputState">
            <option v-for = "state in statuses"
              :key="state.id"
              :value="state"
              :selected="state.id == item.state.id">
              {{ state.value }}
            </option>
          </select>
        </td>
        <td>
          <button v-if="!item.onEdit" @click="onEdit(item.id)">編集</button>
          <button v-else @click="onUpdate(item.id)">完了</button>
        </td>
        <td><button @click="showDeleteModal(item.id)">削除</button></td>
      </tr>
    </table>

  </div>
</template>


<script setup>
  import { ref } from "vue";
  import { statuses } from "~/public/statuses";
  
  let items = ref(JSON.parse(localStorage.getItem("items")) || []);
  let inputContent = ref();//タスク内容
  let inputLimit = ref();//タスク期限
  let inputState = ref();//タスクステータス
  let isShowModal = ref(false);
  let deleteItemId = "";
  let deleteItemContent = ref();

  const today = new Date();
  const isErrMsg = ref(false);
  let errMsg = ref();

  //編集モード
  function onEdit(id){
    let isOnEditOther = false;
    
    items.value.map((item) => {
      if(item.onEdit){
        isOnEditOther = true;
        return;
      }
    });

    if (isOnEditOther) {
      errMsg.value = "他に編集中のタスクがあります";
      isErrMsg.value = true;
      return;
    }

    inputContent.value = items.value[id].content;
    inputLimit.value = items.value[id].limit;
    inputState.value = items.value[id].state;
    items.value[id].onEdit = true;
  }

  //上書き保存
  function onUpdate(id){
    if(inputContent.value == "" || inputLimit.value == ""){
      errMsg.value = "タスクの内容と期限を入力してください。";
      isErrMsg.value = true;
      return;
    }

    const newItem = {
      id: id,
      content: inputContent.value,
      limit: inputLimit.value,
      state: inputState.value,
      onEdit: false,
    };

    if (typeof localStorage !== "undefined") {
      console.log(localStorage.getItem('items'))
    }
    items.value.splice(id, 1, newItem);
    localStorage.setItem("items", JSON.stringify(items.value));
    isErrMsg.value = false;
  }

  //確認モーダルを出す
  function showDeleteModal(id) {
    isShowModal.value = true;
    deleteItemId = id;
    deleteItemContent.value = items.value[id].content;
  }

  //モーダル「はい」
  function onDeleteItem() {
    items.value.splice(deleteItemId, 1);
    items.value = items.value.map((item, index) => ({
      id: index,
      content: item.content,
      limit: item.limit,
      state: item.state,
      onEdit: item.onEdit,
    }));

    if (typeof localStorage !== "undefined") {
      console.log(localStorage.getItem('items'))
    }
    localStorage.setItem("items", JSON.stringify(items.value));
    isShowModal.value = false;
  }

  //モーダル「キャンセル」
  function onHideModal() {
    isShowModal.value = false;
  }

  //IDソート
  function sortById(){
    items.value.sort((a, b) => a.id - b.id);
    if (typeof localStorage !== "undefined") {
      console.log(localStorage.getItem('items'))
    }
    localStorage.setItem("items", JSON.stringify(items.value));
  }

  //期限ソート
  function sortByLimit(){
    items.value.sort((a, b) => new Date(a.limit) - new Date(b.limit));
    if (typeof localStorage !== "undefined") {
      console.log(localStorage.getItem('items'))
    }
    localStorage.setItem("items", JSON.stringify(items.value));
  }
</script>


<style scoped>
  .modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content{
    background: white;
    padding: 20px;
    border-radius: 8px;
  }

  .red{
    color: red;
  }

  .sorting{
    background: white;
    box-shadow: 0 0 4px #000;
    border-radius: 16px;
    width: fit-content;
    padding: 0 8px 3px 8px;
  }

  .sorting button{
    padding: 0;
    all: unset;
    cursor: pointer;
  }

  .sorting button:hover{
    box-shadow: 0 0 4px 0 #000;
    background-color: #eee;

  }

  div{
    border-radius: 4px;
    margin-top: 8px;
    padding: 2px;
  }
  table{    
    margin: 0 auto;
  }
  th{
    margin: 2px 8px;
  }
  td{
    padding: 2px 8px;
  }
</style>