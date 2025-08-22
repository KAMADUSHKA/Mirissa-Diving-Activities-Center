"use client";
import Image from "next/image";
import Footer from "./(component)/footer";
import Header from "./(component)/Header.jsx";
import Swiper from "./(component)/swiper";
import Marquee from "./(component)/marquee"
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
  Divider,
  Grid,
  Link,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AboutSection from "./(component)/aboutSection";
import Review from "./(component)/review";
import Contact from "./(component)/contact";
import MainPackage from "./(component)/mainPackage";
import FloatingWhatsApp from "./(component)/floatingWhatsApp";

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
      <Marquee/>
      {/* <AppleCardsCarouselDemo/> */}
      {/* <div>
        <CardSpotlightDemo />
      </div>

      <div>
        <CardHoverEffectDemo/>
      </div> */}

      

      <Container maxWidth="xl">
        <AboutSection />
        <MainPackage/>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontFamily: "Cormorant Garamond, serif",
            color: "rgba(12, 93, 160, 0.8)",
            textShadow: "2px 45px 4px rgba(33, 149, 243, 0.077)",
            marginTop: 6,
            marginBottom: 4,
            // Responsive font sizes
            fontSize: {
              xs: "2rem", // small screens (mobile)
              sm: "2.5rem", // tablets
              md: "3.5rem", // desktop
              lg: "4rem", // large desktop
            },
          }}
        >
          Why Choose Us
        </Typography>

<Grid
  container
  spacing={2}
  mt={3}
  mb={3}
  justifyContent="center"
  sx={{
    background:
      "linear-gradient(135deg, rgba(206, 206, 206, 0.737), rgba(255, 255, 255, 0.019))",
    borderRadius: 4,
    py: 4,
  }}
>
  <Grid item xs={12} md={10}>
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        overflow: "hidden",
        boxShadow: "none",
        background: "transparent",
        height: { xs: "auto", md: 380, lg: 480 },
      }}
    >
      {/* Video Section */}
      <Box
        sx={{
          flex: 1,
          order: { xs: 1, md: 2 },
          minHeight: { xs: 240, md: "100%" },
          marginRight:2,
          marginLeft:2
        }}
      >
        <video
          src="/Diving.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </Box>

      {/* Text Section */}
      <Box
        sx={{
          flex: 1,
          order: { xs: 2, md: 1 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          p: { xs: 2, md: 4, lg: 5 },
        }}
      >
        <Typography
          component="div"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "rgba(13, 80, 135, 0.929)",
            fontSize: { xs: "1.4rem", md: "1.8rem", lg: "2.3rem" }, // ✅ Bigger title
          }}
        >
          Diving With Mirissa Diving Activities Center
        </Typography>

        <Typography
          variant="body1"
          color="rgb(0, 0, 0)"
          sx={{
            mt: 2,
            maxWidth: { xs: 320, md: 560, lg: 640 },
            fontSize: { xs: "0.95rem", md: "1.1rem", lg: "1.2rem" }, // ✅ Readable body
            lineHeight: { xs: 1.6, md: 1.8 },
          }}
        >
          Discover the wonders of the Indian Ocean with Mirissa Diving Activities
          Center. Swim alongside graceful sea turtles, colorful tropical fish,
          and spot majestic whales in crystal-clear waters. With expert guides,
          top-quality equipment, and unforgettable experiences, Mirissa is the
          perfect destination for both beginners and seasoned divers. Dive in
          and create memories that last a lifetime!
        </Typography>
      </Box>
    </Card>
  </Grid>
</Grid>


        <PackageCard />
      </Container>
      <Contact />
      <Review />

      <div>
        <Footer />
      </div>

      <FloatingWhatsApp />
    </>
  );
}
