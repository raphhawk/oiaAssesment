/*https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/rates_of_exchange?fields=country_currency_desc,exchange_rate, record_date&filter=record_date:gte:2015-01-01*/
/*https://fiscaldata.treasury.gov/api-documentation/*/

import Image from "next/image";
import DashOptions from "@/components/DashOptions";
import DashSmallCard from "@/components/DashSmallCard";
import LineChart from "@/components/LineChart";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import PieChart from "@/components/PieChart";

const dashOptions = {
  dashboard: {
    ico: "assets/db_assets/dashboard_icon.svg",
    label: "Dashboard",
    focus: true,
  },
  transactions: {
    ico: "assets/db_assets/transaction_icon.svg",
    label: "Transactions",
    focus: false,
  },
  schedules: {
    ico: "assets/db_assets/schedule_icon.svg",
    label: "Schedulers",
    focus: false,
  },
  users: {
    ico: "assets/db_assets/user_icon.svg",
    label: "Users",
    focus: false,
  },
  settings: {
    ico: "assets/db_assets/setting_icon.svg",
    label: "Settings",
    focus: false,
  },
};

const dashSmallCard = {
  revenues: {
    ico: "assets/db_small_assets/rev.svg",
    label: "Total Revenues",
    bg: "#DDEFE0",
    data: "$2,129,430",
    width: 26.4,
  },
  transactions: {
    ico: "assets/db_small_assets/tran.svg",
    label: "Total Transactions",
    bg: "#F4ECDD",
    data: "1,520",
    width: 20.792,
  },
  likes: {
    ico: "assets/db_small_assets/like.svg",
    label: "Total Likes",
    bg: "#EFDADA",
    data: "9,721",
    width: 23.298,
  },
  users: {
    ico: "assets/db_small_assets/users.svg",
    label: "Total Likes",
    bg: "#DEE0EF",
    data: "9,721",
    width: 36.816,
  },
};

const Dashbord = () => {
  return (
    <div className="flex flex-row w-fit bg-[#F5F5F5]">
      <div className="flex flex-col w-[280px] h-[944px] rounded-[30px] bg-black ml-[40px] my-[40px] hidden md:block">
        <div className="w-[123px] h-[44px] font-montserrat text-[36px] font-[700] leading-[43.88px] ml-[50px] mt-[60px]">
          Board.
        </div>
        <div className="flex flex-col ml-[50px] mt-[60px] mb-[356px]">
          {Object.values(dashOptions).map((o) => {
            return <DashOptions ico={o.ico} label={o.label} focus={o.focus} />;
          })}
        </div>
        <div className="flex flex-col mb-[60px] ml-[50px]">
          <div className="w-[34px] h-[17px] font-montserrat text-[14px] font-[400] leading-[17.07px] mb-[20px]">
            Help
          </div>
          <div className="w-[87px] h-[17px] font-montserrat text-[14px] font-[400] leading-[17.07px]">
            Contact Us
          </div>
        </div>
      </div>
      <div className="flex flex-col font-lato text-[#858585] text-[14px] font-[400] leading-[16.8px]">
        <div className="flex md:flex-row flex-col">
          <p className="text-black w-[123px] h-[44px] ml-[60px] mt-[60px] font-montserrat text-[24px] font-[700] leading-[29.26px] mr-[590px]">
            Dashboard
          </p>
          <div className="flex flex-row mr-[47px]">
            <input
              type="text"
              placeholder="Search..."
              className="h-[30px] w-[180px] rounded-[10px] pl-[15px] pt-[6px] pb-[7px] mt-[60px] mb-[39px]"
            />
            <Image
              src="assets/db_top_assets/search.svg"
              width={12}
              height={12}
              className="relative left-[-26px] top-[10px]"
            />
            <button type="button" className="mt-[65px] mb-[44px]">
              <Image
                src="assets/db_top_assets/bell.svg"
                height={20}
                width={18}
                className="ml-[30px] mr-[20px]"
              />
            </button>
            <button
              type="button"
              className="w-[52px] h-[51px] flex items-center pl-[11px] mt-[50px] mb-[28px]"
            >
              <Image
                src="/assets/db_top_assets/asset_profile_img.png"
                height={30}
                width={30}
                className="rounded-full object-cover h-[30px] w-[30px] relative left-[-9px]"
              />
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-[36.84px] mx-[60px]">
          {Object.values(dashSmallCard).map((o) => {
            return (
              <DashSmallCard
                ico={o.ico}
                label={o.label}
                bg={o.bg}
                data={o.data}
                width={o.width}
              />
            );
          })}
        </div>
        <div className="bg-white md:w-[1000px] w-[60px] md:h-[359px] h-fit rounded-[20px] mx-[60px] mt-[40px]">
          <div className="w-[480px] h-[256px] bg-white rounded-[20px]">
            <div className="flex flex-row md:justify-between w-[1000px]">
              <div className="flex flex-col mt-[30px] ml-[40px]">
                <p className="w-[93px] h-[22px] font-montserrat text-[18px] font-[700] leading-[21.94px] text-black mb-[5px]">
                  Activities
                </p>
                <div className="flex flex-row gap-[5px]">
                  <p className="w-[111px] h-[17px] font-montserrat text-[14px] font-[400] leading-[17.07px] text-[#858585]">
                    May - June 2021
                  </p>
                  <button className="h-[5px] w-[8px] text-[#858585]">
                    <IoIosArrowDown />
                  </button>
                </div>
              </div>
              <div className="flex md:flex-row flex-col mt-[49px] mr-[60px] ml-[60px] md:ml-[0px] w-[152.47px] justify-between">
                <p className="flex flex-row w-[24px] h-[17px] font-lato text-[14px] font-[400] leading-[16.8px]">
                  <Image
                    src="assets/db_bar_chart_assets/red_dot.svg"
                    width={10}
                    height={10}
                    className="mr-[10.4px]"
                  />
                  Guest
                </p>
                <p className="flex flex-row w-[34px] h-[17px] font-lato text-[14px] font-[400] leading-[16.8px]">
                  <Image
                    src="assets/db_bar_chart_assets/green_dot.svg"
                    width={10}
                    height={10}
                    className="mr-[11px]"
                  />
                  User
                </p>
              </div>
            </div>
            <div>
              <LineChart />
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between mt-[40px] mx-[60px]">
          <div className="w-[480px] h-[256px] bg-white rounded-[20px]">
            <div className="flex flex-row justify-between">
              <p className="w-[125px] h-[22px] font-montserrat text-[18px] font-[700] leading-[21.94px] text-black ml-[40px] mt-[30px]">
                Top products
              </p>
              <p className=" h-[15px] text-[#858585] flex flex-row mt-[31px] mr-[56px] font-montserrat text-[12px] font-[400] leading-[14.63px]">
                May - June 2021 <IoIosArrowDown className="ml-[5px]" />
              </p>
            </div>
            <div className="flex flex-row justify-between">
              <PieChart />
              <div>
                <div className="flex flex-col">
                  <p className="flex flex-row mr-[138px] mt-[25px] font-montserrat text-[14px] font-[700] leading-[17.07px] text-black">
                    <Image
                      src="assets/db_pie_chart_assets/green_dot.svg"
                      width={11}
                      height={11}
                      className="mr-[10px]"
                    />
                    Basic Tees
                  </p>
                  <p className="ml-[21px] mb-[21px] w-[24px] h-[14px] mt-[5px] font-montserrat text-[12px] font-[400] leading-[14.4px]">
                    55%
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="flex flex-row mr-[68px] font-montserrat text-[14px] font-[700] leading-[17.07px] text-black">
                    <Image
                      src="assets/db_pie_chart_assets/yellow_dot.svg"
                      width={11}
                      height={11}
                      className="mr-[10px]"
                    />
                    Custom Short Pants
                  </p>
                  <p className="ml-[21px] mb-[21px] w-[24px] h-[14px] mt-[5px] font-montserrat text-[12px] font-[400] leading-[14.4px]">
                    31%
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="flex flex-row mr-[108px] font-montserrat text-[14px] font-[700] leading-[17.07px] text-black">
                    <Image
                      src="assets/db_pie_chart_assets/red_dot.svg"
                      width={11}
                      height={11}
                      className="mr-[10px]"
                    />
                    Super Hoodies
                  </p>
                  <p className="ml-[21px] w-[24px] h-[14px] mt-[5px] font-montserrat text-[12px] font-[400] leading-[14.4px]">
                    14%
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[480px] h-[256px] bg-white rounded-[20px]">
            <div className="flex flex-row justify-between mt-[30px] ml-[40px] mr-[30px]">
              <div className="w-[162px] h-[22px] text-black font-montserrat text-[18px] font-[700] leading-[21.94px]">
                Today's schedule
              </div>
              <div className="flex flex-row h-[15px] text-[#858585] font-montserrat text-[12px] font-[400] leading-[14.63px] mb-[25px]">
                See All <IoIosArrowForward className="" />
              </div>
            </div>
            <div>
              <div className="flex flex-row">
                <div className="h-[66px] w-[5px] bg-[#9BDD7C] ml-[40px] mr-[15px] mb-[13px]"></div>
                <div>
                  <p className="w-[236px] h-[17px] font-lato text-[14px] font-[700] leading-[16.8px] text-[#666666] mb-[5px]">
                    Meeting with suppliers from Kuta Bali
                  </p>
                  <p className="w-[66px] h-[14px] font-lato text-[12px] font-[400] leading-[14.4px] text-[#999999] mb-[5px]">
                    14.00-15.00
                  </p>
                  <p className="w-[135px] h-[14px] font-lato text-[12px] font-[400] leading-[14.4px] text-[#999999]">
                    at Sunset Road, Kuta, Bali
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="h-[66px] w-[5px] bg-[#6972C3] ml-[40px] mr-[15px]"></div>
                <div>
                  <p className="w-[236px] h-[17px] font-lato text-[14px] font-[700] leading-[16.8px] text-[#666666] mb-[5px]">
                    Check operation at Giga Factory 1
                  </p>
                  <p className="w-[66px] h-[14px] font-lato text-[12px] font-[400] leading-[14.4px] text-[#999999] mb-[5px]">
                    18.00-20.00
                  </p>
                  <p className="w-[135px] h-[14px] font-lato text-[12px] font-[400] leading-[14.4px] text-[#999999]">
                    at Central Jakarta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
