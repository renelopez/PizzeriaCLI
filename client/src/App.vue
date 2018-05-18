<template>
  <div id="app">
    <pizzeria-header></pizzeria-header>
    <router-view/>
    <pizzeria-footer></pizzeria-footer>
  </div>
</template>

<script>
import Header from './components/common/Header'
import Footer from './components/common/Footer'
export default {
  name: 'App',
  components: {
    'pizzeria-header': Header,
    'pizzeria-footer': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
