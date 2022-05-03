<template>
  <div>
    <div class="todo-item-container">
      <p class="todo-item-name-text">{{todoData.name}}</p>
      <div v-for='row of todoData.todoList' :key='row.id' class="todo-item__todo-row">
        <input class="todo-item-checkbox" type="checkbox" />
        <p class="todo-item__todo-text">{{row.content}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import TodoProps from '@/models/TodoProps'

@Component
export default class TodoItem extends Vue {
  @Prop() private todoData!: TodoProps;
}
</script>

<style scoped>
.todo-item-container {
  padding: 20px 40px;
  border: 5px solid #4169E1;
}
.todo-item-container:hover {
  border: 5px solid #87CEFA;
}
.todo-item-checkbox {
  width: 24px;
  height: 24px;
  margin-right: 30px;
}
.todo-item-name-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  color: #4169E1;
  margin: 0;
}
.todo-item__todo-row {
  display: flex;
  align-items: center;
}
.todo-item__todo-text {
  font-size: 20px;
  line-height: 100%;
  color: #4169E1;
  margin-top: 20px;
}
</style>
