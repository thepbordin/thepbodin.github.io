import React from "react";

function Navbar() {
  return (
    <>
      <div className="m-auto my-10 flex max-w-sm flex-row justify-between text-lg">
        <span>Hello!</span>
        <span className="text-grayed">Skills</span>
        <span>Activities</span>
        <span>Contacts</span>
      </div>
    </>
  );
}

export default Navbar;
