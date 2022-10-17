import { styled } from "../stitches.config";

const FooterRoot = styled("footer", {
    width: "100%",

    backgroundColor: "$gray100",
    paddingBlock: "$spacer-10"
})

const LimitWidth = styled("div", {
    width: "100%",
    limitWidth: "1100px",

    flexCenter: "column",
    gap: "$spacer-6",
})

const Paragraph = styled("p", {
    fontSize: "$xl",
    fontFamily: "$default",
})

const PlaceholderBlock = styled("div", {
    width: "100%",
    backgroundColor: "$gray300",
    borderRadius: "$brSm",
})

const PostsSection = styled("div", {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "$spacer-3",
})

export function Footer() {
    return (
        <FooterRoot>
            <LimitWidth>
                <PostsSection>
                    <Paragraph>POSTS MAIS RECENTES</Paragraph>
                    <div style={{
                        width: "100%",
                        height: "80px",
                        gap: "2rem",
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                        <PlaceholderBlock></PlaceholderBlock>
                        <PlaceholderBlock></PlaceholderBlock>
                        <PlaceholderBlock></PlaceholderBlock>
                        <PlaceholderBlock></PlaceholderBlock>
                    </div>
                </PostsSection>
                
                <Paragraph css={{ textAlign: "center" }}>
                    © 2022 <a href="#">Thiago Thalisson </a>E <a href="https://github.com/VitorGouveia">Vitor Gouveia</a>
                </Paragraph>
            </LimitWidth>
        </FooterRoot>
    )
}