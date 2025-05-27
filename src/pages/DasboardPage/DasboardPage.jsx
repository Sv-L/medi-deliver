import Container from "../../components/Container"
import RecentCustomers from "../../components/RecentCustomers"
import Statistics from "../../components/Statistics/Statistics"

const DasboardPage = () => {
    return (
        <Container>
            <Statistics />
            <RecentCustomers/>
            </Container>
    )
}

export default DasboardPage