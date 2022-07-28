import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import Data from "../../../data.json";

export default function BasicTable() {
  const myState = useSelector((data) => data.switchNav);

  return (
    <div className="bl-container" style={{ width: myState.headerWidth }}>
      <TableContainer component={Paper} sx={{ width: 1200 }}>
        <Table sx={{ width: 1200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Image</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Product Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Detail</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Stock</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {" "}
                <TableCell component="th" scope="row">
                  <img src={row.image} alt="" style={{ height: "60px" }} />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.detail}</TableCell>
                <TableCell>{row.actualPrice}</TableCell>
                <TableCell>{row.stock}</TableCell>
                <TableCell>
                  <ModeEditIcon />
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
