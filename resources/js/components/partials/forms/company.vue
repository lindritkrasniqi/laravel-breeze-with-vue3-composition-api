<template>
  <form @submit.prevent="$emit('submited', company)">
    <div class="shadow overflow-hidden sm:rounded-md">
      <div class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label
              for="first-name"
              class="block text-sm font-medium text-gray-700"
              >First name</label
            >
            <input
              type="text"
              name="first-name"
              id="first-name"
              autocomplete="given-name"
              v-model="company.owner_firstname"
              class="
                mt-1
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
            <b class="mt-1 text-sm text-red-600" v-if="errors.owner_firstname">
              {{ errors.owner_firstname.toString() }}
            </b>
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label
              for="last-name"
              class="block text-sm font-medium text-gray-700"
              >Last name</label
            >
            <input
              type="text"
              name="last-name"
              id="last-name"
              v-model="company.owner_lastname"
              autocomplete="family-name"
              class="
                mt-1
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
            <b class="mt-1 text-sm text-red-600" v-if="errors.owner_lastname">
              {{ errors.owner_lastname.toString() }}
            </b>
          </div>

          <div class="col-span-6 sm:col-span-4">
            <label
              for="email-address"
              class="block text-sm font-medium text-gray-700"
              >Email address</label
            >
            <input
              type="text"
              name="email-address"
              id="email-address"
              v-model="company.owner_email"
              autocomplete="email"
              class="
                mt-1
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
            <b class="mt-1 text-sm text-red-600" v-if="errors.owner_email">
              {{ errors.owner_email.toString() }}
            </b>
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label
              for="email-address"
              class="block text-sm font-medium text-gray-700"
              >Company name:</label
            >
            <input
              type="text"
              name="company-name"
              id="company-name"
              v-model="company.name"
              autocomplete="email"
              class="
                mt-1
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
            <b class="mt-1 text-sm text-red-600" v-if="errors.name">
              {{ errors.name.toString() }}
            </b>
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="country" class="block text-sm font-medium text-gray-700"
              >Country / Region</label
            >
            <select
              id="country"
              name="country"
              autocomplete="country"
              v-model="company.country"
              class="
                mt-1
                block
                w-full
                py-2
                px-3
                border border-gray-300
                bg-white
                rounded-md
                shadow-sm
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                sm:text-sm
              "
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
            <b class="mt-1 text-sm text-red-600" v-if="errors.country">
              {{ errors.country.toString() }}
            </b>
          </div>

          <div class="col-span-6">
            <label
              for="street-address"
              class="block text-sm font-medium text-gray-700"
              >Street address</label
            >
            <input
              type="text"
              name="street-address"
              id="street-address"
              v-model="company.street_address"
              autocomplete="street-address"
              class="
                mt-1
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
            <b class="mt-1 text-sm text-red-600" v-if="errors.street_address">
              {{ errors.street_address.toString() }}
            </b>
          </div>

          <div class="col-span-6 sm:col-span-6 lg:col-span-2">
            <label for="city" class="block text-sm font-medium text-gray-700"
              >City</label
            >
            <input
              type="text"
              name="city"
              id="city"
              v-model="company.city"
              class="
                mt-1
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
            <b class="mt-1 text-sm text-red-600" v-if="errors.city">
              {{ errors.city.toString() }}
            </b>
          </div>

          <div class="col-span-6 sm:col-span-3 lg:col-span-2">
            <label for="state" class="block text-sm font-medium text-gray-700"
              >State / Province</label
            >
            <input
              type="text"
              name="state"
              v-model="company.state"
              id="state"
              class="
                mt-1
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
            <b class="mt-1 text-sm text-red-600" v-if="errors.state">
              {{ errors.state.toString() }}
            </b>
          </div>

          <div class="col-span-6 sm:col-span-3 lg:col-span-2">
            <label
              for="postal-code"
              class="block text-sm font-medium text-gray-700"
              >ZIP / Postal</label
            >
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              v-model="company.postal_code"
              autocomplete="postal-code"
              class="
                mt-1
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
            <b class="mt-1 text-sm text-red-600" v-if="errors.postal_code">
              {{ errors.postal_code.toString() }}
            </b>
          </div>
        </div>
      </div>
      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <router-link
          :to="{ name: 'companies' }"
          class="
            inline-flex
            justify-center
            py-2
            px-4
            mx-4
            border border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-red-600
            hover:bg-red-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-red-500
          "
        >
          Cancel
        </router-link>
        <button
          type="submit"
          class="
            inline-flex
            justify-center
            py-2
            px-4
            border border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ["company", "errors"],
};
</script>