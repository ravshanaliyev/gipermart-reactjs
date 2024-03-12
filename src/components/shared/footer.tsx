import NavTop from "./nav-top"
import Logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <div className="w-full">
            <div className="w-full bg-[#F7F7F7] py-10">
                <div className="w-[1340px] mx-auto">
                    <NavTop />
                    <div className="flex justify-between items-center">
                        <img className="w-[100px]" src={Logo} alt="" />
                        <p className="text-[16px] text-right">Copyright © 2022. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer