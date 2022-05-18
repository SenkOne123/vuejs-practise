<template>
  <div>
    <div class="main__buttons-section">
      <div class="main__buttons">
        <p>Create a new TODO</p>
      </div>
    </div>
    <div class="TodoLists__container">
      <TodoListItem v-for="todoList of TodoItemList" :key="todoList.id" :item="todoList"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TodoList from '@/models/TodoList'
import TodoListItem from '@/components/TodoListItem.vue'
import CheckBox from '@/components/CheckBox.vue'

@Component({
  components: {
    CheckBox,
    TodoListItem
  }
})
export default class MainLayout extends Vue {
  // Вопрос по хранению данных в local storage
  TodoItemList: TodoList[] = [
    {
      id: 1,
      name: 'Thursday 19/05/22',
      todoItem: [
        {
          id: 1,
          content: 'Work!',
          checked: false
        },
        {
          id: 2,
          content: 'Sleep!',
          checked: false
        }
      ]
    },
    {
      id: 2,
      name: 'Friday 20/05/22',
      todoItem: [
        {
          id: 3,
          content: 'Work!',
          checked: false
        },
        {
          id: 4,
          content: 'Sleep!',
          checked: false
        }
      ]
    }
  ]

  mounted () {
    localStorage.TodoList = JSON.stringify(this.TodoItemList)
  }

  debug = false
}
</script>

<style scoped>
  .TodoLists__container {
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
    margin-top: 30px;
  }

  .main__buttons {
    cursor: pointer;
    width: 100%;
    padding: 25px;
    font-size: 26px;
    font-weight: 600;
    background: darkorange;
  }
</style>
