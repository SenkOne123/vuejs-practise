<template>
  <div>
    <div class="home__background">
      <div class="main__buttons-section">
        <router-link class="router-remover" v-bind:to="routeToCreate">
          <div class="main__create-button">
            <p>Create a new TODO</p>
          </div>
        </router-link>
      </div>
      <div class="TodoLists__container">
        <TodoListItem v-for="todoList of TodoItemList" :key="todoList.id" :item="todoList"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TodoList from '@/models/TodoList'
import TodoListItem from '@/components/TodoListItem.vue'
import CheckBox from '@/components/CheckBox.vue'
import { PAGES } from '@/utils/guard'

@Component({
  components: {
    CheckBox,
    TodoListItem
  }
})
export default class MainLayout extends Vue {
  // Вопрос по хранению данных в local storage
  routeToCreate = PAGES.CREATE_TODO
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
    console.log('AAAAAA')
  }

  debug = false
}
</script>

<style scoped>
  .home__background {
    background: darkorange;
    width: 100vw;
    height: 100vh;
  }
  .TodoLists__container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    padding: 0 5%;
    gap: 3%;
  }
  .main__create-button {
    display: inline-block;
    cursor: pointer;
    width: auto;
    padding: 25px;
    font-size: 26px;
    font-weight: 600;
    background: darkorange;
    transition: text-shadow 0.5s;
  }
  .main__create-button:hover {
    text-shadow: 0 0 5px #fff;
    transform: scale(1.1);
  }
  .main__buttons-section {
    display: flex;
    justify-content: center;
  }
</style>
