<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-primary">
      <div class="container">
        <q-toolbar>
          <q-toolbar-title class="text-weight-bolder text-h5 text-primary">
            PayPay.
          </q-toolbar-title>
          <div>
            <ul class="flex justify-between nav">
              <li
                class="q-mx-md text-h6 nav"
                v-for="(list, index) in lists"
                :key="index"
              >
                <q-icon
                  class="q-mx-sm text-grey-6"
                  size="sm"
                  :name="list.icon"
                />{{ list.name }}
              </li>
            </ul>
          </div>
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container class="bg-grey-1">
      <div class="container" style="min-height: 100vh">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup() {
    // const leftDrawerOpen = ref(false);
    let lists = [
      {
        name: 'Dashboard',
        icon: 'fas fa-th-large',
      },
      {
        name: 'Invoice',
        icon: 'fas fa-receipt',
      },
      {
        name: 'Wallet',
        icon: 'fas fa-wallet',
      },
      {
        name: 'Activity',
        icon: 'fas fa-chart-bar',
      },
      {
        name: 'Help',
        icon: 'fas fa-phone-alt',
      },
    ];

    return { lists };
  },
});
</script>

<style scoped>
.nav {
  list-style: none;
}

.container {
  width: 100%;
  max-width: 1240px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
