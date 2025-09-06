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
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return; // only add scroll effect on home page
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

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
      {/* Top scrolling text (only show on homepage) */}
      {isHomePage && (
        <div className="fixed top-0 w-full bg-[#003366] overflow-hidden z-50">
          <div className="animate-scrollText whitespace-nowrap font-bold text-white py-2 px-2 text-lg">
            Mount Glacier Alpine Adventure Trek and Tours – Explore Nepal,
            Bhutan & Tibet with Us!
            <span className="px-60">
              “माउन्ट ग्लासियर अल्पाइन एडभेन्चर ट्रेक एण्ड टुर्स – नेपाल, भूटान
              र तिब्बतको अन्वेषण गर्नुहोस्!”
            </span>
          </div>
        </div>
      )}

      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{
          top: isHomePage ? "42px" : "0px",
          backgroundColor: isHomePage
            ? scrolled
              ? "#e6f2ff"
              : "transparent"
            : "#e6f2ff",
          boxShadow:
            scrolled || !isHomePage ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
          transition: "all 0.2s ease",
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

          {/* Desktop Menu */}
          <Box
            className={`hidden md:flex space-x-6 font-medium items-center ${
              isHomePage
                ? scrolled
                  ? "text-black"
                  : "text-white"
                : "text-black"
            }`}
          >
            {menuItems.map((item) =>
              !item.subItems ? (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <Box key={item.label} className="relative group">
                  <Box className="flex items-center cursor-pointer">
                    <Link href={item.href}>{item.label}</Link>
                    <ExpandMoreIcon
                      className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                      fontSize="small"
                    />
                  </Box>

                  {/* Custom dropdown with animation */}
                  <Box
                    className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible 
          transition-all duration-300 ease-in-out transform scale-y-0 group-hover:scale-y-100 origin-top"
                  >
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </Box>
                </Box>
              )
            )}
          </Box>

          {/* Right Side */}
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
              className={
                isHomePage
                  ? scrolled
                    ? "text-black"
                    : "text-white"
                  : "text-black"
              }
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

          {/* Mobile Menu */}
          {isMobile && (
            <Box className="flex items-center space-x-2">
              <IconButton
                onClick={handleUserMenuOpen}
                className={
                  isHomePage
                    ? scrolled
                      ? "text-black"
                      : "text-white"
                    : "text-black"
                }
              >
                <AccountCircle fontSize="large" />
              </IconButton>
              <IconButton
                edge="end"
                onClick={handleDrawerToggle}
                className={
                  isHomePage
                    ? scrolled
                      ? "text-black"
                      : "text-white"
                    : "text-black"
                }
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

      {/* Drawer for Mobile */}
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

      {/* Tailwind animation */}
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
