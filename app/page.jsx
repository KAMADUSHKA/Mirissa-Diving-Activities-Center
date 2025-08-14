"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./(component)/footer";
import Header from "./(component)/header";
import Swiper from "./(component)/swiper";
import { CardSpotlightDemo } from "./(component)/CardSpotlightDemo/CardSpotlightDemo";
import { CardHoverEffectDemo } from "./(component)/CardHoverEffectDemo/CardHoverEffectDemo";
import PackageCard from "./(component)/package";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import {
  Avatar,
  Box,
  CardActions,
  CardHeader,
  Collapse,
  Container,
  Grid,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const packageDataDetails = [
  {
    name: "Deep Diving",
    description:
      "Go deeper and discover unique underwater landscapes and species",
    img: "/Deep-Diving.jpg",
  },
  {
    name: "Scuba Diving",
    description:
      "Explore the vibrant underwater world with guided scuba adventures.",
    img: "/Scuba-Diving.jpg",
  },
  {
    name: "Fun Diving",
    description:
      " Relaxed dives for certified divers to enjoy stunning marine life.",
    img: "/Fun-Diving.jpg",
    
  },
    {
    name: "Turtle Snorkeling",
    description:
      " Swim alongside majestic sea turtles in crystal-clear waters.",
    img: "/Turtle-Snorkeling.jpg",
    
  },
];

export default function Home() {
  const packageData = (item, index) => (
    <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
      <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={item.img}
            alt={item.name}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease",
              "&:hover": { transform: "scale(1.08)" },
            }}
          />
          <CardContent
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              background: "rgba(0, 0, 0, 0.636)",
              color: "#fff",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2">{item.description}</Typography>
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

      <Container maxWidth="xl" >
        <Grid container spacing={3} justifyContent="center" sx={{ marginBottom: 10, marginTop: 10 }}>
          {packageDataDetails.map((card, index) => packageData(card, index))}
        </Grid>

        <PackageCard  />
      
      </Container>

      <div>
        <Footer />
      </div>
    </>
  );
}
