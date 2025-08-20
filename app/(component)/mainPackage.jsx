'use client'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
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
      "Relaxed dives for certified divers to enjoy stunning marine life.",
    img: "/Fun-Diving.jpg",
  },
  {
    name: "Turtle Snorkeling",
    description:
      "Swim alongside majestic sea turtles in crystal-clear waters.",
    img: "/Turtle-Snorkeling.jpg",
  },
];

export default function MainPackage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      sx={{ marginBottom: 10, marginTop: 6 }}
    >
      {packageDataDetails.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={index}
          component={motion.div}
          custom={index}
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          viewport={{ once: true }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{
              maxWidth: 325,
              borderRadius: 3,
              position: "relative",
              overflow: "hidden",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
            }}
          >
            <CardActionArea
              sx={{
                position: "relative",
                "&:hover .overlay": {
                  opacity: 1,
                },
                "&:hover img": {
                  transform: "scale(1.1)",
                },
              }}
            >
              {/* Card Image */}
              <CardMedia
                component="img"
                image={item.img}
                alt={item.name}
                sx={{
                  width: "100%",
                  height: 250,
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
              />

              {/* Overlay Content */}
              <CardContent
                className="overlay"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  background: "rgba(0, 0, 0, 0.55)",
                  color: "#fff",
                  padding: 2,
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {item.name}
                </Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>

              {/* Always visible title (optional) */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  p: 1.5,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
                  color: "#fff",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.name}
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
