<template>
  <div>
    <div class="q-my-md text-body1">
      <span class="text-primary">Invoice</span> / edit invoice
    </div>

    <div class="card-radius bg-white q-my-md q-pa-xl">
      <ProfileCard />
      <InvoiceProfile />
      <InvoiceItemList />
      <InvoicePayment />
    </div>
  </div>
</template>

<script setup lang="ts">
import InvoiceProfile from 'src/components/InvoiceProfile.vue';
import ProfileCard from 'src/components/ProfileCard.vue';
import InvoicePayment from 'src/components/InvoicePaymentMethods.vue';
import InvoiceItemList from 'src/components/InvoiceItemList.vue';
</script>

<style scoped>
.card-radius {
  border-radius: 15px;
}
</style>
