<template>
  <div>
    <button @click='handleCreateTaskButtonClick()' class="create-task">Create task</button>
    <div v-if='isCreateFieldNeeded' class="create-field-container">
      <CreateTaskField />
    </div>
    <TodoItem />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TodoItem from './TodoItem.vue'
import CreateTaskField from './CreateTaskField.vue'

@Component({
  components: {
    TodoItem,
    CreateTaskField
  }
})
export default class MainLayout extends Vue {
  isCreateFieldNeeded = false;
  handleCreateTaskButtonClick () : void {
    this.isCreateFieldNeeded = !this.isCreateFieldNeeded
  }
}
</script>

<style scoped>
  .create-task {
    font-family: "Montserrat", sans-serif;
    border: 0;
    width: 100px;
    height: 30px;
    color: #ffffff;
    background: #000;
  }
  .create-field-container {
    margin: 30px 0;
  }
</style>
