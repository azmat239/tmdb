import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { AiOutlineMenu } from "react-icons/ai";
import { GiCrossedBones } from "react-icons/gi";
import { MenuPopoverType } from "./MenuPopover.types";
import Link from "next/link";

const MenuPopover = ({ links, onMenuClick, extraClasses }: MenuPopoverType) => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button className={`${extraClasses}`} onClick={onMenuClick}>
        <AiOutlineMenu />
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className=" bg-white relative left-[-4rem] top-[-1.5rem]">
        <div className="flex flex-col gap-3 text-black w-full py-4 px-10">
          {links.map((link) => {
            return (
              <Link href={link.url} className="w-full p-2 hover:cursor-pointer">
                {link.text}
              </Link>
            );
          })}
        </div>
        <Popover.Close className="absolute top-2 right-2">
          <GiCrossedBones />
        </Popover.Close>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default MenuPopover;
