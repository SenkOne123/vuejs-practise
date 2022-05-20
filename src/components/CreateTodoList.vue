<template>
  <div>
    <div class="CreateTodo__background">
      <div class="CreateTodo__create-container">
        <p @click="$router.go(-1)" class="CreateTodo__arrow-left">
          <span style="font-size: 60px">Back</span>
          &#8678;
        </p>
        <div class="CreateTodo__add-section">
          <label>
            <p class="CreateTodo__input-label">
              TODO name
            </p>
            <input class="CreateTodo__input" type="text" />
          </label>
          <div class="CreateTodo__button-add">
            <p>Add</p>
          </div>
        </div>
      </div>
      <div class="CreateTodo__item-list__container">
        <div class="CreateTodo__list-item">
          <p class="CreateTodo__list__add">
            +
          </p>
          <input class="CreateTodo__list-input" type="text" />
          <p class="CreateTodo__list__add CreateTodo__list__add-text">
            Add
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import CheckBox from '@/components/CheckBox.vue'

@Component({})

export default class CreateTodoList extends Vue {

}
</script>

<style scoped>
  .CreateTodo__background {
    background: rgb(54, 136, 223);
    width: 100vw;
    height: 100vh;
  }
  .CreateTodo__create-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 130px;
    padding: 40px;
  }
  .CreateTodo__input {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 20px;
    border-radius: 10px;
    border: 0;
    width: 300px;
    height: 30px;
    padding: 0 20px;
    margin-top: 10px;
  }
  .CreateTodo__input:focus {
    outline: 2px solid #979595;
  }
  .CreateTodo__input-label {
    font-weight: 500;
    font-size: 26px;
  }
  .CreateTodo__button-add {
    cursor: pointer;
    background: white;
    border-radius: 50px;
    width: 200px;
    padding: 20px 0;
    color: rgb(54, 136, 223);
    font-size: 26px;
    font-weight: 700;
    text-align: center;
    transition: box-shadow 0.3s;
  }
  .CreateTodo__button-add:hover {
    box-shadow: 0 0 15px #ffffff;
  }
  .CreateTodo__arrow-left {
    cursor: pointer;
    font-size: 80px;
  }
  .CreateTodo__arrow-left:hover {
    transform: scale(1.1);
  }
  .CreateTodo__item-list__container {
    width: 50%;
    margin: 0 auto;
    background: #fff;
    border-radius: 10px;
    min-height: 300px;
    padding: 70px 3%;
  }
  .CreateTodo__list-item {
    display: flex;
    gap: 40px;
    margin-top: 60px;
  }
  .CreateTodo__list-item:nth-child(1) {
    margin-top: 0;
  }
  .CreateTodo__list-input {
    outline: none;
    width: 100%;
    height: 65px;
    border: 4px solid rgb(54, 136, 223);
    padding-left: 20px;
    font-size: 30px;
    font-weight: 800;
    color: rgb(54, 136, 223);
  }
  .CreateTodo__add-section {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  .CreateTodo__list__add {
    cursor: pointer;
    font-size: 100px;
    line-height: 60%;
    color: rgb(54, 136, 223);
  }
  .CreateTodo__list__add:hover {
    transform: scale(1.2);
  }
  .CreateTodo__list__add-text {
    font-size: 80px;
  }
</style>
