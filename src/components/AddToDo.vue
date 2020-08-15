<template>
  <div>
    <form @submit.prevent="onSubmit" action>
      <div class="form-style">
        <input type="text" v-model="newTodo" placeholder="What's next?" />
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
  padding: 8px 25px;
  font-size: 20px;
  margin-right: 8px;
  width: 300px;
  border: 1px solid #cccccc;
  height: 40px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
input[type="text"]:focus {
  margin: 8px 0 16px 0px;
  padding: 8px 25px;
  font-size: 20px;
  margin-right: 8px;
  width: 300px;
  border: 1px solid #cccccc;
  height: 40px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
::placeholder {
  font-size: 16px;
  color: #a3a3a3;
}
.primary-button {
  padding: 8px 12px;
  font-size: 16px;
  background: #333333;
  color: #ffffff;
  font-weight: 600;
  height: 57px;
  width: 140px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
}
</style>
