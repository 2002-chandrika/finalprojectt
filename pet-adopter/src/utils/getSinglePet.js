export const getSinglePet = async (id) => {
    const res = await fetch(
        `https://finalprojectt-205i.onrender.com/api/v1/pet/${id}`,
        {
            cache: "no-store",
        }
    );
    return res.json();
};