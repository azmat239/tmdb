import React from "react";
import Heading from "../Heading/Heading";
import classNames from "classnames";
import Text from "../Text/Text";
import { footerLinkType } from "./footerLink.type";
import Link from "next/link";

const FooterLink = ({ title, text, extraClasses }: footerLinkType) => {
  let footerClasses = classNames("px-2 text-white");
  return (
    <div className={`${footerClasses} ${extraClasses}`}>
      <Heading text={title} variant="20" />
      <ul>
        {text.map((text) => {
          return (
            <Link href="/">
              <Text text={`${text}`} variant="14" extraClasses="text-white" />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLink;
