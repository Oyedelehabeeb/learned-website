/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { PAGE_SIZE } from "../Utils/constants";
export default function PagePagination({ count = 0, parameter = "page" }) {
  const [params, setParams] = useSearchParams();
  const total = Math.ceil(count / PAGE_SIZE);
  const current = Math.min(total || 1, Math.max(1, Number(params.get(parameter)) || 1));
  if (total <= 1) return null;
  function change(page) { const next = new URLSearchParams(params); next.set(parameter, page); setParams(next); }
  return <nav className="pagination" aria-label={parameter === "page" ? "Course pages" : "Instructor pages"}><span>{(current - 1) * PAGE_SIZE + 1}–{Math.min(current * PAGE_SIZE, count)} of {count}</span><div><button className="icon-button" aria-label="Previous page" disabled={current <= 1} onClick={() => change(current - 1)}><FiChevronLeft /></button><span>Page {current} of {total}</span><button className="icon-button" aria-label="Next page" disabled={current >= total} onClick={() => change(current + 1)}><FiChevronRight /></button></div></nav>;
}
