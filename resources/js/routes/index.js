import { createRouter, createWebHistory } from "vue-router";

import CompanyIndex from "../components/company/Index.vue";
import CompanyEdit from "../components/company/Edit.vue";
import CompanyCreate from "../components/company/Create.vue";

const routes = [
    { path: "/companies", name: "companies", component: CompanyIndex },
    { path: "/companies/:id", name: "companies.edit", component: CompanyEdit },
    { path: "/companies/create", name: "companies.create", component: CompanyCreate },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
