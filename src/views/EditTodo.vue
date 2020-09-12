<template>
  <div class="wrapper">
    <form @submit.prevent="onEditSave" action>
      <br />
      <input type="text" v-model="todoDetails" />
      <div class="button-group">
        <router-link :to="{name: 'home'}" class="button">
          <button @click="cancelEditForm" class="secondary-button">
            <span style="font-size: 20px"></span>
            Cancel
          </button>
        </router-link>
        <button type="submit" class="primary-button">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  mounted: function () {
    this.todoId = this.$route.params.todoId;
  },
  methods: {
    cancelEditForm() {
      this.editMode = false;
    },
    onEditSave() {
      console.log("was clicked");
    },
  },
  computed: {
    todoDetails() {
      const sumtin = "";
      return sumtin;
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 300px;
  margin: 0 auto;
  padding-top: 96px;
}
.button-group > .button {
  margin-right: 20px;
}
/* media queries */
.break-point {
  width: 200px;
}
</style>