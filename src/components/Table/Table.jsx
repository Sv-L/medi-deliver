import Button from '../Button/Button';
import { TableStyled } from './TableStyled';

const Table = ({
  caption,
  tableSchemas,
  data,
  columnsTitel = true,
  styles,
}) => {
  return (
    <TableStyled>
      <table>
        {caption && <caption>{caption}</caption>}
        {columnsTitel && (
          <thead>
            <tr>
              {tableSchemas.map((column, index) => (
                <th key={index}>{Object.keys(column)[0]}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {tableSchemas.map((column, colIndex) => {
                const keyValue = Object.values(column)[0];
                const valueType = typeof keyValue;
                let btns = [];
                let img;
                let style;

                if (styles) {
                  style = styles(row, colIndex);
                }

                if (valueType === 'object') {
                  const isArray = Array.isArray(keyValue);
                  const tegName = Object.keys(keyValue)[0];
                  if (tegName === 'button') {
                    btns = Object.values(keyValue)[0];
                  }

                  if (isArray) {
                    keyValue.forEach(value => {
                      const key = Object.keys(value)[0];
                      if (key === 'button') {
                        btns.push(Object.values(value)[0]);
                      } else if (key === 'img') {
                        img = Object.values(value)[0];
                      }
                    });
                  }
                }

                return (
                  <td key={colIndex} style={style}>
                    {img ? (
                      <>
                        <img src={row[img]} alt="avatar" />
                        {row[keyValue[0]]}
                      </>
                    ) : btns.length > 0 ? (
                      <div>
                        {btns.map(btn => (
                          <Button
                            key={`${colIndex}-${rowIndex}-${btn.name}`}
                            className={btn.name}
                            onClick={() => {
                              btn.onClick(row);
                            }}
                            children={btn.icon}
                            label={btn.label}
                          />
                        ))}
                      </div>
                    ) : (
                      <>{row[keyValue]}</>
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
