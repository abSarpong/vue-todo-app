<template>
  <div>
    <div v-if="!isEditing">
      <div :class="{ completed: completed }" class="todo-style" :id="id">
        <span class="break-point">
          <input type="checkbox" :id="id" :checked="isCompleted" @change="$emit('mark-complete')" />
          {{ todo }}
        </span>
        <span>
          <span class="edit-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#3867d6"
              style="width: 16px"
              @click="toggleEditForm(id)"
            >
              <path
                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
              />
            </svg>
          </span>
          <span class="delete-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#e74c3c"
              style="width: 16px"
              @click="deleteTodo"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </span>
      </div>
    </div>
    <div v-else :isEditing="isEditing" class="edit-form-style">
      <form @submit.prevent="onEditSave" action>
        <br />
        <input type="text" v-model="todo" />
        <button type="submit" class="primary-button">Update</button>
        <button @click="cancelEditForm" type="submit" class="secondary-button">
          <span style="font-size: 20px"></span>
          Cancel
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    id: { type: String },
    title: { type: String },
    completed: { type: Boolean },
  },
  data() {
    return {
      todo: this.title,
      isEditing: false,
    };
  },
  methods: {
    deleteTodo() {
      this.$emit("delete-todo");
    },
    onEditSave(newTitle) {
      if (this.title !== this.todo) {
        this.$emit("add-edited-todo", newTitle);
        this.isEditing = false;
      }
    },
    toggleEditForm() {
      this.isEditing = true;
    },
    cancelEditForm() {
      this.isEditing = false;
    },
  },
  computed: {
    isCompleted() {
      return this.completed;
    },
  },
};
</script>

<style>
p {
  font-size: 16px;
}
.completed {
  text-decoration: line-through solid red;
}
.todo-style {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  margin-bottom: 8px;
  background-color: #f6f8fa;
}
.break-point {
  width: 360px;
}
.delete-button {
  background: #e8e8e8;
  height: 16px;
}
.delete-icon {
  padding: 6px 5px 2px 5px;
  background-color: rgb(248, 182, 175, 0.4);
  border-radius: 50%;
  cursor: pointer;
}
.edit-icon {
  padding: 6px 5px 2px 5px;
  background-color: rgba(199, 224, 243, 0.4);
  border-radius: 50%;
  margin-right: 16px;
  cursor: pointer;
}
.cancel-link {
  font-size: 22px;
  color: #0088f1;
  cursor: pointer;
}

/* media queries */
.break-point {
  width: 200px;
}
</style>
