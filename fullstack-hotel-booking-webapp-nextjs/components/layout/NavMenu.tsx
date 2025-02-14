// icons
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const NavMenu = () => {
  // router
  const router = useRouter();
  const { userId } = useAuth();

  return (
    <DropdownMenu>
      {/* Responsive mobile Nav */}
      <DropdownMenuTrigger asChild>
        <Menu size={30} className="cursor-pointer md:hidden" />
      </DropdownMenuTrigger>
      {userId ? (
        <DropdownMenuContent>
          <DropdownMenuItem>Add New Hotel</DropdownMenuItem>
          <DropdownMenuItem>Book Hotel</DropdownMenuItem>
          <Separator />
          <DropdownMenuItem>See History</DropdownMenuItem>
        </DropdownMenuContent>
      ) : (
        <DropdownMenuContent>
            <DropdownMenuItem onClick={() => router.push("/sign-in")}>Sign In</DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/sign-up")}>Sign up</DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};

export default NavMenu;
