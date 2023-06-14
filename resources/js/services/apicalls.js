export const GET_COUNT_URL = "/get-count";
export const ADD_COUNT_URL = "/add-count";

async function fetchCount() {
    return await axios.get(GET_COUNT_URL);
}

async function addCount() {
    return await axios.post(ADD_COUNT_URL);
}

export const apiCalls = {
    fetchCount,
    addCount,
};

export const API_URLS = {
    GET_COUNT_URL,
    ADD_COUNT_URL,
}