import { MenuItem, Typography, Menu } from "@mui/material";
import React from "react";

const ServicesItems = (props) => {
  const { anchorEl, isOpen, handleClose } = props;
  const menuItems = [
    "Calculator for the site",
    "Integration",
    "Site testing",
    "Site layout",
    "Parsing goods",
    "Articles",
    "Website improvement",
  ];
  return (
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
      {menuItems.map((item,index) => (
        <MenuItem key={index} onClick={handleClose}>
          <Typography variant="h6">{item}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default ServicesItems;
