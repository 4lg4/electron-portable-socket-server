<template>
  <div class="command-card">
    <h3>{{ value.title }}</h3>
  </div>
</template>

<script>
export default {
  name: "command-card",
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style scoped>
.command-card {
  border: 1px solid #000;
}
</style>
