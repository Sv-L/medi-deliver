import { useEffect, useState } from "react"
import { PaginationButtonsStyled } from "./PaginationButtonsStyled"
import { useDispatch} from "react-redux";
import { fetchAllcustomers } from "../../api/customers/customersApi";

const PaginationButtons = () => {
  const [activeBtn, setActiveBtn] = useState(1)
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllcustomers({ page: activeBtn }));
        
    }, [activeBtn, dispatch, fetchAllcustomers]);
    
    
    const numberOfButtons = Math.ceil(88/5);

    return (
             <PaginationButtonsStyled>
            {Array.from({ length: numberOfButtons }, (_, index) => (
                <button
                    key={index}
                    // autoFocus={index + 1 === activeBtn}
                    className={index+1 === activeBtn ? 'active' : ''}
                onClick={() => setActiveBtn(index+1)}
              ></button>
            ))}
        </PaginationButtonsStyled>
        
    )
}
export default PaginationButtons