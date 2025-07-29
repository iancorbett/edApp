import React from "react";
import { Navbar } from "../components/Navbar";
import { Form } from "../components/Form";
import { BackButton } from "../components/BackButton";

export const FormPage = () => {
    return(
        <section>
            <Navbar />
            <BackButton />
            <div>
                <Form />
            </div>
        </section>
    )
}