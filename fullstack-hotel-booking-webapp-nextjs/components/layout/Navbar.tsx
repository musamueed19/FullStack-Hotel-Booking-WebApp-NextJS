"use client";

import { useAuth, UserButton } from "@clerk/nextjs";
import Container from "../Container";

// logo
import Image from "next/image";
import Link from "next/link";

// auth
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

// searchbar
import SearchInput from "../SearchInput";

// mobile nav
import { ModeToggle } from "../theme-toogle";
import NavMenu from "./NavMenu";

const Navbar = () => {
  //
  const { userId } = useAuth();

  // router
  const router = useRouter();

  console.log("User ID:", userId);

  return (
    <header className="sticky top-0 border border-b-primary/10 bg-secondary w-full">
      {/* Container for navbar */}
      <Container>
        {/* Flex COntainer */}
        <div className="flex justify-between items-center">
          {/* Logo - Section */}
          <Link href={"/"} className="w-fit flex items-center gap-1">
            <Image src={"/logo.png"} alt="logo" width={32} height={32} />
            <h1 className="font-bold text-xl text-blue-900 dark:text-blue-700">
              StayNEnjoy
            </h1>
          </Link>

          {/* Middle Searchbar - Section */}
          <SearchInput />

          {/* 2nd - Section */}
          <div className="flex gap-x-3 items-center">
            {/* Theme - Section */}
            <ModeToggle />

            {/* Login States - Section */}
            {userId && <UserButton afterSwitchSessionUrl="/" />}
            {!userId && (
              <div className="hidden md:flex gap-x-3">
                <Button
                  variant={"outline"}
                  size={"sm"} className="px-[3rem] py-4"
                  onClick={() => router.push("/sign-in")}
                >
                  Sign In
                </Button>
                <Button size={"sm"} className="px-[3rem] py-4" onClick={() => router.push("/sign-up")}>
                  Sign Up
                </Button>
              </div>
              )}
          {/* Responsive mobile Nav - Nav Menu*/}
          <NavMenu />
          </div>

        </div>
      </Container>
    </header>
  );
};

export default Navbar;
