import React from "react";
import FooterLink from "../footerLink/footerLink";
import { FooterMenuType } from "./FooterMenu.types";
import classNames from "classnames";
import Link from "next/link";

const FooterMenu = ({ extraClasses }: FooterMenuType) => {
  let FooterClass = classNames("flex gap-4 px-4");
  return (
    <div className={`${FooterClass} ${extraClasses}`}>
      <FooterLink
        title="THE BASICS"
        text={[
          "AboutTMDB",
          "Contact us",
          "Support Forum",
          "Api",
          "System Support",
        ]}
      />
      <FooterLink
        title="GET INVOLVED"
        text={["Contribution Bible", "Add New Movies", "Add New Tv Shows"]}
      />
      <FooterLink
        title="COMMUNITY"
        text={["Guidelines", "Discussion", "Leaderboard", "Twiter"]}
      />
      <FooterLink
        title="LEGAL"
        text={[
          "Terms of Use",
          "API Terms of Use",
          "Privacy Policy",
          "DMCA Takedown Request",
        ]}
      />
    </div>
  );
};

export default FooterMenu;
