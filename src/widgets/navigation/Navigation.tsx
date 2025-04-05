import CustomLink from "@/shared/ui/link/CustomLink";
import { Dispatch, SetStateAction } from "react";
import { navItems } from "@/shared/const/navs";

type showNav = {
  setNav: Dispatch<SetStateAction<boolean>>;
  nav: boolean;
};

const Navigation: React.FC<showNav> = () => {
  
  return (
    <nav className="text-white h-[96svh] flex flex-col justify-between p-3">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-[18px] font-bold text-[#f9f9f9]">Меню</h2>
        <article className="flex flex-col gap-y-2">
          {navItems.slice(0, 4).map((item, index) => (
            <CustomLink
              key={index}
              image={item.image}
              text={item.text}
              to={item.to}
              activeImage={item.activeImage}
            />
          ))}
        </article>
      </div>
      <div className="flex flex-col gap-y-2">
        <h2 className="text-[18px] font-bold text-[#f9f9f9]">Аккаунт</h2>
        <article className="flex flex-col gap-y-2">
          {navItems.slice(4).map((item, index) => (
            <CustomLink
              key={index}
              image={item.image}
              text={item.text}
              to={item.to}
              activeImage={item.activeImage}
            />
          ))}
        </article>
      </div>
    </nav>
  );
};

export default Navigation;
