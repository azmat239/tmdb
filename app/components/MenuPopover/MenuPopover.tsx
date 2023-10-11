import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MenuPopoverType } from "./MenuPopover.types";
import Link from "next/link";
import classNames from "classnames";

const popoverClass = classNames(
  "bg-slate-200 hover:bg-lightBlue h-5 w-5 flex justify-center items-center rounded-30"
);
const MenuPopover = ({ links, extraClasses }: MenuPopoverType) => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button className={`${popoverClass} ${extraClasses}`}>
        <BiDotsHorizontalRounded />
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className=" bg-white relative p-4 rounded-8 border-1 border-black">
        <div className="flex flex-col gap-3 text-xs text-black w-full">
          {links.map((link, index) => {
            return (
              <Link
                href={link.url}
                className="w-full hover:cursor-pointer"
                key={index}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default MenuPopover;
