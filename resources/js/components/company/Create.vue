<template>
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Company Information - Create
          </h3>
          <p class="mt-1 text-sm text-gray-600">
            Use a permanent address where you can receive mail.
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <partials-company :company="{}" :errors="errors" @submited="store" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PartialsCompany from "../partials/forms/company.vue";
import { useRouter } from "vue-router";
const { storeCompany } = require("../../composables/company");

export default { components: { PartialsCompany } };
</script>

<script setup>
const errors = ref({});

const store = (data) => {
  errors.value = {};

  storeCompany(data)
    .then(() => useRouter().push({ name: "companies" }))
    .catch((e) => (errors.value = e.response.data.errors));
};
</script>