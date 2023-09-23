export default function Button(props) {
  const { className, children, loading, disabled, ...prop } = props;

  return (
    <button
      className={`h-[53px] w-[172px] py-1 transition-all duration-300 active:scale-[95] rounded-[4px] grid place-items-center text-white bg-[#D434FE]-gradient ${
        className ?? ""
      }`}
      {...prop}
    >
      {children}
    </button>
  );
}
