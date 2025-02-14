'use client'

import { usePathname } from "next/navigation"
import { Input } from "./ui/input"
// icon
import { Search } from "lucide-react"

const SearchInput = () => {
  // pathname
  const pathname = usePathname();
  return (
    <>
   {(pathname !== "/sign-in" && pathname !== "/sign-up") && <div className="items-center relative hidden sm:flex">
      <Search size={24} className="absolute left-2 text-gray-600 dark:text-zinc-400" />
      <Input type="text" placeholder="Search..." className="pl-10 bg-primary/10"/>
      </div>}
      </>
  )
}

export default SearchInput