import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { useTheme } from "@mui/system";
import { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  ClickAwayListener,
  Container,
} from "@mui/material";
import ServicesItems from "./ServicesItems";

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
    <Box sx={{ textAlign: "center" }}>
      {/* Logo */}
      <Box>
        <img src="../../../images/Logo.jpg" alt="logo" />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding onClick={handleDrawerToggle}>
            <ListItemButton
              sx={{ textAlign: "center", color: theme.palette.secondary.main }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: "center", color: theme.palette.secondary.main }}
          >
            <ListItemText
              id="demo-positioned-button"
              aria-controls={isOpen ? "demo-positioned-menu" : undefined}
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
    <Box sx={{ display: "flex", overflowX:'hidden' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{
        background:theme.palette.gradient.main,     }}>
      <Container maxWidth={false} sx={{
        maxWidth:"1200px"
      }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
                       {/* Horizontal White Line */}
        <Box
          sx={{
            zIndex:'50',
            position: "absolute",
            height: "0.5px",
            backgroundColor: theme.palette.secondary.main,
            top: "68px",
            right: "0",
            width: "100vw",
          }}
        ></Box>
        <FiberManualRecordIcon
          sx={{
            position: "absolute",
            fontSize: '4px',
            color: theme.palette.secondary.main,
            top: '64px',
            right: '-2px',
            width:"2em",
            height:'2em'
          }}
        />
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
          <Box display={mobileOpen ? "none" : "block"}>
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
            {/* Language menu */}
            
            {/* Services Menu */}
            <ServicesItems anchorEl={anchorEl} isOpen={isOpen} handleClose={handleClose}/>
            <Button id="text" sx={{ color: theme.palette.secondary.main }}>
            <ListItem>
        <Box
            sx={{ cursor: "pointer" }}
            
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
        </ListItem>
            </Button>

            
          </Box>
          
        </Toolbar>
      </Container>
      </AppBar>
    
      <Box component="nav" sx={{position:'relative'}}>
    
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
              background: theme.palette.gradient.main,
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
