<template>
  <div>
    <todo v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Todo from './Todo'
export default {
  components: {
    Todo
  },
  computed: {
    ...mapState({
      todos: 'todos'
    })
  },
  methods: {
    beforeMount () {
      this.$store.commit('getUnits')
    }
  }
}
</script>

<style>
</style>
