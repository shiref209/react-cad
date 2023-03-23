import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/system";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

const drawerWidth = 240;
const navItems = ["About Us", "Portofolio", "Order Site", "Design"];

export default function DrawerAppBar(props) {
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
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box  sx={{ textAlign: "center" }}>
       {/* Logo */}
       <Box>
          <img src="../../../images/Logo.jpg" alt="logo" />
        </Box>
      <Divider />
      <List >
      {navItems.map((item) => (
          <ListItem key={item} disablePadding onClick={handleDrawerToggle}>
            <ListItemButton sx={{ textAlign: 'center', color:theme.palette.secondary.main }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color:theme.palette.secondary.main }}>
            <ListItemText
            id="demo-positioned-button"
            aria-controls={isOpen ? 'demo-positioned-menu' : undefined}
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
          </ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        position:"relative"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
         {/* Logo */}
         <Box>
          <img src="../../../images/Logo.jpg" alt="logo" />
        </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: theme.palette.secondary.main }}>
                {item}
              </Button>
            ))}
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
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:theme.palette.gradient.main,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
}
