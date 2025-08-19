import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

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

export default function MainPackage() {
  const packageData = (item, index) => (
    <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
      <Card sx={{ maxWidth: 335, borderRadius: 3, marginTop:10 }}>
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
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginBottom: 10 }}
      >
        {packageDataDetails.map((item, index) => packageData(item, index))}
      </Grid>
    </>
  );
}
