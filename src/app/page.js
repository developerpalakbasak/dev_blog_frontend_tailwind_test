"use client"

import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
    <ToastContainer/>
    <Header/>
    <BlogList/>
    <Footer/>
    </>
  );
}
