<template>
  <div>
    <div>
      <p class="todo-style" :id="id">
        <span>
          <input
            type="checkbox"
            :id="id"
            :checked="isDone"
            @change="$emit('mark-done')"
          />
          {{ todo }}
        </span>
        <span class="delete-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#333333"
            style="width: 16px"
            @click="deleteTodo"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    id: { type: String },
    todo: { type: String },
    isCompleted: { type: Boolean },
  },
  data() {
    return {
      isDone: this.isCompleted,
    };
  },
  methods: {
    deleteTodo: function() {
      this.$emit("delete-todo");
    },
  },
};
</script>

<style>
p {
  text-decoration: none;
  list-style-type: none;
  padding: 16px 24px;
  margin-bottom: 8px;
  background-color: #f6f8fa;
}
.completed {
  text-decoration: line-through solid red;
}
.todo-style {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-content: center; */
}
.delete-button {
  background: #e8e8e8;
  height: 16px;
  /* padding: 4px 4px; */
}
.delete-icon {
  padding: 6px 5px 2px 5px;
  background-color: #e1e1e1;
  border-radius: 50%;
}
</style>
