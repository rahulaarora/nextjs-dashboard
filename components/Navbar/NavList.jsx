import Image from "next/image";
import NavItems from "./NavItems";
const NavList = (props) => {
    const navItems = [
        {
            name: "Overview"
        },
        {
            name: "Overview"
        },
        {
            name: "Overview"
        },
        {
            name: "Overview"
        },
        {
            name: "Overview"
        }
    ]
    return (
        <div className="border-b-[1px] border-[#E9EBF0] py-8">
            <div className="mb-7 flex items-center justify-between">
                <p className="text-[12px] font-bold uppercase text-[#98A2B2]">{props.heading}</p>
                <Image alt="Icon" src="/images/expand_less.svg" width="20" height="20" className="cursor-pointer" />
            </div>
            <div className="flex flex-col gap-5 mb-">
                {
                    navItems.map((item, index) => (
                        <NavItems key={index} name={item.name} />
                    ))
                }
            </div>
        </div>
    );
}

export default NavList;