<template>
  <div id="app">
    <div class="wrapper">
      <add-to-do @add-new-todo="addTodo"></add-to-do>
      <div v-for="todo in todos" :key="todo.id">
        <todo-item
          :id="todo.id"
          :todo="todo.todo"
          :isCompleted="todo.isCompleted"
          @delete-todo="deleteTodo(todo.id)"
          @mark-done="markComplete(todo.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AddToDo from "./components/AddToDo.vue";
import TodoItem from "./components/TodoItem.vue";

import uniqueId from "lodash.uniqueid";

export default {
  name: "App",
  components: {
    AddToDo,
    TodoItem,
  },
  data() {
    return {
      todos: [
        // {
        //   id: 1,
        //   todo: "Hello world",
        //   isCompleted: true,
        // },
        // {
        //   id: 2,
        //   todo: "Do something",
        //   isCompleted: false,
        // },
      ],
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
    markComplete: function(id) {
      const todoItemId = this.todos.find((item) => item.id === id);
      todoItemId.isCompleted = !todoItemId.isCompleted;
      console.log(todoItemId.isCompleted);
    },
    deleteTodo: function(id) {
      this.todos = this.todos.filter((todo) => todo.id != id);
    },
    editTodo: function() {},
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
