import IncomeExpenses from "../../components/IncomeExpenses"
import RecentCustomers from "../../components/RecentCustomers"
import Statistics from "../../components/Statistics"


const DasboardPage = () => {

    return (
        <>
            <Statistics />
            <RecentCustomers />
            <IncomeExpenses/>
            </>
    )
}

export default DasboardPage