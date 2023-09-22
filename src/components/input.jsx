/* eslint-disable react/prop-types */
export default function Input(props) {
  const { className, ...prop } = props;

  return (
    <input
      className={`h-[47px] w-full bg-transparent text-white border-[1px] border-white placeholder-white outline-primary shadow-md rounded-md px-3 lg:px-6 ${
        className ?? ""
      }`}
      {...prop}
    />
  );
}
