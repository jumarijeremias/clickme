
async function fetchCount() {
    return await axios.get("/get-count");
}

async function addCount() {
    return await axios.post("/add-count");
}

export const apiCalls = {
    fetchCount,
    addCount,
};