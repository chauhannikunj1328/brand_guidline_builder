"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Ctx = { open: boolean; setOpen: (v: boolean) => void };
const MenuCtx = createContext<Ctx>({ open: false, setOpen: () => {} });

export function MenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return <MenuCtx.Provider value={{ open, setOpen }}>{children}</MenuCtx.Provider>;
}

export const useMenu = () => useContext(MenuCtx);
