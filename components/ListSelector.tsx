import classNames from "classnames";

const ListSelector = ({ activeButton, setActiveButton }) => {
  return (
    <div className="flex flex-row justify-between items-center mt-8">
      <button
        id="1"
        className={classNames({
          "rounded-full bg-white w-3 h-3 mx-2 cursor-pointer transition ease-in-out delay-150 duration-150":
            true,
          "bg-opacity-20": activeButton != 1,
        })}
        onClick={() => setActiveButton(1)}
      ></button>
      <button
        id="2"
        className={classNames({
          "rounded-full bg-white w-3 h-3 mx-2 cursor-pointer transition ease-in-out delay-150 duration-150":
            true,
          "bg-opacity-20": activeButton != 2,
        })}
        onClick={() => setActiveButton(2)}
      ></button>
      <button
        id="3"
        className={classNames({
          "rounded-full bg-white w-3 h-3 mx-2 cursor-pointer transition ease-in-out delay-150 duration-150":
            true,
          "bg-opacity-20": activeButton != 3,
        })}
        onClick={() => setActiveButton(3)}
      ></button>
      <button
        id="4"
        className={classNames({
          "rounded-full bg-white w-3 h-3 mx-2 cursor-pointer transition ease-in-out delay-150 duration-150":
            true,
          "bg-opacity-20": activeButton != 4,
        })}
        onClick={() => setActiveButton(4)}
      ></button>
    </div>
  );
};

export default ListSelector;
