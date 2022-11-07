import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { Employee } from "../Mocked/MockedData";

const EmployeeList = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
      },
      {
        accessorKey: "dateOfBirth",
        header: "Date of Birth",
      },
      {
        accessorKey: "startDate",
        header: "Start Date",
      },
      {
        accessorKey: "department",
        header: "department",
      },
      {
        accessorKey: "street",
        header: "Street",
      },
      {
        accessorKey: "city",
        header: "City",
      },
      {
        accessorKey: "state",
        header: "State",
      },
      {
        accessorKey: "zipCode",
        header: "ZipCode",
      },
    ],
    []
  );

  return (
    <section className="table_wrapper">      
      <MaterialReactTable
        columns={columns}
        data={Employee}
        enableColumnActions={false}
        enableColumnFilters={false}
        enablePagination={false}
        enableSorting={false}
        enableBottomToolbar={false}
        enableTopToolbar={false}
        muiTableBodyRowProps={{ hover: false }}
      />
    </section>
  );
};

export default EmployeeList;
