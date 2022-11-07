import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import { Employee } from "../Mocked/MockedData";

const data = [
  {
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Joe",
      lastName: "Doe",
    },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Kevin",
      lastName: "Vandy",
    },
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
];

const EmployeeList = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName", //access nested data with dot notation
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
        header: "Start Date"
      },
      {
        accessorKey: 'departement',
        header: 'departement'
      },
      {
        accessorKey: "street",
        header: "Street"
      },
      {
        accessorKey: "city",
        header: 'City'
      },
      {
        accessorKey: 'state',
        header: 'State'
      },
      {
        accessorKey: 'zipcode',
        header: 'ZipCode'
      }
    ],
    []
  );

  return (
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
  );
};

export default EmployeeList;
