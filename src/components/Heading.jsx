import React from "react";
import HeadBar from "./HeadBar";
import { Box, Typography, Container, useTheme } from "@mui/material";
import UiButton from "../UI/UiButton";
import New from "../UI/New";


const Heading = () => {
  const theme = useTheme();
  const colors_box = [
    {
      background: "#C637A0",
      text: "QUESTION",
    },
    {
      background: "#A5456B",
      text: "PRICE",
    },
    {
      background: "#D25A75",
      text: "DISCOUNTS",
    },
    {
      background: "#FF717D",
      text: "GURANTEES",
    },
    {
      background: "transparent",
      text: "GURANTEES",
      border: "solid 2px #FFFFFF",
    },
  ];
  return (
    <Box sx={{ background: theme.palette.gradient.main }}>
      <Container maxWidth={false} sx={{ maxWidth: "1200px" }}>
        <New/>

        <Box
          display="flex"
          flexDirection="row"
          position="relative"
          sx={{
            // Circles Effect
            "&::before": {
              content: `url('../../../images/Circles.png')`,
              top: "30px",
              left: "-125px",
              color: "#B582C4",
              position: "absolute",
              opacity: "0.2",
            },
            "&::after": {
              content: `url('../../../images/Circles.png')`,
              bottom: "30px",
              right: "-20px",
              color: "#B582C4",
              position: "absolute",
              transform: "scale(-1)",
              opacity: "0.2",
            },
          }}
        >
          {/* Content */}
          <Box
            display="flex"
            flexDirection="column"
            gap="30px"
            width="40%"
            zIndex="5"
          >
            <Typography
              variant="h1"
              fontSize="64px"
              fontWeight="800"
              color={theme.palette.secondary.main}
              padding="40px 0"
              component="div"
              sx={{
                display: "inline-block",
                whiteSpace: "nowrap",
                cursor: "default",
              }}
            >
              WEB DEVELOPMENT <br /> STUDIO
            </Typography>
            {/* Box of colors */}
            <Box display="flex" flexDirection="row" gap="20px">
              {colors_box.map((item, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bgcolor={item.background}
                  height="80px"
                  width="80px"
                  borderRadius="10px"
                  border={item.border ? item.border : null}
                >
                  <Typography
                    textAlign="center"
                    variant="h6"
                    color={theme.palette.secondary.main}
                  >
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
            {/* First Text */}
            <Box
              padding="40px 15px"
              border={`2px solid ${theme.palette.secondary.main}`}
              sx={{
                position: "relative",
                "&::before": {
                  content: `url('../../../images/Comma 1.png')`,
                  top: "-20px",
                  left: "-10px",
                  color: theme.palette.primary.light,
                  position: "absolute",
                  opacity: "0.1",
                },
              }}
            >
              <Typography
                variant="body1"
                fontWeight="400"
                color={theme.palette.secondary.main}
                lineHeight="24.48px"
              >
                “ We are a experienced team of professionals for whom website
                development is not just a job, but a favorite thing. Each
                project is a separate story that we live with our client. We
                delve into the roots of the company, study its pros and cons.”
              </Typography>
            </Box>
            {/* Second Heading */}
            <Box
              padding="40px 15px"
              border={`2px solid ${theme.palette.secondary.main}`}
              display="flex"
              flexDirection="column"
            >
              <Box display="flex" flexDirection="row">
                <Typography
                  variant="h2"
                  fontWeight="700"
                  color={theme.palette.secondary.main}
                  padding="40px 0"
                >
                  WEBSITE
                </Typography>
                <Typography
                  variant="h2"
                  fontWeight="700"
                  marginLeft="10px"
                  color={theme.palette.accentOrange.main}
                  padding="40px 0"
                >
                  DEVELOPMENT
                </Typography>
              </Box>
              <UiButton />
            </Box>
          </Box>
          {/* Main photo */}
          <Box display="flex" flexDirection="column">
            <Box>
              <img
                src="../../../images/Computer 1.png"
                alt="computer"
                width="100%"
              />
            </Box>
            <Box display="flex" flexDirection="row" alignItems='center' justifyContent='center' gap='20px'>
              {/* TEXT with 2 colors */}
              <Box display="flex" flexDirection="row">
                <Typography
                  variant="h2"
                  fontWeight="700"
                  color={theme.palette.secondary.main}
                  padding="40px 0"
                >
                  WEBSITE
                </Typography>
                <Typography
                  variant="h2"
                  fontWeight="700"
                  marginLeft="10px"
                  color={theme.palette.accentOrange.main}
                  padding="40px 0"
                >
                  DESIGN
                </Typography>
              </Box>
              <UiButton/>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Heading;
