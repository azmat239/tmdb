import React from "react";
import Heading from "../Heading/Heading";
import classNames from "classnames";
import Text from "../Text/Text";
import { footerLinkType } from "./footerLink.type";
import Link from "next/link";

const FooterLink = ({ text, url, extraClasses }: footerLinkType) => {
  let footerLinkClasses = classNames("");
  return (
    <Link href="/" className={`${footerLinkClasses} ${extraClasses ?? ""} `}>
      <Text text={text} variant="12" extraClasses="text-white" />
    </Link>
  );
};

export default FooterLink;
