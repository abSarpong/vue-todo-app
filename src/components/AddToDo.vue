<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="form-style">
        <input type="text" v-model="title" placeholder="What's next?" />
        <button type="submit" class="primary-button">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddToDo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("add-new-todo", this.title);
      this.title = "";
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
}
.edit-form-style {
  margin-bottom: 16px;
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
}
.secondary-button {
  padding: 8px 12px;
  font-size: 16px;
  color: #707070;
  border: none;
  font-weight: 600;
  height: 57px;
  width: 140px;
}
</style>
