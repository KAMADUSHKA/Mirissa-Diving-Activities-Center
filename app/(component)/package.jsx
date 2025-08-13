"use client";
import React from "react";
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

const tourPackingData = [
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
];

export default function PackageCard() {
  const [expandedCards, setExpandedCards] = useState({});

  const handleExpandClick = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Styled component for ExpandMore button
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    marginLeft: "auto",
    transform: expand ? "rotate(180deg)" : "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const cardData = (item, index) => (
    <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
      <Card
        sx={{
          borderRadius: 4,
          maxWidth: 350,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          ":hover": {
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
          },
          transition: "all 0.3s ease",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "rgba(236, 73, 73, 0.71)" }}
              aria-label="course"
            >
              R
            </Avatar>
          }
          title={
            <Typography variant="h6" fontWeight="bold">
              Snorkeling With Turtles
            </Typography>
          }
          
        />
        <CardMedia
          component="img"
          height="180"
          image="/Deep-Diving.jpg"
          alt="CourseName"
        />
        <CardContent>
          <ListItem disablePadding>
            <ListItemIcon>
              <StarIcon sx={{ color: "gold" }} />
            </ListItemIcon>
            <ListItemText
              primary={<Typography fontWeight="bold">Join With Us Now</Typography>}
            />
          </ListItem>
          <Typography variant="body2">Dive into the clear sea water of Mirissa on snorkeling tour and encounter sea turtles guaranteed! </Typography>
          <Typography variant="body2">
           Explore vibrant coral reefs, exotic fish, and other marine life with top-quality gear and expert guidance. 
          </Typography>
          <Typography variant="body2">First Payment: ₹FirstPayment</Typography>
          <Typography variant="body2">
            Registration Fee: ₹RegistrationFee
          </Typography>
        </CardContent>
        <CardActions>
          <ExpandMore
            expand={expandedCards[index] || false}
            onClick={() => handleExpandClick(index)}
            aria-expanded={expandedCards[index] || false}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse
          in={expandedCards[index] || false}
          timeout="auto"
          unmountOnExit
        >
          <CardContent>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Other Details:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              itemOtherDetails
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );

  return (
    <>
      <Grid container spacing={4} justifyContent="center" sx={{ marginBottom: 20 }}>
        {tourPackingData.map((card, index) => cardData(card, index))}
      </Grid>
    </>
  );
}
