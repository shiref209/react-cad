import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import FooterList from "../UI/FooterList";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ background: theme.palette.gradient.main }}>
      <Container maxWidth={false} sx={{ maxWidth: "1200px" }}>
        <Box display="flex" flexDirection="row" gap="180px">
          {/* Logo */}
          <Box
            display="flex"
            flexDirection="column"
            gap="40px"
            marginTop="40px"
          >
            <img
              src="../../../images/Logo.jpg"
              alt="Cad logo"
              height="auto"
              width="auto"
            />
            <Typography
              variant="h6"
              fontWeight="400"
              color={theme.palette.secondary.main}
              marginBottom="100px"
            >
              © 2023 CAD. All rights reserved
            </Typography>
          </Box>
          {/* Navigation */}
          <Box
            display="flex"
            flexDirection="row"
            gap={10}
            marginTop="60px"
            flexWrap="wrap"
          >
            {/* Order website navigation */}
            <FooterList
              header="ORDER WEBSITE"
              items={[
                "Framework",
                "Online store",
                "Business card site ",
                " Corporate website",
                "Landing Page",
              ]}
            />
            {/* Marketing */}
            <FooterList
              header="MARKETING"
              items={[
                "Framework",
                "Online store",
                "Business card site ",
                " Corporate website",
                "Landing Page",
              ]}
            />
            {/* Services */}
            <FooterList
              header="SERVICES"
              items={[
                "Framework",
                "Online store",
                "Business card site ",
                " Corporate website",
                "Landing Page",
              ]}
            />
            {/* Contacts */}
            <Box
              display="flex"
              flexDirection="column"
              gap="15px"
              alignItems="flex-end"
            >
              <Typography
                color={theme.palette.secondary.main}
                variant="h5"
                fontWeight="500"
                marginBottom="10px"
              >
                OUR CONTACTS
              </Typography>
              <Typography
                color={theme.palette.secondary.main}
                variant="h6"
                fontWeight="500"
                align="right"
              >
                Schedule:
                <br />
                Mon-Fri: 09:00 - 21:00 <br />
                Sat-Sun: 10:00 - 18:00
              </Typography>
              <Box>
                <Typography
                  color={theme.palette.secondary.main}
                  variant="h6"
                  fontWeight="500"
                  align="right"
                >
                  SOCIAL NETWORKS
                </Typography>
                {/* Icons Container */}
                <Box
                  display="flex"
                  flexDirection="row"
                  gap="10px"
                  justifyContent="flex-end"
                  marginTop="10px"
                >
                  <img
                    src="../../../images/icons/linkedin icon.png"
                    alt="linkedin icon"
                    height="20px"
                    width="20px"
                  />
                  <img
                    src="../../../images/icons/fb icon.png"
                    alt="facebook icon"
                    height="20px"
                    width="20px"
                  />

                  <img
                    src="../../../images/icons/instagram icon.png"
                    alt="instagram icon"
                    height="20px"
                    width="20px"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
