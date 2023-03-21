import { Typography, Box, Container } from "@mui/material";
import { useTheme } from "@mui/system";
import Rectangle from "../UI/Rectangle";
import React from "react";

const Services = () => {
  const theme = useTheme();
  const iconsData = [
    {
      img: "../../../images/services/startup.png",
      title: "WEB",
    },
    {
      img: "../../../images/services/poster.png",
      title: "DESIGN",
    },
    {
      img: "../../../images/services/artboard.png",
      title: "DIV",
    },
    {
      img: "../../../images/services/big-data.png",
      title: "MARKETING",
    },
    {
      img: "../../../images/services/sitemap.png",
      title: "SEO",
    },
    {
      img: "../../../images/services/megaphone.png",
      title: "ADVERTISING",
    },
  ];
  return (
    <Box sx={{ background: theme.palette.secondary.dark }}>
      <Container maxWidth='80%'>
        <Box
          margin="0 5%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          flexWrap='wrap'
          gap="40px"
          p="50px 0"
        >
          <Typography
            variant="h1"
            color={theme.palette.primary.main}
            fontWeight="700"
          >
            OUR SERVICES
          </Typography>
          <Rectangle color="light" />
          {/* Icons */}

          <Box display="flex" flexDirection="row" gap="10px" flexWrap='wrap' alignItems="center"
          justifyContent="center">
            {iconsData.map((item, index) => (
              <Box
                display="flex"
                flexDirection="column"
                gap="25px"
                key={index}
                textAlign="center"
              >
                <Typography
                  variant="h4"
                  color={theme.palette.primary.main}
                  fontWeight="700"
                >
                  {item.title}
                </Typography>
                <Box
                  p="25px"
                  bgcolor={theme.palette.secondary.main}
                  sx={{
                    border: `2px dotted ${theme.palette.secondary.dark}`,
                    borderRadius: "9px",
                    backgroundImage: `linear-gradient(white, white), ${theme.palette.gradient.main}`,
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                  }}
                >
                  <img
                    src={item.img}
                    alt={`${item.title} icon`}
                    height="120px"
                    width="120px"
                  />
                </Box>
              </Box>
            ))}
          </Box>
          {/* Rectangles */}
          <Box display="flex" flexDirection="row" gap="10px">
            <Rectangle color="main" />
            <Rectangle color="main" />
            <Rectangle color="main" />
            <Rectangle color="light" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
