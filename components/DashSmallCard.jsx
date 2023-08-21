import Image from "next/image";

const DashSmallCard = ({ bg, ico, label, data, width }) => {
  return (
    <div
      className={`h-[120px] w-[221.053px] rounded-[20px]`}
      style={{ backgroundColor: `${bg}` }}
    >
      <Image
        src={ico}
        width={width}
        height={24}
        className="text-black ml-[169px] mt-[20px]"
      />
      <div className="flex flex-col ml-[25px] text-black">
        <p className="font-lato text-[14px] font-[400] leading-[16.8px] my-[1px]">
          {label}
        </p>
        <p className="font-openSans text-[24px] font-[700] leading-[32.68px] mb-[20px] mt-[4px]">
          {data}
        </p>
      </div>
    </div>
  );
};

export default DashSmallCard;
