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

<script>
import PartialsCompany from "../partials/forms/company.vue";
import { getCompany, updateCompany } from "../../compositions/company";

export default {
  data: () => ({ company: {}, errors: [] }),

  components: {
    PartialsCompany,
  },

  async created() {
    this.company = await getCompany(this.$route.params.id);
  },

  methods: {
    save(data) {
      updateCompany(this.$route.params.id, data)
        .then(() => this.$router.push({ name: "companies" }))
        .catch((e) => (this.errors = e.response.data.errors));
    },
  },
};
</script>