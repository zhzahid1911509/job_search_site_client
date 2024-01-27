import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex flex-col gap-4 sm:flex-row justify-around items-center p-4 mt-4 bg-[#003399] text-white bottom-0 mx-auto">
           <div>
            &copy;2024 Zahid. All rights reserved.
           </div>
           <div className="flex gap-4 text-xl">
            <p><FaFacebookSquare /></p>
            <p><FaTwitterSquare/></p>
            <p><FaInstagramSquare/></p>
            <p><FaLinkedin/></p>
           </div> 
        </div>
    );
};

export default Footer;