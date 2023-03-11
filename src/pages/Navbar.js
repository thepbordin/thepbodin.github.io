import React from "react";

function Navbar() {
  return (
    <>
      <div className="m-auto my-10 lg:my-20 flex max-w-sm flex-row item-center justify-between text-center text-lg opacity-0 lg:opacity-100">
        <a href="#">Hello!</a>
        <a href="#skills" className="text-grayed">Skills</a>
        <a href="#activities">Activities</a>
        <a href="#contacts">Contacts</a>
      </div>
    </>
  );
}

export default Navbar;
