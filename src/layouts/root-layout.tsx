import Navbar from "@/pages/component/navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export default function RootLayout() {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Toaster />
    </React.Fragment>
  );
}
