import React from "react";

const Footer = () => {
  return (
    <div className="bg-white ">
      <footer className=" container mx-auto footer sm:footer-horizontal  text-neutral-content items-center p-4">
        <aside className="text-gray-600 flex items-center text-black ">
          <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
        </aside>
        <nav className=" text-gray-600 flex flex md:place-self-center md:justify-self-end">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
