<template>
  <div id="app">
    <div class="wrapper">
      <add-to-do @add-new-todo="addTodo"></add-to-do>
      <todos :todos="todos" v-on:delete-todo="deleteTodo" />
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
      todos: [
        {
          id: uniqueId(),
          todo: "Do Laundry",
          isCompleted: true,
        },
        {
          id: uniqueId(),
          todo: "Go Shopping",
          isCompleted: false,
        },
        {
          id: uniqueId(),
          todo: "Bath Ruzo",
          isCompleted: false,
        },
      ],
    };
  },
  methods: {
    addTodo: function (newTodo) {
      this.todos.push({
        id: uniqueId(),
        todo: newTodo,
        isCompleted: false,
      });
    },
    markComplete: function (id) {
      console.log(id);
    },
    deleteTodo: function (id) {
      this.todos = this.todos.filter((todo) => todo.id != id);
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
</style>
