<template>
  <div>
    <div class="q-my-md text-h6">
      <span class="text-primary">Invoice</span> / edit invoice
    </div>

    <div class="card-radius bg-white q-my-md q-pa-xl">
      <ProfileCard />
      <InvoiceProfile />
      <InvoicePayment />
    </div>
  </div>
</template>

<script setup lang="ts">
import InvoiceProfile from 'src/components/InvoiceProfile.vue';
import ProfileCard from 'src/components/ProfileCard.vue';
import InvoicePayment from 'src/components/InvoicePaymentMethods.vue';
</script>

<style scoped>
.card-radius {
  border-radius: 15px;
}
</style>
