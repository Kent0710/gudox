"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase";
import { FaGoogle } from "react-icons/fa";

import { setSession } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import LoaderButton from "@/components/reusables/loader-button";

export default function SignUpPage() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleGoogleSignIn = async () => {
        setLoading(true);

        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const idToken = await result.user.getIdToken();

        const sessionResult = await setSession(idToken);
        if (sessionResult.status === "success") {
            router.push("/home");
        } else {
            setLoading(false);
            toast.error("Failed to sign in. Please try again.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-dvh">
            <LoaderButton
                loadingText="Signing in..."
                isLoading={loading}
                onClick={handleGoogleSignIn}
            >
                <FaGoogle />
                Sign in with Google
            </LoaderButton>
        </div>
    );
}
