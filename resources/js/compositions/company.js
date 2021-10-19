const { default: axios } = require("axios");

export const getCompanies = async () => {
    const response = (await axios.get(`companies`)).data;

    return response;
};

export const getCompany = async (id) => {
    const response = (await axios.get(`companies/${id}`)).data;

    return response;
};

export const storeCompany = async (data) => {
    const response = (await axios.post(`companies`, data)).data;

    return response;
};

export const updateCompany = async (id, data) => {
    const response = (await axios.put(`companies/${id}`, data)).data;

    return response;
};

export const deleteCompany = async (id) => {
    const response = (await axios.delete(`companies/${id}`)).data;

    return response;
};
