import React from "react";
import { Navbar } from "../components/Navbar";
import { AddStudentsForm } from "../components/AddStudentsForm";

export const AddStudetsPage = () => {
    return (
        <section>
            <Navbar />
            <div>
                <AddStudentsForm />
            </div>
        </section>
    )
}