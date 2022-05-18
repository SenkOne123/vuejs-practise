<template>
  <div>
    <MainLayout/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MainLayout from './components/MainLayout.vue'
import '@/assets/style/reset.css'

@Component({
  components: {
    MainLayout
  }
})
export default class App extends Vue {}
</script>

<style>
</style>
