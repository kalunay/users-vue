<template>
  <div id="app">
    <nav class="uk-navbar-container uk-margin" uk-navbar>
        <div class="uk-navbar-center">

          <router-link to="/" class="uk-navbar-item uk-logo">User List</router-link>
          <router-link to="/add" class="uk-navbar-item uk-logo">Add user</router-link>

        </div>
    </nav>    
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    //UsersList: () => import('@/components/UsersList.vue'),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
