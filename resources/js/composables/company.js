import { ref } from "@vue/reactivity";
const { default: axios } = require("axios");

export const companies = ref({});

export const getCompanies = async () => (companies.value = (await axios.get(`companies`)).data);

export const getCompany = async (id) => (await axios.get(`companies/${id}`)).data;

export const storeCompany = async (data) => (await axios.post(`companies`, data)).data;

export const updateCompany = async (id, data) => (await axios.put(`companies/${id}`, data)).data;

export const deleteCompany = async (id) => {
    if (confirm("Are you sure?")) {
        companies.value.data = companies.value.data.filter(element => element.id != id);

        const response = (await axios.delete(`companies/${id}`)).data;

        response ? getCompanies() : alert('An error occur!');
    }
};
