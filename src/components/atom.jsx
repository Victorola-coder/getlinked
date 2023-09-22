import React, { Children } from "react";

export default function Atom({ className, children }) {
  return (
    <div
      className={`${className} mt-[30px] px-[77px] flex flex-col items-center justify-between md:mt-[90px] lg:mt-[193pxs] md:space-x-[50px] lg:space-x-[100px] md:flex md:flex-row md:justify-center`}
    >
      {children}
    </div>
  );
}
