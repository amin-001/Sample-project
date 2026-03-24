import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ThemeBtn } from "./themebtn";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center gap-4 p-2">
      <div>logo</div>

      <NavigationMenu>
        <NavigationMenuList className="text-sm">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/students">Students</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <ThemeBtn/>
    </div>
  );
}
