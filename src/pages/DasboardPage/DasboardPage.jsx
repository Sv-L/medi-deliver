import { useEffect } from "react"
import Container from "../../components/Container"
import IncomeExpenses from "../../components/IncomeExpenses"
import RecentCustomers from "../../components/RecentCustomers"
import Statistics from "../../components/Statistics"
import { useDispatch } from "react-redux"
import { fetchAllcustomers } from "../../api/customers/customersApi"

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