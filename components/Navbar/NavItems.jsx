import Image from "next/image";
const NavItems = () => {
    return (
        <div className="flex cursor-pointer items-center justify-between gap-4">
            <div className="flex items-center gap-2">
                <Image alt="Icon" src="/images/inbox.svg" width="20" height="20"/>
                <p className="text-[12px] font-medium">Inbox</p>
            </div>
            <p className="text-[10px] font-extrabold text-[#2563EB] rounded-full bg-[#3B82F6]/10 px-[8px] py-[4px]">
                4
            </p>
        </div>
    );
}

export default NavItems;