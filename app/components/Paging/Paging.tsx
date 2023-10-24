"use client";
import classNames from "classnames";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { PagingType } from "./Paging.type";

const Paging = ({ pageNumber, onClick, totalPages }: PagingType) => {
  const buttonClasses = classNames("px-2 py-1");
  return (
    <div className="flex gap-6 justify-center my-6 font-bold">
      {pageNumber > 1 ? (
        <button
          onClick={() => {
            onClick(pageNumber - 1);
          }}
          className="flex gap-2 justify-center items-center"
        >
          <AiOutlineArrowLeft />
          prev
        </button>
      ) : (
        ""
      )}
      {totalPages && (
        <div className="flex justify-center items-center">
          {(() => {
            const buttons = [];
            if (pageNumber <= 7 || pageNumber == totalPages) {
              for (
                let i = 1;
                i <= Math.min(8, totalPages) || i == totalPages;
                i++
              ) {
                buttons.push(
                  <button
                    onClick={() => onClick(i)}
                    className={`${
                      pageNumber == i
                        ? "border-[1px] border-slate-500 text-slate-400"
                        : ""
                    } ${buttonClasses}`}
                  >
                    {i}
                  </button>
                );
              }
              buttons.push(<span> . . . </span>);
              for (let i = totalPages - 3; i <= totalPages; i++) {
                buttons.push(
                  <button
                    onClick={() => onClick(i)}
                    className={`${
                      pageNumber == i
                        ? "border-[1px] border-slate-500 text-slate-400"
                        : ""
                    } ${buttonClasses}`}
                  >
                    {i}
                  </button>
                );
              }
            } else {
              buttons.push(
                <button
                  onClick={() => onClick(1)}
                  className={`${
                    pageNumber == 1
                      ? "border-[1px] border-slate-500 text-slate-400"
                      : ""
                  } ${buttonClasses}`}
                >
                  1
                </button>
              );

              buttons.push(<span> . . .</span>);
              for (
                let i = pageNumber;
                i <= pageNumber + 4 && i <= totalPages;
                i++
              ) {
                buttons.push(
                  <button
                    onClick={() => onClick(i)}
                    className={`${
                      pageNumber == i
                        ? "border-[1px] border-slate-500 text-slate-400"
                        : ""
                    } ${buttonClasses}`}
                  >
                    {i}
                  </button>
                );
              }
            }
            return buttons;
          })()}
        </div>
      )}

      <button
        onClick={() => onClick(pageNumber + 1)}
        className="flex gap-2 justify-center items-center"
      >
        Next
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default Paging;
