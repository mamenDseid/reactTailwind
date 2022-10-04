import React from "react";

export default function PhoneItem({ phone }) {
  return (
    <div className="shadow-md cursor-pointer :hover scale-110 ">
      <img src={phone.pimg} alt="" className=" object-cover" />
      <div className="bg-sky-500 hover:bg-sky-700">{phone.ptitle}</div>
    </div>
  );
}
