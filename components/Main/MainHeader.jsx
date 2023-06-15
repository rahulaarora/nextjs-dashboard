import Image from "next/image";
import Avatar from "../Common/Avatar";
const MainHeader = () => {
    return (
        <div className="hidden items-center justify-between border-b-[1px] border-[#E9EBF0] px-[36px] py-[21px] xl:flex">
            <div className="flex gap-[32px]">
                <div className="flex min-w-[200px] justify-between rounded-md border-[1px] border-[#EBEEF2] bg-white p-[12px] drop-shadow-sm"><div className="flex items-center gap-3">
                    <Image alt="icon" src="/images/search.svg" width="20" height="20" />
                    <p className="cursor-pointer text-[12px] font-semibold text-[#98A2B2]">Search Tasks</p>
                </div>
                    <Image alt="icon" src="/images/input.svg" width="20" height="20" />
                </div>
                <Image alt="Icon" src="/images/keyboard_voice.svg" width="20" height="20" className="cursor-pointer" />
            </div>

            <div className="flex gap-[32px]"><p className="text-[11px] font-semibold text-black cursor-pointer">Dashboard</p><p className="text-[11px] font-semibold text-[#7A8699] cursor-pointer">My Tasks</p><p className="text-[11px] font-semibold text-[#7A8699] cursor-pointer">Reporting</p><p className="text-[11px] font-semibold text-[#7A8699] cursor-pointer">Portfolios</p><p className="text-[11px] font-semibold text-[#7A8699] cursor-pointer">Goals</p></div>

            <div className="flex items-center gap-3">
                <Image alt="Icon" src="/images/folder_open.svg" width="20" height="20" className="cursor-pointer" />
                <Image alt="Icon" src="/images/notifications_none.svg" width="20" height="20" className="cursor-pointer" />
                <Avatar />
            </div>
        </div>
    );
}

export default MainHeader;