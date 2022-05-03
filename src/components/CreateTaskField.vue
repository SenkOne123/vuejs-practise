<template>
  <div class="create-task-container">
    <div class="create-task-row">
      <p class="create-task__text">Task name</p>
      <input />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TodoItem from './TodoItem.vue'

@Component({
  components: {
    TodoItem
  }
})
export default class MainLayout extends Vue {
}
</script>

<style scoped>
  p {
    margin: 0;
  }
  .create-task-container {
    padding: 20px;
    border: 1px solid #000;
  }
  .create-task-row {
    display: flex;
    gap: 20px;
  }
  .create-task-row--gap {
    margin-top: 20px;
  }
  .create-task__text {
    font-family: 'Montserrat', sans-serif;
  }
</style>
