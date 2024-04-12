

export const getSingleItem = async (id) => {
    const res = await fetch(
        `https://finalprojectt-delta.vercel.app//api/v1/item/${id}`,
        {
            cache: "no-store",
        }
    );

    return res.json();
};