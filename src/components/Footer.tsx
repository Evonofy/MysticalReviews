import { styled } from "../stitches.config";

const FooterRoot = styled("footer", {
    width: "100%",
    backgroundColor: "$accentBase",
})

const LimitWidth = styled("div", {
    limitWidth: "1100px"
})

const Paragraph = styled("p", {
    fontSize: "$xl"
})

export function Footer() {
    return (
        <FooterRoot>
            <LimitWidth>
                <Paragraph>Coloque O Seu Post Aqui</Paragraph>
            </LimitWidth>
        </FooterRoot>
    )
}