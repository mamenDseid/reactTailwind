import React from "react";
import PhoneItem from "../components/PhoneItem";
import { phoneData } from "../data/phoneD";

export default function PhoneListScreen() {
  return (
    <div>
      <h1 className="text-4xl sm:text-2xl text-center font-bold ">
        All Phone Brands
      </h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4  px-2">
        {phoneData.map(phone => (
          <PhoneItem key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
}
