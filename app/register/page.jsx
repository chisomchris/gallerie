import { getServerSession } from "next-auth";
import { Register } from "./ClientUi";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
    title: 'Register | Gallerie'
}

export default function Page() {
    const session = getServerSession(authOptions)
    if (session) {
        return redirect('/')
    }
    return <Register />
}