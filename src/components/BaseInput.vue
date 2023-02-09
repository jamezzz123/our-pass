<template>
  <input :type="type" :value="modelValue" @input="updateInput" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'text',
    },
    modelValue: {
      type: [String, Number],
      default: 'text',
    },
  },
  methods: {
    updateInput(event: any) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
});
</script>

<style scoped>
input {
  outline: none;
  outline-style: none;
  padding: 10px 20px;
  width: 100%;
  border-radius: 8px;
  appearance: none;
  border: 1px solid #9e9e9e;
  background-color: #fafafa;
  color: #4b48a3;
  font-weight: 600;
}
</style>
