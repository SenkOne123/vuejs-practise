<template>
  <div>
    <div class="TodoListItem__container">
      <p class="TodoListItem__name">
        {{ item.name }}
      </p>
      <div v-for="todoItem of item.todoItem" :key="todoItem.id" class="TodoListItem__todo-container">
        <CheckBox class="TodoListItem__checkbox" />
        <p class="TodoListItem__todo-description">
          {{ todoItem.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>

import { Vue, Prop, Component } from 'vue-property-decorator'
import CheckBox from '@/components/CheckBox.vue'
import TodoList from '@/models/TodoList'
@Component({
  components: {
    CheckBox
  }
})
export default class TodoListItem extends Vue {
  @Prop(Array) readonly item!: TodoList
}
</script>

<style scoped>
  .TodoListItem__container {
    padding: 40px;
    background: rgb(54, 136, 223);
    margin-top: 20px;
    min-width: calc(25% - 120px);
  }
  .TodoListItem__name {
    font-weight: 500;
    font-size: 30px;
    color: #000;
    color: #fff;
  }
  .TodoListItem__todo-container {
    display: flex;
    align-items: flex-end;
    gap: 40px;
    margin-top: 20px;
  }
  .TodoListItem__checkbox {
    margin-top: 15px;
  }
  .TodoListItem__todo-description {
    font-weight: 400;
    font-size: 25px;
  }
</style>
