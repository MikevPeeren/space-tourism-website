import classNames from "classnames";

const ListSelector = ({ activeButton, setActiveButton, content, variant }) => {
  return (
    <div className="flex flex-row justify-center items-center mt-8">
      {content.map((x, i) => (
        <button
          key={i}
          id={String(i)}
          className={classNames({
            "cursor-pointer transition ease-in-out delay-150 duration-200":
              true,
            "rounded-full bg-white w-3 h-3 mx-2": variant === "sm",
            "rounded-full bg-black text-white border border-dark-gray w-10 h-10 mx-2":
              variant === "md",
            "bg-opacity-20": activeButton != i,
            "!bg-white text-black": activeButton === i && variant === "md",
          })}
          onClick={() => setActiveButton(i)}
        >
          {x}
        </button>
      ))}
    </div>
  );
};

export default ListSelector;
