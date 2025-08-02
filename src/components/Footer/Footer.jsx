import { logo } from "../../assets";

const Footer = () => {
  return (
    <>
      <div className="flex justify-evenly align-center relative  sm:px-16 px-6 sm:py-12 py-10 min-h-[250px] mt-20 select-none">
        <div className="flex  flex-col items-center">
          <img src={logo} alt="logo" className="w-36  mb-5" />

          <p className="text-secondary text-[17px] leading-[30px] text-center   left-0 right-0 cle">
            Thank you for visiting on {new Date().getFullYear()} ! Feel free to
            connect and explore more. Looking forward to collaborating with you!
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
