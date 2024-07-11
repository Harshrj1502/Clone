import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaArrowRight } from "react-icons/fa6";
import { BiLogoMastercard } from "react-icons/bi";
import Card from "../../components/Card/Card";
import Help from "../../components/Help/Help";

const Home = () => {
  return (
    <div  >
      <Navbar />
      <main className="bg-secondary flex flex-col gap-9 p-24 outline-none h-[400px]">
        <h1 className="text-7xl mx-auto">How can we help?</h1>
        <div className=" flex justify-between items-center bg-white input-search p-3 outline-none border-[1px] border-black w-[55%] h-[65px] hover:border-primary mx-auto rounded-md">
          <input
            type="text"
            placeholder="Search"
            className="h-[90%] w-[80%] outline-none"
          />
          <FaArrowRight
            size={20}
            className="cursor-pointer hover:text-primary"
          />
        </div>
      </main>
      <div className="grid grid-cols-2 h-[950px] items-center">
        <Card
          title="Using Abstract"
          logolink={
            "https://help.abstract.com/hc/theming_assets/01HZH4D4GACXWCRKK6JHQ730XD"
          }
          content="Abstract lets you manage, version, and document your designs in one place."
          link="Learn More"
        />
        <Card
          title="Manage your account"
          logolink={
            "https://help.abstract.com/hc/theming_assets/01HZH4D45NKFCN3388ZCBJB878"
          }
          content="Configure your account settings, such as your email, profile details, and password."
          link="Learn More"
        />
        <Card
          title="Manage organizations, teams, and projects"
          logolink={
            "https://help.abstract.com/hc/theming_assets/01HZH4D3M8CRR0C2V5GREVR6HK"
          }
          content="Abstract lets you manage, version, and document your designs in one place."
          link="Learn More"
        />
        <Card
          title="Manage billing "
          logolink={
            "https://help.abstract.com/hc/theming_assets/01HZH4D38K1S1M9WKWSQZE62YE"
          }
          content="Change subscriptions and payment details."
          link="Learn More"
        />
        <Card
          title="Authenticate to Abstract"
          logolink={
            "https://help.abstract.com/hc/theming_assets/01HZH4D3S3QY5190TZE3H8ZSVK"
          }
          content="Set up and configure SSO, SCIM, and Just-in-Time provisioning."
          link="Learn More"
        />
        <Card
          title="Abstract support"
          logolink={
            "https://help.abstract.com/hc/theming_assets/01HZH4D3G4S2K93BN3WJPT8600"
          }
          content="Get in touch with a human."
          link="Learn More"
        />
      </div>
      <footer className="flex justify-between bg-black p-10 h-[400px] outline-none">
        <div className="flex justify-around gap-8 text-white p-8">
          <div className="">
            <h1 className="py-3 text-xl">Abstract</h1>
            <ul>
              <li className=" hover:underline text-sm">Start Trial</li>
              <li className=" hover:underline text-sm">Pricing</li>
              <li className=" hover:underline text-sm">Download</li>
            </ul>
          </div>
          <div>
            <h1 className="py-3 text-xl">Resources</h1>
            <ul>
              <li className="hover:underline text-sm">Blog</li>
              <li className="hover:underline text-sm">Help Center</li>
              <li className="hover:underline text-sm">Release Notes</li>
              <li className="hover:underline text-sm">Status</li>
            </ul>
          </div>
          <div>
            <h1 className="py-3 text-xl">Community</h1>
            <ul>
              <li className="hover:underline text-sm">Twitter</li>
              <li className="hover:underline text-sm">Linnked In</li>
              <li className="hover:underline text-sm">Facebook</li>
              <li className="hover:underline text-sm">Dribbble</li>
              <li className="hover:underline text-sm">Podcast</li>
            </ul>
          </div>
          <div>
            <h1 className="py-3 text-xl">Company</h1>
            <ul>
              <li className="hover:underline text-sm">About Us</li>
              <li className="hover:underline text-sm">Careers</li>
              <li className="hover:underline text-sm">Legals</li>
            </ul>
            <h6 className="py-3 text-lg">Contact us</h6>
            <ul>
              <li className="hover:underline text-sm">info@abstract.com</li>
            </ul>
          </div>
        </div>
        <div className="text-white flex flex-col justify-end p-8 gap-2">
          <BiLogoMastercard size={50} />
          <h1 className="text-lg">Copyright 2023</h1>
          <h1 className="text-lg">Abstract Studio Design, Inc.</h1>
          <h1 className="text-lg">All rights reserved</h1>
        </div>
       
      </footer>
      <div className="">
      <Help/>
      </div>
    </div>
  );
};

export default Home;
