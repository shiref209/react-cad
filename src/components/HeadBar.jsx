import React, { useState } from "react";
import Headbar from "./HeadBar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  ClickAwayListener,
  Box,
  Typography,
  Container,
  Button,
  Menu,
  MenuItem,
  AppBar,
} from "@mui/material";
import { useTheme } from "@mui/system";

const HeadBar = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [languageBarOpen, setLanguageBarOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setIsOpen(true);
    setAnchorEl(event.target);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Box p="10px 0">
      {/* Container Box */}
      <AppBar component='nav'>
        
      </AppBar>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        position="relative"
      >
        {/* Horizontal white line */}
        <Box
          sx={{
            position: "absolute",
            height: "0.5px",
            backgroundColor: theme.palette.secondary.main,
            bottom: "0",
            right: "0",
            width: "100vw",
          }}
        ></Box>
        <FiberManualRecordIcon
          sx={{
            position: "absolute",
            fontSize: '4px',
            color: theme.palette.secondary.main,
            bottom: '-2px',
            right: '-2px',
          }}
        />

        {/* Logo */}
        <Box>
          <img src="../../../images/Logo.jpg" alt="logo" />
        </Box>
        {/* Menu items */}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Button id="text" sx={{ color: theme.palette.secondary.main }}>
            About Us
          </Button>
          <Button id="text" sx={{ color: theme.palette.secondary.main }}>
            Portofolio
          </Button>
          <Button id="text" sx={{ color: theme.palette.secondary.main }}>
            Order Site
          </Button>
          <Button id="text" sx={{ color: theme.palette.secondary.main }}>
            Design
          </Button>

          <Button
            id="text"
            aria-controls={isOpen ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={isOpen ? "true" : undefined}
            onClick={handleClick}
            sx={{
              color: theme.palette.secondary.main,
              fontWeight: isOpen ? "600" : "400",
              fontSize: isOpen && "1rem",
            }}
          >
            Services
          </Button>
          {/* Services Menu */}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              "& .MuiPaper-root": {
                opacity: "0.8 !important",
                borderRadius: "13px",
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <Typography variant="h6">Calculator for the site</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>Integration</MenuItem>
            <MenuItem onClick={handleClose}>Site testing</MenuItem>
            <MenuItem onClick={handleClose}>Site layout</MenuItem>
            <MenuItem onClick={handleClose}>Parsing goods</MenuItem>
            <MenuItem onClick={handleClose}>Articles</MenuItem>
            <MenuItem onClick={handleClose}>Website improvement</MenuItem>
          </Menu>
          <Button id="text" sx={{ color: theme.palette.secondary.main }}>
            About Us
          </Button>

          {/* Language menu */}
          <Box
            sx={{ cursor: "pointer" }}
            marginLeft="30px"
            display="flex"
            flexDirection="row"
            gap="5px"
            position="relative"
            onClick={() => {
              setLanguageBarOpen(true);
            }}
          >
            <Typography
              variant="h6"
              fontWeight="500"
              color={theme.palette.secondary.main}
              padding="0 10px"
            >
              RU
            </Typography>

            {languageBarOpen && (
              <ClickAwayListener
                onClickAway={() => {
                  setLanguageBarOpen(false);
                }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  gap="5px"
                  position="absolute"
                  top="25px"
                  sx={{
                    "& .MuiTypography-root": {
                      padding: "0 10px",
                      fontWeight: "500",
                      borderRadius: "15px",
                    },
                    "& .MuiTypography-root:hover": {
                      backgroundColor: "#D4B4DD",
                      color: theme.palette.primary.main,
                      fontWeight: "700",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="500"
                    color={theme.palette.secondary.main}
                  >
                    UK
                  </Typography>

                  <Typography
                    variant="h6"
                    fontWeight="500"
                    color={theme.palette.secondary.main}
                  >
                    EN
                  </Typography>

                  <Typography
                    variant="h6"
                    fontWeight="500"
                    color={theme.palette.secondary.main}
                  >
                    PL
                  </Typography>
                </Box>
              </ClickAwayListener>
            )}

            {languageBarOpen ? (
              <KeyboardArrowUpIcon
                sx={{ color: theme.palette.secondary.main }}
              />
            ) : (
              <KeyboardArrowDownIcon
                sx={{ color: theme.palette.secondary.main }}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeadBar;
