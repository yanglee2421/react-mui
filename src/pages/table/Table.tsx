// MUI Imports
import { Box, Button, Paper, Typography } from "@mui/material";

// Table Imports
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

// React Imports
import React from "react";

// Utils Imports
import { timeout, AnimateController } from "@/utils";

export function Table() {
  const table = useReactTable({
    columns,
    data: defaultData,
    getCoreRowModel: getCoreRowModel(),
  });

  const [number, setNumber] = React.useState(0);
  const [rolling, setRolling] = React.useState(false);
  const rollRef = React.useRef(
    new AnimateController(() => {
      React.startTransition(() => {
        setNumber(Math.floor(Math.random() * 100) + 1);
      });
    })
  );

  const handleRoll = async () => {
    rollRef.current.play();
    setRolling(true);
    await timeout(1000);
    rollRef.current.abort();
    setRolling(false);
  };

  return (
    <Box>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h1">{number}</Typography>
        <Button onClick={handleRoll} disabled={rolling} variant="contained">
          roll
        </Button>
      </Paper>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => {
            return (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => {
                  return (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </tfoot>
      </table>
    </Box>
  );
}

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("firstName", {
    cell(info) {
      return info.getValue();
    },
    footer(info) {
      return info.column.id;
    },
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    cell(info) {
      return <i>{info.getValue()}</i>;
    },
    header() {
      return <span>Last Name</span>;
    },
    footer(info) {
      return info.column.id;
    },
  }),
  columnHelper.accessor("age", {
    header() {
      return "Age";
    },
    cell(info) {
      return info.renderValue();
    },
    footer(info) {
      return info.column.id;
    },
  }),
  columnHelper.accessor("visits", {
    header() {
      return <span>Visits</span>;
    },
    footer(info) {
      return info.column.id;
    },
  }),
  columnHelper.accessor("status", {
    header: "Status",
    footer(info) {
      return info.column.id;
    },
  }),
  columnHelper.accessor("progress", {
    header: "Profile Progress",
    footer(info) {
      return info.column.id;
    },
  }),
];
