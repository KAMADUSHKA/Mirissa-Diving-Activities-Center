"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
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
    name: "Snorkeling With Turtles",
    img: "/Turtle-Snorkeling.jpg",
    description_1:
      "Swim in the crystal-clear waters of Mirissa and enjoy a guaranteed encounter with graceful sea turtles.",
    description_2:
      "Discover colorful coral gardens, tropical fish, and other fascinating marine life with high-quality snorkeling gear and an expert guide.",
    Time_Duration: "Time Duration - 2h",
    Special: "Flexible Time",
    Other_Details_1:
      "Full safety support and life guard assistance are provided throughout the tour.",
    Other_Details_2:
      "Whether you’re new to snorkeling or an experienced swimmer, this experience promises unforgettable moments in the ocean.",
  },
  {
    name: "Snorkeling With Whales",
    img: "/Whale-Snorkeling.jpg",
    description_1:
      "Feel the excitement of swimming alongside the gentle giants of the ocean in this breathtaking snorkeling adventure.",
    description_2:
      "Perfect for beginners and experienced snorkelers, our professional crew and well-equipped boats make this an unforgettable marine experience.",
    Time_Duration: "Time Duration - 4h",
    Special: "Departing at 06:00 AM",
    Other_Details_1:
      "Enjoy a delicious breakfast onboard to keep your energy high during the trip.",
    Other_Details_2:
      "Explore Mirissa’s deep blue waters with premium gear, expert guidance, and complete safety support from our Life Guard Team.",
  },
  {
    name: "Scuba Diving Tours",
    img: "/Deep-Diving.jpg",
    description_1:
      "Uncover the mysteries of Mirissa’s underwater world on an exciting scuba diving adventure.",
    description_2:
      "Dive among vibrant corals, explore hidden shipwrecks, and encounter diverse marine creatures in their natural habitat.",
    Time_Duration: "Time Duration - 1h",
    Special: "Flexible Time",
    Other_Details_1:
      "All necessary diving equipment, including oxygen tanks, is provided.",
    Other_Details_2:
      "Suitable for both first-time divers and seasoned professionals, with safety and guidance from experienced instructors.",
  },
  {
    name: "Boat Tours",
    img: "/Boat-Tours.jpg",
    description_1:
      "Set sail on an unforgettable boat tour along the scenic coast of Mirissa.",
    description_2:
      "Admire panoramic ocean views, visit hidden coves and islands, and spot playful dolphins in the wild.",
    Time_Duration: "Time Duration - 2h",
    Special: "",
    Other_Details_1:
      "We offer shared or private tours, ideal for solo travelers, couples, or small groups seeking a personalized sea adventure.",
    Other_Details_2:
      "Choose the package that suits you best and enjoy a memorable journey across the turquoise waters of Mirissa.",
  },
  {
    name: "Deep Sea Fishing Tours",
    img: "/Deep-Sea-Fishing-Tour.jpg",
    description_1:
      "Embark on an action-packed deep sea fishing trip in the waters of Mirissa.",
    description_2:
      "Target big game fish like tuna, sailfish, and mahi-mahi with the help of our expert crew.",
    Time_Duration: "Time Duration - 4h",
    Special: "Departing at 06:00 AM",
    Other_Details_1:
      "Whether you’re an experienced angler or trying fishing for the first time, our modern boats and professional team will make it an unforgettable adventure.",
    Other_Details_2:
      "Includes a hearty breakfast, safety equipment, and essential medicines for a comfortable trip.",
  },
  {
    name: "Low Deep Sea Fishing Tours",
    img: "/Low-Deep-Sea-Fishing-Tour.jpg",
    description_1:
      "Enjoy the thrill of fishing in the calmer waters near Mirissa, Sri Lanka.",
    description_2:
      "Our skilled guides will lead you to the most productive fishing spots.",
    Time_Duration: "Time Duration - 2.5h",
    Special: "Available for fun fishing or catch and release.",
    Other_Details_1:
      "Catch a variety of species, including Red Marlin, Chicken Fish, and Snapper.",
    Other_Details_2:
      "Perfect for both beginners and pros, with all equipment, guidance, and safety gear provided.",
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
        maxWidth: 380,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.141)",
        border: "4px solid rgba(33, 150, 243, 0.4)", // light blue outline
        ":hover": {
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.451)",
          border: "5px solid rgba(33, 150, 243, 0.8)", // stronger blue on hover
        },
        transition: "all 0.3s ease",
        position: "relative",
      }}
    >
      {/* Image with overlay */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="240"
          image={item.img}
          alt={item.name}
          sx={{
            borderRadius: 3,
            transition: "transform 0.5s ease",
            "&:hover": { transform: "scale(1.1)" },
          }}
        />

        {/* Overlay content */}
        <Box
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            display: "flex",
            alignItems: "center",
            gap: 1,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            padding: "4px 8px",
            borderRadius: 2,
          }}
        >
          <Avatar
            sx={{ bgcolor: "rgba(236, 73, 73, 0.71)", width: 40, height: 40 }}
            src="/MainLogo.png"
          ></Avatar>
          <Typography variant="h6" fontWeight="bold" color="white">
            {item.name}
          </Typography>
        </Box>
      </Box>

      {/* Card content */}
      <CardContent>
        {/* Main call-to-action */}
        <ListItem disablePadding>
          <ListItemIcon>
            <StarIcon sx={{ color: "gold" }} />
          </ListItemIcon>
          <ListItemText
            primary={<Typography fontWeight="bold">Join With Us Now</Typography>}
          />
        </ListItem>

        <Typography variant="body2" sx={{ mb: 1 }}>
          {item.description_1}
        </Typography>

        <Typography variant="body2" sx={{ mb: 1 }}>
          {item.description_2}
        </Typography>
      </CardContent>

      {/* Expand Section */}
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

      <Collapse in={expandedCards[index] || false} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ mb: 2 }}
            gutterBottom
          >
            Other Details:
          </Typography>

          {/* Icon bullet points */}
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemIcon>
              <AccessTimeIcon sx={{ color: "orange" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2">{item.Time_Duration}</Typography>
              }
            />
          </ListItem>

          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText
              primary={<Typography variant="body2">{item.Special}</Typography>}
            />
          </ListItem>

          {item.Other_Details_1 && (
            <Typography variant="body2" sx={{ mb: 2 }}>
              {item.Other_Details_1}
            </Typography>
          )}
          {item.Other_Details_2 && (
            <Typography variant="body2" sx={{ mb: 1 }}>
              {item.Other_Details_2}
            </Typography>
          )}
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
  );

  return (
    <>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ marginBottom: 20 }}
      >
        {tourPackingData.map((card, index) => cardData(card, index))}
      </Grid>
    </>
  );
}
