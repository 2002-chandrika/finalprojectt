import { auth } from "@/app/api/auth";
import AdoptRequest from "@/Components/AdoptRequest/AdoptRequest";
import AllPetRequest from "@/Components/AllPetRequest/AllPetRequest";
import { redirect } from "next/navigation";

const page = async() => {
    const session = await auth();
    if (!session?.user || session?.user?.role !=='admin') {
        redirect('/')
    }
    return (
        <div>
            <AdoptRequest />
        </div>
    );
};

export default page;