"use client";
import Image from "next/image";

const DashOptions = ({ ico, label, focus }) => {
  return (
    <button
      onClick={() => {
        !focus && alert("Web Page Yet to Implement");
      }}
      className="flex flex-row mb-[40px] gap-[20px] focus:outline-none"
      autoFocus
    >
      <Image src={ico} width={18} height={18} className="h-[22px]" />
      <p
        className={
          focus
            ? "text-white font-montserrat text-[18px] font-[700] leading-[21.94px]"
            : "text-white font-montserrat text-[18px] font-[400] leading-[21.94px] hover:font-bold"
        }
      >
        {label}
      </p>
    </button>
  );
};

export default DashOptions;
