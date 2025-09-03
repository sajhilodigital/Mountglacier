"use client";

import React from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useTheme } from "@mui/material/styles";

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
                  <ListItemButton component={Link} href={item.href}>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
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
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#e6f2ff" }}
        className="shadow-sm px-4 md:px-16"
      >
        <Toolbar className="w-full flex justify-between items-center">
          {/* Logo */}
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
          <Box className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
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
                    MenuListProps={{
                      onMouseLeave: handleMenuClose,
                    }}
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

          {/* Desktop Right Side */}
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

            <IconButton onClick={handleUserMenuOpen} className="text-blue-700">
              <AccountCircle fontSize="large" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleUserMenuClose}
            >
              <MenuItem
                component={Link}
                href="/register"
                onClick={handleUserMenuClose}
              >
                Sign In
              </MenuItem>
              <MenuItem
                component={Link}
                href="/login"
                onClick={handleUserMenuClose}
              >
                Sign Up
              </MenuItem>
            </Menu>
          </Box>

          {/* Mobile Right Side */}
          {isMobile && (
            <Box className="flex items-center space-x-2">
              <IconButton
                onClick={handleUserMenuOpen}
                className="text-blue-700"
              >
                <AccountCircle fontSize="large" />
              </IconButton>
              <IconButton edge="end" onClick={handleDrawerToggle}>
                <MenuIcon className="text-blue-700" />
              </IconButton>

              {/* Mobile User Menu */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleUserMenuClose}
              >
                <MenuItem
                  component={Link}
                  href="/register"
                  onClick={handleUserMenuClose}
                >
                  Sign In
                </MenuItem>
                <MenuItem
                  component={Link}
                  href="/login"
                  onClick={handleUserMenuClose}
                >
                  Sign Up
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>

        {/* Scrolling Text Inside Header */}
        <Box
          sx={{
            backgroundColor: "#003366",
            color: "white",
            py: 0.5,
            overflow: "hidden",
            whiteSpace: "nowrap",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              px: 2,
              animation: "scrollText 15s linear infinite",
              fontWeight: "bold",
              fontSize: { xs: "20px", md: "16px" },
              letterSpacing: "1px",
            }}
          >
            Mount Glacier Alpine Adventure Trek and Tours
          </Box>
        </Box>
      </AppBar>

      <style jsx global>{`
        @keyframes scrollText {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>

      {/* Mobile Drawer */}
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
    </>
  );
}
