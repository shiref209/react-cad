import React from "react";
import { Box, Typography, useTheme } from "@mui/material";


const FooterList = ({ header, items }) => {
    const theme=useTheme();
  return (
    <Box display="flex" flexDirection="column" gap="5px">
      <Typography
        color={theme.palette.secondary.main}
        variant="h5"
        fontWeight="500"
        marginBottom="10px"
      >
        {header}
      </Typography>
      {items.map((item, index) => (
        <Typography
          key={index}
          color={theme.palette.secondary.main}
          variant="h6"
          fontWeight="500"
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default FooterList;
