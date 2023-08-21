import DashOptions from "./DashOptions";
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
const MobileMenu = ({ setMenu }) => {
  return (
    <div className="h-screen w-screen bg-black fixed md:hidden top-0 left-0 z-10">
      <div className="">
        <div className=" font-montserrat text-[36px] font-[700] leading-[43.88px] ml-[50px] mt-[60px]">
          Board.
        </div>
        <button
          onClick={() => {
            setMenu(false);
          }}
          className="fixed top-16 right-10 text-2xl bg-white px-2 rounded-md hover:ring-4 text-black"
        >
          x
        </button>
        <div className="flex flex-col ml-[50px] mt-[60px]">
          {Object.values(dashOptions).map((o) => {
            return <DashOptions ico={o.ico} label={o.label} focus={o.focus} />;
          })}
        </div>
        <div className="flex flex-col ml-[50px] ">
          <div className="w-[34px] h-[17px] font-montserrat text-[14px] font-[400] leading-[17.07px] mb-[20px]">
            Help
          </div>
          <div className="w-[87px] h-[17px] font-montserrat text-[14px] font-[400] leading-[17.07px]">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
