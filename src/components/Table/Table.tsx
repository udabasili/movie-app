import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MoviesAttribute } from "../../features/movies/type";
import styles from "./table.module.css"

type Props = {
  movieList: Array<MoviesAttribute>
}
export const CustomTable = ({ movieList }: Props ) => {


  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead className={styles.header}>
          <TableRow>
            <TableCell align="center" className={styles.tableheader} >Movie Name</TableCell>
            <TableCell align="center"  className={styles.tableheader}>Rating (0 - 100)</TableCell>
            <TableCell align="center"  className={styles.tableheader}>Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movieList.map((movie) => (
            <TableRow
              key={movie.movieName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center"  className={styles.tabledata}>
                {movie.movieName}
              </TableCell>
              <TableCell align="center" className={styles.tabledata}>{movie.rating}</TableCell>
              <TableCell align="center"  className={styles.tabledata}>{movie.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
