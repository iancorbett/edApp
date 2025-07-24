import React from "react";
import { Navbar } from "../components/Navbar";
import { AddStudentsForm } from "../components/AddStudentsForm";

export const AddStudentsPage = () => {
    return (
        <section>
            <Navbar />
            <div>
                <AddStudentsForm />
            </div>
        </section>
    )
}