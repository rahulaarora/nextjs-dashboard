import Image from "next/image";
const NavHead = (props) => {

    function navToggleHandler() {
        if (window.innerWidth > 1024) return;
        props.setNavToggle(() => (!props.navToggle))
    }

    return (
        <div className="flex items-center justify-between border-b-[1px] border-[#E9EBF0] py-[30px] px-[32px]">
            <p className="text-xl font-bold leading-7 text-[#1F2633]">
                Dashboard
            </p>
            <Image alt="arrow" src="/images/menu_open.svg" width="20" height="20" className="cursor-pointer" onClick={navToggleHandler} />
        </div>
    );
}

export default NavHead;