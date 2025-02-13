import React from 'react'

const ClerkLayout = ({children}:  {children: React.ReactNode}) => {

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {children}
    </div>
  );
}

export default ClerkLayout