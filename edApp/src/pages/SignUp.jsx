import React from "react";
import { SignUpForm } from "../components/SignUpForm";
import { Navbar } from "../components/Navbar";

export const SignUp = () => {
    return (
        <section>
            <Navbar />
            <div>
                <SignUpForm />
            </div>
        </section>
    )
}