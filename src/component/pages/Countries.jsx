import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useTable, usePagination, useFilters } from "react-table";
import { CSVLink } from "react-csv";

const CountryList = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  // const [csvData, setCsvData] = useState([]);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Label",
        accessor: "label",
      },
    ],
    []
  );

  const countryLoad = async () => {
    try {
      const response = await axios.get(
        "https://api.devsrvofads.com/api/countries"
      );
      setCountries(response.data.data);
      // setCsvData(response.data.data.map(({ id, label }) => ({ id, label })));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    countryLoad();
  }, []);

  const data = useMemo(() => {
    return countries.filter((country) =>
      country.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [countries, search]);
  // console.log(data)

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    pageOptions,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state,
    setFilter,
  } = tableInstance;
  const { pageIndex, pageSize } = state;

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setFilter("label", value);
  };

  return (
    <div className="container" style={{ paddingLeft: "150px" }}>
      <h3 className=" pt-5 mt-2">CountryList</h3>
      <hr/>
      <div className="row mt-4">
      <div className="col-md-6">
      
      <input
        type="text"
        className="form-control form-control-light mb-2 w-75 "
        placeholder="Search..."
        onChange={handleSearchChange}
        value={search}
      />
      </div>
      <div className="col-md-6 d-flex justify-content-end">
      <CSVLink data={data} filename={"countries.csv"} className="btn btn-danger mb-2 ms-2 ">
      Export CSV
    </CSVLink>
    </div>
      </div>
    
      <table className="mt-3 ps-5 table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr className="text-center bg-success text-light" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th style={{ border: "1px solid black" }} className="p-3" {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr className="text-center" style={{ border: "1px solid black"}} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td style={{ border: "1px solid black" }} className="ps-3 " {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination pt-3  ps-3 d-flex justify-content-center">
        <button className="btn btn-success mb-2" onClick={() => previousPage()} disabled={!canPreviousPage}>
          Prev
        </button>
        <span>
          <strong className=" p-2 ">
            {pageIndex + 1} of {pageOptions.length}
          </strong>

        </span>
        <button className="btn btn-success mb-2" onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CountryList;
