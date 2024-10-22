import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IconStyle, FooterStyle } from "./style";

export default function SocialIcons() {
    return (
        <FooterStyle>
            <IconStyle href="https://github.com/PedroAugusto2305">
                <FaGithub />
            </IconStyle>

            <IconStyle href="">
                <FaLinkedinIn />
            </IconStyle>


            <IconStyle href="">
                <FaXTwitter />
            </IconStyle>

        </FooterStyle>

    )
}