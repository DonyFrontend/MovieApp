import { useState } from "react";
import { navItems } from "@/shared/const/navs";
import CustomLink from "@/shared/ui/link/CustomLink";

const Burger_navigation = () => {
  const [state, setState] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col gap-y-2 w-[35px] cursor-pointer" onClick={() => setState(prev => !prev)}>
        <span className="bg-mainColor w-full h-[4px]"></span>
        <span className="bg-mainColor w-full h-[4px]"></span>
        <span className="bg-mainColor w-full h-[4px]"></span>
      </div>
      {state && <div onClick={() => setState(false)} className="absolute z-10 flex flex-col gap-y-2 top-0 right-0 p-4 bg-black rounded-[10px] border-[2px] border-[#F8B319]">
          {navItems.map((item, index) => <CustomLink image={item.image} text={item.text} to={item.to} activeImage={item.activeImage} key={index}/>)}
        </div>}
    </>
  );
};

export default Burger_navigation;
