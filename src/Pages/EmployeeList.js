import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { MRT_Localization_EN } from "material-react-table/locales/en";
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
        enableSorting: false,
      },
      {
        accessorKey: "startDate",
        header: "Start Date",
        enableSorting: false,
      },
      {
        accessorKey: "department",
        header: "department",
      },
      {
        accessorKey: "street",
        header: "Street",
        enableSorting: false,
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
        enableSorting: false,
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
        localization={MRT_Localization_EN}
        enableColumnFilters={false}       
      />
    </section>
  );
};

export default EmployeeList;
