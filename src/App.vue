<template>
  <div id="app">
    <div class="wrapper">
      <add-to-do @add-new-todo="addTodo"></add-to-do>
      <div v-if="todoCount">
        <todos :todos="todos" v-on:delete-todo="deleteTodo" />
      </div>
      <div v-else class="empty-state">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#d4d4d4"
            style="width: 96px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h1 style="color: #616161; font-weight: 500">
            No Todos Available Yet
          </h1>
          <span style="color: #7a7a7a">Todos you input will show up here.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import AddToDo from "./components/AddToDo.vue";
import uniqueId from "lodash.uniqueid";

export default {
  name: "App",
  components: {
    Todos,
    AddToDo,
  },
  data() {
    return {
      todos: [],
      showTodo: false,
    };
  },
  methods: {
    addTodo: function(newTodo) {
      this.todos.push({
        id: uniqueId(),
        todo: newTodo,
        isCompleted: false,
      });
    },
    deleteTodo: function(id) {
      this.todos = this.todos.filter((todo) => todo.id != id);
    },
  },
  computed: {
    todoCount: function() {
      return this.todos.length;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.wrapper {
  width: 500px;
  margin: 0 auto;
  padding-top: 96px;
}
.empty-state {
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 100px;
}
</style>
