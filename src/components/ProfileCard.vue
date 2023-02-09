<template>
  <div class="row wrap justify-between items-center q-my-md q-py-md q-px-md">
    <div class="col">
      <div class="flex items-center">
        <q-icon
          class="q-mx-sm text-grey-6"
          style="font-size: 65px; color: #377dfd"
          color="#377dfd"
          name="fas fa-user-circle"
        />
        <div class="q-mr-md text-capitalize">
          <p class="q-mb-sm text-primary text-h5 text-weight-bold">
            {{ name }}
          </p>
          <p class="q-mb-sm text-body1 text-grey-6">{{ email }}</p>
        </div>
      </div>
    </div>
    <div class="col text-right text-body1 text-grey-6 text-capitalize">
      <p class="q-mb-none">Ijea Boulward Street 101</p>
      <p class="q-mb-none">Manlang city 65115</p>
      <p class="q-mb-none">east Java, indonesia</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  address: string;
  email: string;
}>();
</script>

<style scoped></style>
