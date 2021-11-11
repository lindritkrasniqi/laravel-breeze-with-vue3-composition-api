<template>
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Company Information
          </h3>
          <p class="mt-1 text-sm text-gray-600">
            Use a permanent address where you can receive mail.
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <partials-company
          :company="company.data"
          :errors="errors"
          @submited="save"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import PartialsCompany from "../partials/forms/company.vue";
const { getCompany, updateCompany } = require("../../composables/company");

const errors = ref({});
const company = ref({});
const router = useRouter();
const route = useRoute();

onBeforeMount(
  async () => (company.value = await getCompany(route.params.id))
);

const save = (data) => {
  errors.value = {};

  updateCompany(route.params.id, data)
    .then(() => router.push({ name: "companies" }))
    .catch((e) => (errors.value = e.response.data.errors));
};
</script>