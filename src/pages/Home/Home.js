import Container from "~/layouts/components/Container";

function Home({ children }) {
    return ( 
        <Container >
                    <div >{children}</div>
        </Container>
    )
}

export default Home;