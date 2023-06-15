import NavHead from "./NavHead";
import NavList from "./NavList";
import User from "./User";

const Navbar = (props) => {
    const dashboardItems = [
        {
            name: "Inbox",
            count: 4,
            icon: "/images/inbox.svg",
        },
        {
            name: "Drive Files",
            count: 100,
            icon: "/images/drive_folder_upload.svg",
        },
        {
            name: "Boards",
            count: 0,
            icon: "/images/dashboard_customize.svg",
        },
        {
            name: "Updates",
            count: 50,
            icon: "/images/access_time.svg",
        },
        {
            name: "Analytics",
            count: 10,
            icon: "/images/data_usage.svg",
        },
        {
            name: "CRM Dashboard",
            count: 0,
            icon: "/images/space_dashboard.svg",
        },
        {
            name: "Ecommerce",
            count: 0,
            icon: "/images/sell.svg",
        },
        {
            name: "Cryptocurrency",
            count: 0,
            icon: "/images/payment.svg",
        },
        {
            name: "Projects",
            count: 9,
            icon: "/images/lock_clock.svg",
        },
        {
            name: "NFT Marketplace",
            count: 0,
            icon: "/images/image_search.svg",
        },
        {
            name: "Settings",
            count: 47,
            icon: "/images/tune.svg",
        },
        
    ]

    const projectsItems = [
        {
            name: "Additional Calendar",
            count: 4,
            icon: "/images/tag.svg",
        },
        {
            name: "Brand Logo Design",
            count: 10,
            icon: "/images/tag.svg",
        },
        {
            name: "User Research",
            count: 2,
            icon: "/images/tag.svg",
        },
        {
            name: "Marketing Sales",
            count: 50,
            icon: "/images/tag.svg",
        },
        {
            name: "New Project Template",
            count: 10,
            icon: "/images/tag.svg",
        },
        {
            name: "Add New Project",
            count: 0,
            icon: "/images/add_circle.svg",
        },
        
    ]
    return (
        <nav className="border-e border-[#E9EBF0] min-w-[250px]">
            <NavHead navToggle={props.navToggle} setNavToggle={props.setNavToggle}/>
            <User />
            {props.navToggle &&
                <div className="px-8">
                    <NavList heading="DASHBOARDS" list = {dashboardItems}/>
                    <NavList heading="PROJECTS" list = {projectsItems}/>
                </div>
            }
            <div className="px-8 hidden lg:block">
                    <NavList heading="DASHBOARDS" list = {dashboardItems}/>
                    <NavList heading="PROJECTS" list = {projectsItems}/>
                </div>
        </nav>
    );
}

export default Navbar;