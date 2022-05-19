<template>
  <div>
    <div class="CreateTodo__container">
      <input class="CreateTodo__input" type="text" />
      <div class="CreateTodo__todo-container">
        <CheckBox />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import CheckBox from '@/components/CheckBox.vue'

@Component({
  components: { CheckBox }
})

export default class CreateTodoList extends Vue {

}
</script>

<style scoped>
  .CreateTodo__container {
    padding: 40px;
    background: rgb(54, 136, 223);
  }
  .CreateTodo__todo-container {
    display: flex;
    align-items: flex-end;
    gap: 40px;
    margin-top: 35px;
  }
  .CreateTodo__input {
    border-radius: 10px;
    border: 0;
    width: 300px;
    height: 30px;
  }
</style>
