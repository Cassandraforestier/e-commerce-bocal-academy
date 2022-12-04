import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { HeaderNavigation } from "./header";
export function Layout() {
  return (
    <div>
      <HeaderNavigation />
      <Outlet />
      <Footer />
    </div>
  );
}
