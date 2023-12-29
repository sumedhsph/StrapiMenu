import React from "react";
import sublinks from "./data";
import { useGlobalContext } from "./context";
export default function Navlinks() {
  const { setPageId } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button className="nav-link" key={pageId} onMouseEnter={()=> setPageId(pageId)}>
            {page}
          </button>
        );
      })}
    </div>
  );
}
