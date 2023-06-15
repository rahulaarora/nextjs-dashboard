import Image from "next/image";
const ControlView = () => {
    return (
        <div className="flex flex-col items-center justify-between gap-3 px-[16px] pb-[28px] md:px-[36px] xl:flex-row">

            <div className="flex w-full flex-wrap items-center justify-between gap-2 xl:w-auto xl:gap-4"><div className="grid grid-cols-2 gap-2 rounded-lg bg-white drop-shadow-sm">
                <div className="flex cursor-pointer items-center gap-2 rounded-l-lg border-r-[1px] border-[#EBEEF2] bg-[#FAFBFC] p-[8px]">
                    <Image alt="Icon" src="/images/dashboard.svg" width="20" height="20" />
                    <p className="text-[12px] font-semibold text-[#606C80]">Board View</p></div><div className="flex cursor-pointer items-center gap-2 p-[8px]">
                    <Image alt="Icon" src="/images/hamburger.svg" width="20" height="20" />
                    <p className="text-[12px] font-semibold text-[#606C80]">Board View</p>
                </div></div>
                <div className="hidden h-8 w-[1px] bg-[#EBEEF2] xl:block"></div><div className="flex cursor-pointer items-center gap-2">
                    <Image alt="Icon" src="/images/lock.svg" width="20" height="20" />
                    <p className="text-[12px] font-semibold text-[#98A2B2]">Limited Access</p>
                    <Image alt="Icon" src="/images/keyboard_arrow_down.svg" width="20" height="20" />
                </div><div className="hidden h-8 w-[1px] bg-[#EBEEF2] xl:block"></div><div className="flex items-center gap-2"><p className="cursor-pointer text-[12px] font-semibold text-[#98A2B2]">Owners</p>
                    <Image alt="Icon" src="/images/twitter.svg" width="30" height="30" className="cursor-pointer" />
                    <p className="cursor-pointer text-[12px] font-semibold text-[#606C80]">Twitter Team</p>
                </div>
            </div>

            <div className="flex w-full max-w-[300px] items-center gap-3 self-start rounded-md border-[1px] border-[#EBEEF2] bg-white py-[8px] pl-[8px] pr-8 xl:w-auto">
                <Image alt="icon" src="/images/search.svg" width="20" height="20" />
                <p className="text-[12px] font-semibold text-[#98A2B2]">
                    Search Tasks
                </p>
            </div>

            <div className="flex gap-2 self-start">
                <div className="rounded-lg bg-white p-2 drop-shadow-sm">
                    <Image alt="Icon" src="/images/select_file.svg" width="20" height="20" className="cursor-pointer" />
                </div>
                <div className="rounded-lg bg-white p-2 drop-shadow-sm">
                    <Image alt="Icon" src="/images/center_align.svg" width="20" height="20" className="cursor-pointer" />
                </div>
                <div className="rounded-lg bg-white p-2 drop-shadow-sm">
                    <Image alt="Icon" src="/images/left_align.svg" width="20" height="20" className="cursor-pointer" />
                </div>
                <div className="rounded-lg bg-white p-2 drop-shadow-sm">
                    <Image alt="Icon" src="/images/shape_circles.svg" width="20" height="20" className="cursor-pointer" />
                </div>
                <div className="rounded-lg bg-white p-2 drop-shadow-sm">
                    <Image alt="Icon" src="/images/customize_arrangement.svg" width="20" height="20" className="cursor-pointer" />
                </div>
            </div>

        </div>
    );
}

export default ControlView;