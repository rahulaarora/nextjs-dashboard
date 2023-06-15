import NavHead from "./NavHead";
import NavList from "./NavList";
import User from "./User";

const Navbar = (props) => {
    return (
        <nav className="border-e border-[#E9EBF0] min-w-[250px]">
            <NavHead navToggle={props.navToggle} setNavToggle={props.setNavToggle}/>
            <User />
            {props.navToggle &&
                <div className="px-8">
                    <NavList heading="DASHBOARDS" />
                    <NavList heading="PROJECTS" />
                </div>
            }
            <div className="px-8 hidden lg:block">
                    <NavList heading="DASHBOARDS" />
                    <NavList heading="PROJECTS" />
                </div>
        </nav>
    );
}

export default Navbar;