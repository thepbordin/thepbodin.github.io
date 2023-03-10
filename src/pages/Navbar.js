import React from "react";

function Navbar() {
  return (
    <>
      <div className="m-auto my-10 lg:my-20 flex max-w-sm flex-row item-center justify-between text-center text-lg opacity-0 lg:opacity-100">
        <span>Hello!</span>
        <span className="text-grayed">Skills</span>
        <span>Activities</span>
        <span>Contacts</span>
      </div>
    </>
  );
}

export default Navbar;
