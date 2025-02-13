"use client";

import { useAuth, UserButton } from "@clerk/nextjs";
import Container from "../Container";

// logo
import Image from "next/image";
import Link from "next/link";

// auth
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

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
          <Link href={"/"} className="flex flex-grow items-center gap-1">
            <Image src={"/logo.png"} alt="logo" width={32} height={32} />
            <h1 className="font-bold text-xl text-blue-900">StayNEnjoy</h1>
                  </Link>
                  
                  {/* Middle Searchbar - Section */}
                  

          {/* 2nd - Section */}
          <div className="flex gap-x-3 items-center">
            {/* Theme - Section */}
            <div>Theme</div>

            {/* Login States - Section */}
            {!userId ? (
              <>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  onClick={() => router.push("/sign-in")}
                >
                  Sign in
                </Button>
                <Button size={"sm"} onClick={() => router.push("/sign-up")}>
                  Sign up
                </Button>
              </>
            ) : (
              <UserButton afterSwitchSessionUrl="/" />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
