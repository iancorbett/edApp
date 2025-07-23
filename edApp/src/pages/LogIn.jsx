import React from "react";
import { LogInForm } from "../components/LogInForm";
import { Navbar } from "../components/Navbar";

export const LogIn = () => {
    return (
        <section>
            <Navbar />
            <div>
                <LogInForm />
            </div>
        </section>
    )
}