export const getSinglePet = async (id) => {
    const res = await fetch(
        `http://localhost:8080/api/v1/pet/${id}`,
        {
            cache: "no-store",
        }
    );
    return res.json();
};