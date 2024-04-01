

export const getSingleItem = async (id) => {
    const res = await fetch(
        `http://localhost:8080/api/v1/item/${id}`,
        {
            cache: "no-store",
        }
    );

    return res.json();
};