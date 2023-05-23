'use client'

import { signOut } from "next-auth/react";

const People = () => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default People;
