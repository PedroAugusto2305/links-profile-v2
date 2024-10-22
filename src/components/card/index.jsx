import Avatar from "../avatar"
import Button from "../button"
import Description from "../description"
import SocialIcons from "../icons"
import Title from "../title"
import CardStyle from "./style"

export default function Card() {
    return (
        <CardStyle>
            <Avatar />
            <Title />
            <Description />
            <Button />
            <SocialIcons />
        </CardStyle>
    )
}