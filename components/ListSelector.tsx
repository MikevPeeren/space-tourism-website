import React, { Dispatch, SetStateAction } from "react";

import classNames from "classnames";

interface IListSelector {
  activeButton: number;
  page: string;
  setActiveButton: Dispatch<SetStateAction<number>>;
  extraClassNames?: string;
  content: string[] | number[];
  variant: string;
}

const ListSelector = ({
  activeButton,
  page,
  setActiveButton,
  extraClassNames,
  content,
  variant,
}: IListSelector) => {
  return (
    <div
      className={`flex flex-row justify-center items-center lg:mt-8 ${extraClassNames}`}
    >
      {content.map((x, i) => (
        <button
          key={i}
          id={page + " navigationButton " + i}
          aria-label={"display selector_" + 1}
          className={classNames({
            "cursor-pointer transition ease-in-out delay-150 duration-200 my-4":
              true,
            "rounded-full bg-white w-3 h-3 mx-2 hover:bg-gray":
              variant === "sm",
            "!bg-white": activeButton === i && variant === "sm",
            "bg-opacity-20": activeButton != i,
            "rounded-full bg-black text-white border border-dark-gray lg:w-16 lg:h-16 w-10 h-10 mx-2 hover:outline-white hover:outline-1 hover:outline":
              variant === "md",
            "!bg-white text-black": activeButton === i && variant === "md",
            "text-blue tracking-widest uppercase w-10 h-10 mx-4 hover:underline hover:underline-offset-8":
              variant === "underlined",
            "text-white underline decoration-2 underline-offset-8":
              activeButton === i && variant === "underlined",
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
