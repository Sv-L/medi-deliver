import { TableStyled } from './TableStyled';

const Table = ({ caption, tableSchemas, data, columnsTitel=true, styles}) => {
  return (
    <TableStyled>
      <table>
        {caption&&<caption>{caption}</caption>}
        {columnsTitel&&<thead>
          <tr>
            {tableSchemas.map((column, index) => (
              <th key={index}>{Object.keys(column)[0]}</th>
            ))}
          </tr>
        </thead>}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {tableSchemas.map((column, colIndex) => {
                const keyValue = Object.values(column)[0];
                const isImage = Array.isArray(keyValue) && keyValue[1]?.img;

                let style;
                if (styles) {
                  style = styles(row,colIndex)
                }

                return (
                  <td key={colIndex} style={style}>
                    {isImage ? (
                      <>
                        <img src={row[keyValue[1].img]} alt="avatar" />
                        {row[keyValue[0]]}
                      </>
                    ) : (
                      row[keyValue]
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </TableStyled>
  );
};

export default Table;
