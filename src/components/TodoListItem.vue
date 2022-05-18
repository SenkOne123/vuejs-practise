<template>
  <div>
    <div class="TodoListItem__container">
      <p class="TodoListItem__name">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script lang='ts'>

import { Vue, Prop, Component } from 'vue-property-decorator'
@Component({
})
export default class TodoListItem extends Vue {
  @Prop(String) readonly text!: string
}
</script>

<style scoped>
  .TodoListItem__container {
    padding: 40px;
    width: 22%;
    background: rgb(54, 136, 223);
  }
  .TodoListItem__name {
    font-weight: 500;
    font-size: 50px;
    color: #000;
    font-family: Montserratt, sans-serif;
    color: #fff;
  }
</style>
