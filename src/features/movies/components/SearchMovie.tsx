import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import styles from "./style.module.css";

type SearchProps = {
  searchQuery: string;
  setSearchQuery: (e: string) => void;
};

export const SearchMovie = ({ searchQuery, setSearchQuery }: SearchProps) => {
  return (
    <form className={styles.searchMovie}>
      <TextField
        id="search-bar"
        className={styles.input}
        InputProps={{
          style: {
            fontSize: "14px",
            fontWeight: "light",
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: "14px",
            fontWeight: "normal",
          },
        }}
        type="text"
        label="Enter a movie name...."
        variant="outlined"
        placeholder="Search..."
        size="small"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Box
        sx={{
          width: 40,
		  display: "flex",
		  justifyContent: "center",
		  alignItems: "center",
		  border: "2px solid black"
        }}
      >
		  <SearchIcon style={{ fill: "black" }}  fontSize="large"/>
	  </Box>
      
    </form>
  );
};
