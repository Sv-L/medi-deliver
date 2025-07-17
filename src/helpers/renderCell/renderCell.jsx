import { CellStyled } from "./renderCellStyled";

const renderCell = (row, column) => {
  switch (column) {
    case 'name':
      return renderCellNameAndAvatar(row);
    case 'register_date':
      return toLocaleDateString(row['register_date'])
    default:
      return row[column];
  }
};

const renderCellNameAndAvatar = ({image, name}) => {
      return (
        <CellStyled>
          <img src={image} alt="avatar" />
          {name}
        </CellStyled>
      );
};

 const toLocaleDateString=(date) => {
    const registerDate = new Date(date);
            const formattedDate = registerDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
    return formattedDate;
}

export default renderCell