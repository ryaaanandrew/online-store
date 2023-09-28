import React from "react";

const NavigationBar = () => {
  return (
    <nav
      className={
        "border-2 border-slate-200 flex justify-between items-center p-4"
      }
    >
      <ul className="flex [&>li]:pr-2">
        <li>collections</li>
        <li>mens</li>
        <li>womens</li>
        <li>sale</li>
      </ul>

      <div>
        <h1>Logo</h1>
      </div>

      <ul className="flex [&>li]:pl-2">
        <li>locations</li>
        <li>account</li>
        <li>cart</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
