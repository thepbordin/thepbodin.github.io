import React from "react";
import { useState } from "react";
function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed inset-1/2 z-[9999] w-[70%] h-auto -translate-x-1/2 -translate-y-1/2 bg-white rounded-[30px] p-10">
        <h3 className="">This is Popupo</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          molestias laborum provident reprehenderit vero dolorum, iure, incidunt
          id porro assumenda autem pariatur. Dignissimos dicta error velit vitae
          corporis id? Reprehenderit. Quas eum neque officiis ipsam recusandae
          explicabo? Voluptatibus, voluptatum aliquam officia non vitae optio
          similique nam odit maiores labore fugiat quam debitis nisi tempore
          aperiam aspernatur odio? Alias, ab quas. Blanditiis, vero. Minima
          quaerat asperiores ducimus iste eveniet. Nihil rem, ex non voluptatem
          ad eum dolor deleniti dolore id ducimus odio enim debitis! Assumenda
          nisi, eius ex blanditiis optio voluptates!
        </p>
      </div>
      <div className="fixed h-full w-full bg-black opacity-30 z-[9998]"></div>
    </>
  );
}

export default Popup;
