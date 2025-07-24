import React from "react";
import { Navbar } from "../components/Navbar";
import { AddStudentForm } from "../components/AddStudentForm";

export const AddStudentPage = () => {
    return (
        <section>
            <Navbar />
            <div>
                <AddStudentForm />
            </div>
        </section>
    )
}