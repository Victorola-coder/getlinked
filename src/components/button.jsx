export default function Button(props) {
  const { className, children, loading, disabled, ...prop } = props;

  return (
    <button
      className={`h-[53px] w-[172px] rounded-[4px] grid place-items-center text-white bg-primary-gradient ${
        className ?? ""
      }`}
      {...prop}
    >
      {children}
    </button>
  );
}
