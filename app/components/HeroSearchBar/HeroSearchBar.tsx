import React, { useState } from "react";
import Input from "../Input/Input";
import { HeroSearchBarType } from "./HeroSearchBar.types";
import Button from "../Button/Button";
import classNames from "classnames";
import { useRouter } from "next/navigation";

const HeroSearchBar = ({ inputProps, extraClasses }: HeroSearchBarType) => {
  const heroSearchBarClass = classNames(
    "flex mx-10 mt-10 bg-white rounded-30 justify-between max-w-[1220px]"
  );
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleInputKeyPress = (e: any) => {
    const searchQuery = inputValue;
    if (e.key == "Enter") {
      router.push(`/search?query=${searchQuery}`);
    }
  };
  const onSearchButtonClick = () => {
    router.push(`/search?query=${inputValue}`);
  };
  return (
    <div className={`${heroSearchBarClass} ${extraClasses ?? ""}`}>
      <Input
        placeholder={inputProps.placeholder}
        onInputChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
      />

      <Button
        text="Search"
        variant="hero-section"
        onClick={onSearchButtonClick}
      />
    </div>
  );
};

export default HeroSearchBar;
