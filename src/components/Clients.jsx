import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import Rectangle from "../UI/Rectangle";

const Clients = () => {
  const imageData = [
    {
      img: "../../../images/clients/Group 6.png",
      title: "Bika logo",
    },
    {
      img: "../../../images/clients/Group 5.png",
      title: "Betis logo",
    },
    {
      img: "../../../images/clients/Group 4.png",
      title: "Craftor logo",
    },
    {
      img: "../../../images/clients/Group 3.png",
      title: "Company logo",
    },
    {
      img: "../../../images/clients/Group 2.png",
      title: "Felicita logo",
    },
    {
      img: "../../../images/clients/Group 1.png",
      title: "Laura Style logo",
    },
    {
      img: "../../../images/clients/Group 12.png",
      title: "D-optic logo",
    },
    {
      img: "../../../images/clients/Group 11.png",
      title: "WHO logo",
    },
    {
      img: "../../../images/clients/Group 10.png",
      title: "Hoegaarden logo",
    },
    {
      img: "../../../images/clients/Group 9.png",
      title: "Skoda logo",
    },
    {
      img: "../../../images/clients/Group 8.png",
      title: "Ukrisib bank logo",
    },
    {
      img: "../../../images/clients/Group 7.png",
      title: "Biola logo",
    },
  ];
  const theme = useTheme();
  return (
    <Box bgcolor={theme.palette.secondary.dark}>
      <Container maxWidth={false} sx={{ maxWidth: "1200px" }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="30px"
          p="50px 0"
        >
          <Typography
            color={theme.palette.primary.main}
            variant="h1"
            fontWeight="700"
          >
            OUR CLIENTS
          </Typography>
          <Rectangle color="light" />
          <Grid container spacing={1} justifyContent="center">
            {imageData.map((item, index) => (
              <Grid item key={index}>
                <Box
                  bgcolor={theme.palette.secondary.main}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height="155px"
                  width="180px"
                  borderRadius="15px"
                >
                  <img src={item.img} alt={item.title} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Clients;
