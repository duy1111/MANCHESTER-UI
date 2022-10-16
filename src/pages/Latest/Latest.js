//import Container from "~/layouts/components/Container";
import ContainerLatest from "~/layouts/components/ContainerLatest";

function Latest({ children }) {
    return (
        <ContainerLatest >
                    <div >{children}</div>
        </ContainerLatest>
    );
}

export default Latest;