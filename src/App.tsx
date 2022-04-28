import { useContext, useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Layout } from "./components/Layout";
import { CustomTable } from "./components/Table/Table";
import { AddMovie } from "./features/movies/components/AddMovie";
import { SearchMovie } from "./features/movies/components/SearchMovie";
import { MoviesAttribute } from "./features/movies/type";
import { Context } from "./store/Context";
import { device } from "./utils/responsiveBreakpoints";
import Typography from "@mui/material/Typography/Typography";
import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ToastContainer } from "react-toastify";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  html {
    font-weight: 400;
    color: black;
    line-height: 1.3;
    font-family: 'Open Sans', sans-serif;
    font-size: 62.5%;

    @media ${device.bigDesktop} {
      font-size: 75%
    }

    @media ${device.tabletLand} {
      font-size: 56.5%
    }
  

    @media ${device.tabletPort} {
      font-size: 50%
    }

    @media ${device.mobile} {
      font-size: 62.5%
    }
  }

  main {
    display: grid;
    grid-template-rows: min-content max-content 1fr;
    grid-template-columns:  [full-start] minmax(2rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 17rem) [col-end]) [center-end] minmax(2rem, 1fr) [full-end];

  }

  
  .u-center-text { text-align: center !important; }

  .u-margin-bottom-small { margin-bottom: 1.5rem !important; }

  .u-margin-bottom-medium {
      margin-bottom: 4rem !important;

      @media ${device.tabletPort} {
        margin-bottom: 3rem !important;

      }
  }
  .u-margin-bottom-big { 
      margin-bottom: 8rem !important;

      @media ${device.tabletPort} {
        margin-bottom: 5rem !important;

      }
  }
  
.u-margin-top-medium { margin-top: 4rem !important; }
.u-margin-top-big { margin-top: 8rem !important; }
.u-margin-top-huge { margin-top: 10rem !important; }

  .Toastify {
    font-size: 1.2rem;
  }


`;

const theme = {
  colors: {
    primary: "#6D72C3",
    primaryDark: "#5941A9",
    primaryLight: "#E5D4ED",
    secondaryDark: "#B28451",
    secondaryLight: "#fcddb9",
  },
};

function App() {

  const { movieList } = useContext(Context);
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState<Array<MoviesAttribute>>(movieList)



  useEffect(() => {
    if (!searchQuery) {
      setMovies([...movieList]);
    } else {
      const filteredData =  movieList.filter((d) => d.movieName.toLowerCase().includes(searchQuery.toLowerCase()));
      setMovies([...filteredData]);

    }
  }, [searchQuery, movieList])
  

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Layout>
          <Typography variant="h1" gutterBottom component="div">
            Rate your favorite Movie
          </Typography>
          <AddMovie />
          <SearchMovie searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <CustomTable movieList={movies} />
        </Layout>
  
      </ThemeProvider>
    </>
  );
}

export default App;
