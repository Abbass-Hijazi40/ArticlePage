import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "../../styles/article.css"

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import data from "../../data";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArticleIcon from "@mui/icons-material/Article";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const useStyles = makeStyles((theme) => ({
  blogTitleContainer: {
    alignItems: "center",
  },
  blogTitle: {
    fontSize: "60px",
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    color: " #ECEDED",
    alignItems: "center",
    marginBottom: "50px",
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",

    backgroundColor: "#30353A",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
  CardTitle: {
    color: "#ECEDED",
  },
  cardDescription: {
    color: "#9CA9B3",
    fontSize: "16px",
  },
  searchBar: {
    marginLeft: "700px",
    marginBottom: "100px",
  },
}));

export default function Articles() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [Filter, SetFilter] = useState("");
  const searchText = (event) => {
    SetFilter(event.target.value);
  };

  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(Filter.toString().toLowerCase())
    );
  });

  return (
    <>
      <Paper
        className={classes.searchBar}
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <MenuIcon />
        </IconButton>

        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search by Title"
          inputProps={{ "aria-label": "search google maps" }}
          value={Filter}
          onChange={searchText.bind(this)}
        />

        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <ArticleIcon />
        </IconButton>
      </Paper>

      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Box className={classes.blogTitleContainer}>
          <Typography variant="h4" className={classes.blogTitle}>
            Articles
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {dataSearch.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ maxWidth: 500 }}
                  style={{
                    backgroundColor: "#25282C",
                    color: "#9CA9B3",
                    fontSize: "15px",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "#6163FF" }} aria-label="recipe">
                        M
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon
                          style={{
                            backgroundColor: "#25282C",
                            color: "#9CA9B3",
                          }}
                        />
                      </IconButton>
                    }
                    title={item.title}
                    // subheader="September 14, 2016"
                    subheader={
                      <Typography style={{ color: "#ECEDED" }}>
                        September 14, 2016
                      </Typography>
                    }
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.img}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography 
                      className="cardDesc"
                      variant="body2"
                      color="#9CA9B3"
                      fontSize={"15px"}
                    >
                      {item.desc}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon
                        style={{ backgroundColor: "#25282C", color: "#6163FF" }}
                      />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon
                        style={{ backgroundColor: "#25282C", color: "#9CA9B3" }}
                      />
                    </IconButton>

                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon
                        style={{ backgroundColor: "#25282C", color: "#9CA9B3" }}
                      />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph style={{ color: "#9CA9B3" }}>
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Box my={4} className={classes.paginationContainer}></Box>
      </Container>
    </>
  );
}
