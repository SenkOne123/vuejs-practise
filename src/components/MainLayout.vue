<template>
  <div>
    <TodoListItem text="Almost before we knew it,"/>
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
  TodoItemList: TodoList[] = [];
  debug = false;
}
</script>

<style scoped>
</style>
