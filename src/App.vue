<template>
  <div id="app">
    <router-view />
  </div>
</template>

    <div class="wrapper">
      <add-to-do @add-new-todo="addTodo"></add-to-do>
      <div v-if="todoCount">
        <div v-for="{ id, title, completed } in todos" :key="id">
          <todo-item
            :id="id"
            :title="title"
            :completed="completed"
            @delete-todo="deleteTodo(id)"
            @mark-complete="markComplete(id)"
            @toggle-todo-forms="toggleEditForm(id)"
            @add-edited-todo="editTodo"
          />
        </div>
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
          <h2 style="color: #616161; font-weight: 500">No Todos Available Yet</h2>
          <span style="color: #7a7a7a; font-size: 14px">Todos you input will show up here.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddToDo from "./components/AddToDo.vue";
import TodoItem from "./components/TodoItem.vue";

export default {
  name: "App",
  components: {
    AddToDo,
    TodoItem,
  },
  data() {
    return {
      todos: [],
      isEditing: false,
    };
  },
  mounted() {
    if (localStorage.todos)
      this.todos = JSON.parse(localStorage.todos);
  },
  watch: {
    todos: {
      handler(title){
        localStorage.todos = JSON.stringify(title);
      },
      deep: true
    }
  },
  methods: {
    addTodo(newTodo) {
      const todoData = {
        id: this.todos.length + 1,
        title: newTodo,
        completed: false,
      };
      this.todos = [...this.todos, todoData];
      // this.todos.push({
      //   id: this.todos.length + 1,
      //   title: newTodo,
      //   completed: false,
      // });
    },
    markComplete(id) {
      const todoItemId = this.todos.find((item) => item.id === id);
      todoItemId.completed = !todoItemId.completed;
    },
    deleteTodo(id) {
      const todoIndex = this.todos.findIndex((item) => item.id === id);
      this.todos.splice(todoIndex, 1);
    },
    editTodo(todo) {
      const todoToEdit = this.todos.find((item) => item.id === todo.id);
      todoToEdit.title = todo.title;
    },
  },
  computed: {
    todoCount() {
      return this.todos.length;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* media queries */
@media only screen and (max-width: 600px) {
  .wrapper {
    width: 380px;
  }
}
</style>
