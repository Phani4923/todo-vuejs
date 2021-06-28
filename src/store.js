import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default new Vuex.Store({
  state: {
    todos: [
      {
        title: 'Vue.js',
        completed: false
      },
      {
        title: 'Vuex',
        completed: false
      }
    ]
  },
  mutations: {
    NEW_TODO (state, todoItem) {
      state.todos.push({
        title: todoItem,
        completed: false
      })
    },
    DELETE_TODO (state, todoItem) {
      var index = state.todos.findIndex(c => c.todos === todoItem.todos)
      state.todos.splice(index, 1)
    },
    TOGGLE_TODO_STATUS (state, todoItem) {
      todoItem.completed = !todoItem.completed
    }
  },
  actions: {
    addNewTodo ({ commit }, todoItem) {
      commit('NEW_TODO', todoItem)
    },
    deleteTodo ({ commit }, todoItem) {
      commit('DELETE_TODO', todoItem)
    },
    toggleTodoStatus ({ commit }, todoItem) {
      commit('TOGGLE_TODO_STATUS', todoItem)
    }
  },
  getters: {
    completedTodos (state) {
      return state.todos.filter(todo => {
        return todo.completed === true
      }).length
    },
    pendingTodos (state) {
      return state.todos.filter(todo => {
        return todo.completed === false
      }).length
    }
  },
  plugins: [vuexLocal.plugin]
})
