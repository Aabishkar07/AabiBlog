//React-Table

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTable } from "react-table";
const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const countryload = async () => {
    try {
      const response = await axios.get(
        "https://api.devsrvofads.com/api/countries"
      );
      console.log(response.data.data);
      setCountries(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    countryload();
  }, []);
  const data = React.useMemo(() => countries, [countries]);
  const columns = React.useMemo(
    () => [
      {
        Header: "id",
        accessor: "id",
      },
      {
        Header: "label",
        accessor: "label",
      },
   
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()} style={{ border: "solid 1px blue", }}>
    <thead >
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th
              {...column.getHeaderProps()}
              style={{
                borderBottom: "solid 3px red",
                background: "aliceblue",
                color: "black",
                fontWeight: "bold",
              }}
            >
              {column.render("Header")}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell) => {
              return (
                <td
                  {...cell.getCellProps()}
                  style={{
                    padding: "10px",
                    border: "solid 1px gray",
                    background: "papayawhip",
                  }}
                >
                  {cell.render("Cell")}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  </table>

//  <div className="container"style={{paddingLeft:"150px"}}>
// <h1 className="text-center pt-5">List of Countries</h1>
// <table className="ms-5 ps-5">
//   <thead>
//     <tr>
//       <th>ID</th>
//       <th className="ps-4">Label</th>
//     </tr>
//   </thead>
//   <tbody>
//     {countries.map((country) => (
//       <tr>
//         <td>{country.id}</td>
//         <td className="ps-4">{country.label}</td>
//       </tr>
//     ))}
//   </tbody>
// </table>
// </div>
);
}; 

export default CountryList;
