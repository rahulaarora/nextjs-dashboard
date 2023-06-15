import Image from "next/image";
import NavItem from "./NavItem";
const NavList = (props) => {
    return (
        <div className="border-b-[1px] border-[#E9EBF0] py-8">
            <div className="mb-7 flex items-center justify-between">
                <p className="text-[12px] font-bold uppercase text-[#98A2B2]">{props.heading}</p>
                <Image alt="Icon" src="/images/expand_less.svg" width="20" height="20" className="cursor-pointer" />
            </div>
            <div className="flex flex-col gap-5 mb-">
                {
                    props.list.map((item, index) => (
                        <NavItem key={index} name={item.name} count={item.count} icon={item.icon}/>
                    ))
                }
            </div>
        </div>
    );
}

export default NavList;