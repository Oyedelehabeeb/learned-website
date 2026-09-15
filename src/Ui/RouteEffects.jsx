import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const page = pathname.split("/").filter(Boolean).pop();
    document.title = page
      ? `${page.replaceAll("-", " ").replace(/\b\w/g, letter => letter.toUpperCase())} · Learned`
      : "Learned · Make curiosity a habit";
  }, [pathname]);
  return null;
}
