import { getServerSession } from "next-auth";
import { Register } from "./ClientUI";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
    title: 'Register | Gallerie'
}

export default async function Page() {
    const session = await getServerSession(authOptions)
    if (session) {
        return redirect('/')
    }
    return <Register />
}