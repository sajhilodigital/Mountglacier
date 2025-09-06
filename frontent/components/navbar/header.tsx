"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  useMediaQuery,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useTheme } from "@mui/material/styles";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<{ [key: string]: boolean }>(
    {}
  );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destination" },
    { label: "Services", href: "/services" },
    {
      label: "Tour Packages",
      href: "/package",
      subItems: [
        { label: "Nepal", href: "/package" },
        { label: "Bhutan", href: "/package/bhutan" },
        { label: "China", href: "/package/china" },
      ],
    },
    { label: "About Us", href: "/about" },
    { label: "Why Choose Us", href: "/whyuhchoose" },
    { label: "Contact", href: "/contact" },
  ];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleUserMenuClose = () => setAnchorEl(null);
  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    label: string
  ) => {
    setMenuAnchorEl(event.currentTarget);
    setActiveMenu(label);
  };
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setActiveMenu(null);
  };
  const toggleSubmenu = (label: string) => {
    setOpenSubmenu((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const drawer = (
    <Box className="w-64 h-full bg-[#e6f2ff]">
      <List>
        {menuItems.map((item) => (
          <React.Fragment key={item.label}>
            {!item.subItems ? (
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ) : (
              <>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => toggleSubmenu(item.label)}>
                    <ListItemText primary={item.label} />
                    {openSubmenu[item.label] ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </ListItemButton>
                </ListItem>
                <Collapse
                  in={openSubmenu[item.label]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.subItems.map((sub) => (
                      <ListItemButton
                        key={sub.label}
                        sx={{ pl: 4 }}
                        component={Link}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                      >
                        <ListItemText primary={sub.label} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </>
            )}
          </React.Fragment>
        ))}
        <ListItem className="px-4 mt-2">
          <Button
            component={Link}
            href="/booknow"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "skyblue",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Book Now
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      {/* Top scrolling text using Tailwind */}
      <div className="fixed top-0 w-full bg-[#003366] overflow-hidden z-50">
        <div className="animate-scrollText whitespace-nowrap font-bold text-white py-2 px-2 text-lg">
          Mount Glacier Alpine Adventure Trek and Tours – Explore Nepal, Bhutan
          & Tibet with Us!
          <span className="px-60">
            “माउन्ट ग्लासियर अल्पाइन एडभेन्चर ट्रेक एण्ड टुर्स – नेपाल, भूटान र
            तिब्बतको अन्वेषण गर्नुहोस्!”
          </span>
        </div>
      </div>

      {/* Navbar below scrolling text */}
      <AppBar
        position="fixed"
        sx={{
          top: "42px",
          backgroundColor: scrolled ? "#e6f2ff" : "transparent",
          boxShadow: scrolled ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
          transition: "all 0.04s ease",
          zIndex: 40,
        }}
        className="px-4 md:px-16"
      >
        <Toolbar className="w-full flex justify-between items-center">
          <Box className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo1.png"
                alt="logo"
                width={80}
                height={40}
                className="rounded-md"
              />
            </Link>
          </Box>

          <Box
            className={`hidden md:flex space-x-6 font-medium items-center ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {menuItems.map((item) =>
              !item.subItems ? (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <Box
                  key={item.label}
                  onMouseEnter={(e) => handleMenuOpen(e, item.label)}
                  onMouseLeave={handleMenuClose}
                  className="relative"
                >
                  <Link href={item.href}>{item.label}</Link>
                  <Menu
                    anchorEl={menuAnchorEl}
                    open={activeMenu === item.label}
                    onClose={handleMenuClose}
                    MenuListProps={{ onMouseLeave: handleMenuClose }}
                  >
                    {item.subItems.map((sub) => (
                      <MenuItem
                        key={sub.label}
                        component={Link}
                        href={sub.href}
                        onClick={handleMenuClose}
                      >
                        {sub.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              )
            )}
          </Box>

          <Box className="hidden md:flex items-center space-x-4">
            <Button
              component={Link}
              href="/booknow"
              variant="contained"
              sx={{
                backgroundColor: "blue",
                color: "white",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#4fc3f7" },
              }}
            >
              Book Now
            </Button>
            <IconButton
              onClick={handleUserMenuOpen}
              className={scrolled ? "text-black" : "text-white"}
            >
              <AccountCircle fontSize="large" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleUserMenuClose}
            >
              <MenuItem
                component={Link}
                href="/login"
                onClick={handleUserMenuClose}
              >
                Login
              </MenuItem>
              <MenuItem
                component={Link}
                href="/register"
                onClick={handleUserMenuClose}
              >
                Register
              </MenuItem>
            </Menu>
          </Box>

          {isMobile && (
            <Box className="flex items-center space-x-2">
              <IconButton
                onClick={handleUserMenuOpen}
                className={scrolled ? "text-black" : "text-white"}
              >
                <AccountCircle fontSize="large" />
              </IconButton>
              <IconButton
                edge="end"
                onClick={handleDrawerToggle}
                className={scrolled ? "text-black" : "text-white"}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleUserMenuClose}
              >
                <MenuItem
                  component={Link}
                  href="/login"
                  onClick={handleUserMenuClose}
                >
                  Login
                </MenuItem>
                <MenuItem
                  component={Link}
                  href="/register"
                  onClick={handleUserMenuClose}
                >
                  Register
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {isMobile && (
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          {drawer}
        </Drawer>
      )}

      {/* Tailwind keyframes */}
      <style>
        {`
          @keyframes scrollText {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-scrollText {
            animation: scrollText 45s linear infinite;
          }
        `}
      </style>
    </>
  );
}
