export const LIMIT = 10;

export const fetchProducts = async (page) => {
    const skip = (page - 1) * LIMIT;
    const res = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
    );
    if (res.ok) {
        return await res.json();
    }
    throw new Error("Fetching API failed");
};