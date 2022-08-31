import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";


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
      marginBottom:'50px',
      
  
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
      // fontSize: "25px",
    },
    cardDescription: {
      color: "#9CA9B3",
      fontSize: "16px",
    },
    
  }));


 
 
        export default function MainCard() {
            const classes = useStyles();
        return (
            
            <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.CardTitle}
                >
                  React useContext
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.cardDescription}
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                <Box ml={2}>
                  <Typography
                    variant="subtitle2"
                    component="p"
                    className={classes.CardTitle}
                  >
                    Guy Clemons
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    component="p"
                    className={classes.CardTitle}
                  >
                    May 14, 2020
                  </Typography>
                </Box>
              </Box>
              <Box>{/* <BookmarkBorderIcon /> */}</Box>
            </CardActions>
          </Card>
        </Grid>

        )
        }
 

