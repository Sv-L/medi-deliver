import Container from "../../components/Container"
import IncomeExpenses from "../../components/IncomeExpenses"
import RecentCustomers from "../../components/RecentCustomers"
import Statistics from "../../components/Statistics"

const DasboardPage = () => {
    return (
        <Container>
            <Statistics />
            <RecentCustomers />
            <IncomeExpenses/>
            </Container>
    )
}

export default DasboardPage