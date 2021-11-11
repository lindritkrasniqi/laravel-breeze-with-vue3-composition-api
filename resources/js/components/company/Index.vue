<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >Owner</th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >Company</th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >Postal code</th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >Country</th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <transition-group name="list" tag="tbody" class="bg-white divide-y divide-gray-200">
              <tr v-for="company in companies.data" :key="company.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" :src="company.owner_avatar" alt />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{
                          company.owner_firstname + " " + company.owner_lastname
                        }}
                      </div>
                      <div class="text-sm text-gray-500">{{ company.owner_email }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ company.name }}</div>
                  <div class="text-sm text-gray-500">{{ company.street_address }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                  >{{ company.postal_code }}</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ company.country }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <router-link
                    :to="{ name: 'companies.edit', params: { id: company.id } }"
                    class="text-indigo-600 mx-2 hover:text-indigo-900"
                  >Edit</router-link>
                  <button
                    type="button"
                    class="text-red-600 mx-2 hover:text-red-900"
                    @click.prevent="deleteCompany(company.id)"
                  >Delete</button>
                </td>
              </tr>
            </transition-group>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount } from "@vue/runtime-core";
const {
  companies,
  getCompanies,
  deleteCompany,
} = require("../../composables/company");

onBeforeMount(getCompanies());
</script>