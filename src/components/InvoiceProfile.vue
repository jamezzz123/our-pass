<template>
  <div
    class="row wrap text-white justify-between items-center bg-primary q-my-md q-py-md q-px-md card-radius"
  >
    <div class="col-md-6 text-body1 text-capitalize">
      <p class="q-mb-sm text-weight-bold">Invoice Number</p>
      <p class="q-mb-sm">{{ invoice_number }}</p>
      <p class="q-mb-sm">Issued Date: {{ issue_date }}</p>
      <p class="q-mb-sm">Due Date: {{ due_date }}</p>
    </div>
    <div class="col-md-6 text-right text-body1 text-capitalize">
      <p class="q-mb-sm text-weight-bold">Billed to</p>
      <p class="q-mb-sm">Zaky Grizzly</p>
      <p class="q-mb-sm">Moonlight Agency LTD</p>
      <p class="q-mb-sm">New York,USA</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  invoice_number: string;
  issue_date: string;
  due_date: string;
  address?: string;
}>();
</script>

<style scoped></style>
