import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Box } from "@material-ui/core";
import Image from "../../images/landing.png";
import Tatto from "../../images/Tatto.svg";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  hero: {
    color: "#ECEDED",
    background: `url(${Tatto}), #151719`,
    height: "500px",
    // backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    position: "relative",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    paddingLeft: "300px",
    // marginLeft:"100px",

    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 500,
      fontSize: "3em",
    },
  },
  image: {
    height: "396px",
    width: "528px",
  },
  headerDes: {
    width: "528px",
    paddingLeft: "100px",
  },
  headerTitle: {
    color: "#6163FF",
  },
  headerSubTitle: {
    color: "#ECEDED",
    fontSize: "50px",
  },
  headerText: {
    color: "#9CA9B3",
    fontSize: "20px",
    lineHeight: "35px",
  },
  searchContainer: {
    alignItems: "center",
    textAlign: "center",
    marginTop: "100px",
    // marginBottom: "100px",
    padding: "20px",
    width: "600px",
    paddingLeft: "600px",
  },
  serachTextField: {
    background: "#fff",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.hero}>
        <Box>
          <img src={Image} alt="" className={classes.image} />
        </Box>

        <Box className={classes.headerDes}>
          <Typography className={classes.headerTitle}>
            LIGHTNING FAST WORKFLOW
          </Typography>
          <Typography className={classes.headerSubTitle}>
            Data-driven insights
          </Typography>
          <Typography className={classes.headerText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </Box>
      </Box>
      <Box className={classes.searchContainer}>
        <Typography className={classes.headerSubTitle}>
          Cloud Managed Services
        </Typography>
        <Typography className={classes.headerText}>
          Our Company works for all companies, so you only have to set it up
          once, and get beautiful results forever.
        </Typography>
        {/* <CustomizedInputBase /> */}
      </Box>
    </div>
  );
}
