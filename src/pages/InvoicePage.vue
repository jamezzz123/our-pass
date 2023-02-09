<template>
  <div>
    <div class="q-my-md text-body1">
      <span class="text-primary">Invoice</span> / edit invoice
    </div>

    <div class="card-radius bg-white q-my-md q-pa-xl">
      <ProfileCard
        :name="state.user.name"
        :email="state.user.email"
        :address="state.user.address"
      />
      <InvoiceProfile
        :invoice_number="state.invoice.inv_number"
        :issue_date="state.invoice.issued_date"
        :due_date="state.invoice.due_date"
      />
      <InvoiceItemList :items="state.invoice.items" />
      <InvoicePayment />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import InvoiceProfile from 'src/components/InvoiceProfile.vue';
import ProfileCard from 'src/components/ProfileCard.vue';
import InvoicePayment from 'src/components/InvoicePaymentMethods.vue';
import InvoiceItemList from 'src/components/InvoiceItemList.vue';
import axios from 'axios';

type invoiceItem = {
  hour: string;
  name: string;
  rate: number;
  tax: number;
  total: number;
};
let state = reactive({
  user: {
    address: '',
    email: '',
    name: '',
  },
  invoice: {
    address: 'Zaky Grizzly, Moonlight Agency LTD , New York USA',
    due_date: '11 Jan 2022',
    inv_number: 'INV-2022-10',
    issued_date: '11 Jan 2022',
    items: [],
  },
});

async function getUserProfile() {
  try {
    let { data } = await axios('/api/user');
    console.log(data);
    state.user = { ...data };
  } catch (error) {
    console.log(error);
  }
}

async function getInvoiceDetail() {
  try {
    let { data } = await axios('/api/invoice');
    console.log(data);
    state.invoice = { ...data };
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getUserProfile();
  getInvoiceDetail();
});
</script>

<style scoped>
.card-radius {
  border-radius: 15px;
}
</style>
