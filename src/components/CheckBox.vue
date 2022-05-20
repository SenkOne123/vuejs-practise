<template>
  <div>
    <div class="checkbox-form">
      <div class="answers">
        <label
          class="item"
        >
          <input
            v-model="checked"
            type="checkbox"
            @change="onChange"
            :disabled="disabled"
          >
          <span class="checkmark" />
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
@Component({})
export default class CheckBox extends Vue {
  @Prop(Boolean) disabled!: boolean

  checked = false

  onChange () {
    console.log(this.checked)
    this.$emit('input', this.checked)
  }
}
</script>

<style scoped>
  .checkbox-form {
    display: flex;
    flex-direction: column;
  }

  .checkbox-form .answers {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .checkbox-form .item {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 1em;
    height: 25px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: flex;
    align-items: center;
  }

  .checkbox-form .item input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkbox-form .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #fff;
  }

  .checkbox-form .item:hover input ~ .checkmark {
    background-color: #fff;
  }

  .checkbox-form .item input:checked ~ .checkmark {
    background-color: #fff;
  }

  .checkbox-form .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .checkbox-form .item input:checked ~ .checkmark:after {
    display: block;
  }

  .checkbox-form .item .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid rgb(54, 136, 223);
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>
