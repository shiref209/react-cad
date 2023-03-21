import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import Rectangle from "../UI/Rectangle";

const Whywe = () => {
  const theme = useTheme();
  return (
    <Box sx={{ background: theme.palette.secondary.dark }}>
      <Container maxWidth="80%">
        <Box
          margin="0 5%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          gap="40px"
          p="50px 0"
        >
          <Typography
            variant="h1"
            color={theme.palette.primary.main}
            fontWeight="700"
          >
            WHY WE
          </Typography>
          <Rectangle color="light" />

          <Typography
            variant="body1"
            fontWeight="500"
            color={theme.palette.primary.accent}
            textAlign="center"
          >
            We are a experienced team of professionals for whom website
            development is not just a job, but a favorite thing. Each project is
            a <br /> separate story that we live with our client. We delve into
            the roots of the company, study its pros and cons. And only after
            that we begin to create what is really necessary for a successful
            existence.
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            gap="10px"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            {/* Male */}
            <Box
              display="flex"
              flexDirection="row"
              gap="10px"
              alignItems="center"
              flexWrap="wrap"
            >
              <Box
                height="180px"
                width="180px"
                sx={{
                  border: `double 5px ${theme.palette.secondary.dark}`,
                  borderRadius: "9px",
                  backgroundImage: `linear-gradient(white, white), ${theme.palette.gradient.main}`,
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >
                <img
                  src="../../../images/male.png"
                  alt="Person"
                  height="100%"
                  width="100%"
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Typography
                variant="body2"
                fontWeight="400"
                color={theme.palette.primary.accent}
                textAlign="left"
              >
                We are a experienced team of professionals for <br />
                whom website development is not just a job, but <br />a favorite
                thing.
              </Typography>
            </Box>

            {/* Female */}
            <Box
              display="flex"
              flexDirection="row"
              gap="10px"
              alignItems="center"
              flexWrap="wrap"
            >
              <Box
                height="180px"
                width="180px"
                sx={{
                  border: `double 5px ${theme.palette.secondary.dark}`,
                  borderRadius: "9px",
                  backgroundImage: `linear-gradient(white, white), ${theme.palette.gradient.main}`,
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >
                <img
                  src="../../../images/female.png"
                  alt="Person"
                  height="100%"
                  width="100%"
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Typography
                variant="body2"
                fontWeight="400"
                color={theme.palette.primary.accent}
                textAlign="left"
              >
                We are a experienced team of professionals for <br />
                whom website development is not just a job, but <br />a favorite
                thing.
              </Typography>
            </Box>
          </Box>
          {/* Dotted line */}
      
        </Box>
      </Container>
      <Box
          sx={{
            borderTop: `2px dotted ${theme.palette.secondary.dark}`,
            
            backgroundImage: `linear-gradient(white, white), ${theme.palette.gradient.main}`,
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            width:'100%',
            height:'2px'
          }}
          ></Box>
    </Box>
  );
};

export default Whywe;
