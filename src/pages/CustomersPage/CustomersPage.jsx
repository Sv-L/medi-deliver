import Container from "../../components/Container"
import CustomersData from "../../components/CustomersData"
import Filter from "../../components/Filter/Filter"
import PaginationButtons from "../../components/PaginationButtons"



const CustomersPage = () => {
    return (
        <Container>
            <Filter placeholder={"User Name"} />
                <CustomersData />
                <PaginationButtons />
            </Container>
    )
}

export default CustomersPage