"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./(component)/footer";
import Header from "./(component)/header";
import Swiper from "./(component)/swiper";
import { CardSpotlightDemo } from "./(component)/CardSpotlightDemo/CardSpotlightDemo";
import { CardHoverEffectDemo } from "./(component)/CardHoverEffectDemo/CardHoverEffectDemo";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Container, Grid } from "@mui/material";

const packageDataDetails = [ {name:"s-1"}, {name:"s-1"}, {name:"s-1"}, {name:"s-1"} ]

export default function Home() {

const packageData = (item, index) => (
  <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/public/about-1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lizards are a widespread group of squamate reptiles, with over
            6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
);

  return (
    <>
      <div>
        <Header />
      </div>

      <Swiper />
      {/* <AppleCardsCarouselDemo/> */}
      {/* <div>
        <CardSpotlightDemo />
      </div>

      <div>
        <CardHoverEffectDemo/>
      </div> */}
      <h1>fdgghdrth</h1>

      <Container>
        <Grid container spacing={4} sx={{ marginBottom: 20 }}>
          
          {packageDataDetails.map((card, index) => packageData(card, index))}
        </Grid>
      </Container>

      <div>
        <Footer />
      </div>
    </>
  );
}
