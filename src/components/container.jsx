/* eslint-disable react/prop-types */

export default function Container({ className, children }) {
  return (
    <div
      className={`px-[30px] lg:px-12 w-full max-w-[1512px] mx-auto ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
