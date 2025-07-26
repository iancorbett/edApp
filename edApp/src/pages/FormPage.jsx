import React from "react";
import { Navbar } from "../components/Navbar";
import { Form } from "../components/Form";

export const FormPage = () => {
    return(
        <section>
            <Navbar />
            <div>
                <Form />
            </div>
        </section>
    )
}