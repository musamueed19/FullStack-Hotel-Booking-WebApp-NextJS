'use client'

import { UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
      <div>
          
          <UserButton afterSwitchSessionUrl="/" />
    </div>
  )
}

export default Navbar