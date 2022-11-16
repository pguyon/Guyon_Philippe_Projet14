import React, { useMemo, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import { MRT_Localization_EN } from "material-react-table/locales/en";
import "../Styles/EmployeeList.css";
import { useSelector } from "react-redux";

const EmployeeList = () => {
  const employee = useSelector((state) => state.employee);
  const arrayEmployee = Object.values(employee);

  const el = document.getElementById("react-confirm-alert");
  const svg = document.getElementById("react-confirm-alert-firm-svg");
  useEffect(() => {
    if (el && svg) {
      el.remove();
      svg.remove();
    }
  }, [el, svg]);

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
        header: "Department",
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
        data={arrayEmployee[0]}
        enableColumnActions={false}
        localization={MRT_Localization_EN}
        enableColumnFilters={false}
      />
    </section>
  );
};

export default EmployeeList;
