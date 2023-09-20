import { getServerSession } from "next-auth";
import { Login } from "./ClientUI";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
    title: 'Login | Gallerie'
}

export default async function Page() {
    const session = await getServerSession(authOptions)
    if (session) {
        return redirect('/')
    }
    return <Login />
}