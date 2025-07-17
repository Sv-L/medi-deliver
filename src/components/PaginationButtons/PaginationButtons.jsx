import { useEffect} from 'react';
import { PaginationButtonsStyled } from './PaginationButtonsStyled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/filter/filterSelector';

const PaginationButtons = ({activeBtn, setActiveBtn, buttonCount, fetch}) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);


  useEffect(() => {
    dispatch(fetch({ page: activeBtn, name: filter }));
  }, [activeBtn, dispatch, fetch]);

  return (
    <PaginationButtonsStyled>
      {Array.from({ length: buttonCount }, (_, index) => (
        <button
          key={index}
          className={index + 1 === activeBtn ? 'active' : ''}
          onClick={() => setActiveBtn(index + 1)}
        ></button>
      ))}
    </PaginationButtonsStyled>
  );
};
export default PaginationButtons;
