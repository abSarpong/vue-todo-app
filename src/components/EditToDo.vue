<template>
  <div>
    <form @submit.prevent="onSubmit" action>
      <div class="form-style">
        <div>
          <span style="font-size: 22px; color: #0088f1" @click="cancelEdit">
            &#8855;
            <span style="font-size: 16px;">Cancel</span>
          </span>
        </div>
        <input type="text" v-model="newTodo" placeholder="What's next?" />
        <button type="submit" class="primary-button">
          <span style="font-size: 20px">&#10003;&nbsp;</span>
          Save ToDo
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditToDo",
  props: {
    // id: { type: String },
    // todo: { type: String },
  },
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("edit-todo", this.newTodo);
      this.isTodo = "";
    },
    cancelEdit() {
      this.$emit("cancel-edit");
    },
  },
};
</script>

<style>
</style>
