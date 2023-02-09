<template>
  <div class="q-mb-lg border-bottom">
    <div
      class="flex wrap justify-between items-center text-capitalize q-my-md q-py-sm"
    >
      <div>
        <p class="q-ma-none text-secondary text-weight-medium text-body1">
          itemDetails
        </p>
        <p class="q-ma-none text-grey-6">Type Item for Hour item</p>
      </div>
      <div>
        <button class="btn-outline">
          <q-icon class="q-mx-none text-primary" style="" name="fas fa-cog" />
          Customize
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col text-body5">
        <div
          class="row items-center text-grey-6 text-weight-medium border-bottom border-top q-py-md"
        >
          <div class="col-md-6">Item Name</div>
          <div class="col-md-2">Hour</div>
          <div class="col-md-1">Rate</div>
          <div class="col-md-1">Tax</div>
          <div class="col-md-1">Total</div>
          <div class="col-md-1"></div>
        </div>
        <div
          class="row items-center text-grey-6 text-weight-medium q-py-md"
          :key="index"
          v-for="(item, index) in items"
        >
          <div class="col-md-6">
            <div class="q-pa-sm">
              <BaseInput :modelValue="item.name" />
            </div>
          </div>
          <div class="col-md-2">
            <div class="q-pa-sm">
              <BaseInput :modelValue="item.hour" />
            </div>
          </div>
          <div class="col-md-1">
            <div class="q-pa-sm">
              <BaseInput :modelValue="item.rate" />
            </div>
          </div>
          <div class="col-md-1">
            <div class="q-pa-sm">
              <BaseInput :modelValue="item.tax" />
            </div>
          </div>
          <div class="col-md-1">
            <div class="q-pa-sm">
              <BaseInput :modelValue="item.total" />
            </div>
          </div>
          <div class="col-md-1">
            <div class="q-pa-sm">
              <q-icon
                class="q-mx-sm"
                style="font-size: 25px; color: #377dfd"
                color="#377dfd"
                name="fas fa-plus-circle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from './BaseInput.vue';
type invoiceItem = {
  hour: string;
  name: string;
  rate: number;
  tax: number;
  total: number;
};
defineProps<{
  items: invoiceItem[];
}>();
</script>

<style scoped>
.border-bottom {
  border-bottom: 2px solid #fafafa;
}

.border-top {
  border-top: 2px solid #fafafa;
}
.btn-outline {
  background-color: #f2f0fc;
  color: #4b48a3;
  font-weight: 600;
  outline: none;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
}

.btn-outline:hover {
  color: #f2f0fc;
  background-color: #4b48a3;
  /* box-shadow: ; */
}
</style>
