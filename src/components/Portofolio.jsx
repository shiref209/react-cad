import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/system";
import Rectangle from "../UI/Rectangle";
import UiButton from "../UI/UiButton";
const Portofolio = () => {
  const theme = useTheme();
  //   Image paths
  const imageData = [
    {
      img: "../../../images/website-apple (1) 1.png",
      title: "apple website",
    },
    {
      img: "../../../images/website-carmax 1.png",
      title: "carmax website",
    },
    {
      img: "../../../images/website-protest 1.png",
      title: "protest website",
    },
    {
      img: "../../../images/website-simplychocolate 1.png",
      title: "simply chocolate website",
    },
    {
      img: "../../../images/website-sirinlabs 1.png",
      title: "sirinlabs website",
    },
    {
      img: "../../../images/website-slack 1.png",
      title: "slack website",
    },
  ];
  return (
    <Box sx={{   background: `${theme.palette.gradient.main}, url(${"../../../images/Effects.png"}) no-repeat center center fixed`,
    backgroundSize: 'cover' }}>
      <Container maxWidth="80%">
        <Box
          margin="0 5%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent='center'
          gap="30px"
          sx={{ backgroundImage: `url(${"../../../images/Effects.png"})`,  backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover' }}
          p='50px 0'
        >
          <Typography
            variant="h1"
            color={theme.palette.secondary.main}
            fontWeight="700"
          >
            OUR PORTOFOLIO
          </Typography>
          <Rectangle color="light" />
          {/* Images section */}
          <Grid container rowSpacing={2} columnSpacing={2} justifyContent='center'>
            {imageData.map((item, index) => (
              <Grid item key={index} >
                <img
                  style={{ borderRadius: "20px" }}
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                />
              </Grid>
            ))}
          </Grid>
          <UiButton />
        </Box>
      </Container>
    </Box>
  );
};

export default Portofolio;
