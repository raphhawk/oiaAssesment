import Login from "@/components/Login";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col md:h-[1024px]">
      <div className="lg:w-[588px] font-bold text-center my-auto">
        <p className="w-[246px] h-[88px] mx-auto font-montserrat text-[72px] font-[700] leading-[87.77px]">
          Board.
        </p>
      </div>
      <div className="md:w-[852px] w-screen bg-[#f5f5f5] text-black">
        <Login className="" />
      </div>
    </div>
  );
}
