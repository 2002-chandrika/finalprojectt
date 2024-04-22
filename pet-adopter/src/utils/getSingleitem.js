

export const getSingleItem = async (id) => {
    const res = await fetch(
        `https://finalprojectt-205i.onrender.com/api/v1/item/${id}`,
        {
            cache: "no-store",
        }
    );

    return res.json();
};