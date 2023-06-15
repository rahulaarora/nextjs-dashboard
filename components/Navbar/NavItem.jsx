import Image from "next/image";
const NavItem = ({name, count, icon}) => {
    return (
        <div className="flex cursor-pointer items-center justify-between gap-4">
            <div className="flex items-center gap-2">
                <Image alt="Icon" src={icon} width="20" height="20"/>
                <p className="text-[12px] font-medium">{name}</p>
            </div>
            {count > 0 ? <p className="text-[10px] font-extrabold text-[#2563EB] rounded-full bg-[#3B82F6]/10 px-[8px] py-[4px]">
                {count}
            </p>: " "}
        </div>
    );
}

export default NavItem;