<template>
  <div>
    <form @submit.prevent="onSubmit" action>
      <div>
        <label for>Add new todo</label>
      </div>
      <div class="form-style">
        <input type="text" v-model="newTodo" />
        <button type="submit" class="primary-button">
          + Add ToDo
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    onSubmit: function() {
      this.$emit("add-new-todo", this.newTodo);
      this.newTodo = "";
    },
  },
};
</script>

<style>
label {
  font-size: 16px;
  color: #707070;
}
input[type="text"] {
  margin: 8px 0 16px 0px;
  padding: 8px;
  font-size: 20px;
  margin-right: 8px;
  width: 334px;
  border: 1px solid #cccccc;
  height: 40px;
}
.primary-button {
  padding: 8px 12px;
  font-size: 16px;
  background: #333333;
  color: #ffffff;
  font-weight: 600;
  height: 57px;
  width: 140px;
}
</style>
