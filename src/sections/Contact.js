import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

function Contact() {
  const Click_icon = ({ icon, url }) => {
    return (
      <a href={url} rel="noreferrer noopener" target="_blank">
        {icon}
      </a>
    );
  };
  return (
    <>
      <div className="my-10">
        <h3 className="my-5 text-2xl font-medium">My Contacts</h3>
        <a className="text-grayed" href="mailto:thepbordinjaiinsom@gmail.com">
          thepbordinjaiinsom@gmail.com
        </a>
        <div className="my-2 flex flex-row items-center justify-start gap-2 text-grayed">
          <Click_icon
            icon={<FaGithub size={30} />}
            url="https://github.com/thepbordin"
          />
          <Click_icon
            icon={<FaFacebook size={30} />}
            url="https://facebook.com/thepbordin"
          />
          <Click_icon
            icon={<FaInstagram size={30} />}
            url="https://www.instagram.com/thepbordin247/"
          />
        </div>
      </div>
    </>
  );
}

export default Contact;
