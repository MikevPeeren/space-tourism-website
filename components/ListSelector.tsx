import classNames from "classnames";

const ListSelector = ({ activeButton, setActiveButton, amount, variant }) => {
  return (
    <div className="flex flex-row justify-between items-center mt-8">
      {variant &&
        variant === "sm" &&
        [...Array(amount)].map((x, i) => (
          <button
            key={i}
            id={String(i)}
            className={classNames({
              "rounded-full bg-white w-3 h-3 mx-2 cursor-pointer transition ease-in-out delay-150 duration-300":
                true,
              "bg-opacity-20": activeButton != i,
            })}
            onClick={() => setActiveButton(i)}
          />
        ))}
    </div>
  );
};

export default ListSelector;
