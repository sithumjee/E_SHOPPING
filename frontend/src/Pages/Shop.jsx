import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import ComponentNew from "../Components/ComponentNew/ComponentNew";
import Emailtab from "../Components/EmailTAb/Emailtab";

export default function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <ComponentNew />
      <Emailtab />
    </div>
  );
}
