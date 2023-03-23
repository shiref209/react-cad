import React from "react";
import { Typography, useTheme, Button } from "@mui/material";

const UiButton = () => {
  const theme = useTheme();
  return (
    <Button
    disableElevation
    variant="contained"
    disableRipple
      sx={{
        '&:hover': {
          backgroundColor: theme.palette.accentOrange.light,
        },
        height: "50px",
        backgroundColor: theme.palette.accentOrange.main,
        color: theme.palette.secondary.main,
        padding: "15px 20px",
        fontWeight: "600",
        fontSize:'20px',
        border: "none",
        borderRadius: "9px",
        zIndex:'5'
      }}
    >
      <Typography variant="h4">TO GET THE CONSULTATION</Typography>
    </Button>
  );
};

export default UiButton;
