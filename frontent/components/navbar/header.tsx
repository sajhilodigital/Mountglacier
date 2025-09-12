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
  Menu,
  MenuItem,
  useMediaQuery,
  Paper,
  Popper,
  Fade,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  MapPin,
  Briefcase,
  Package,
  User,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import { LogoutButton } from "../form/Logout";
import axiosInstance from "@/lib/axiosInstanstance";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [packageAnchor, setPackageAnchor] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const router = useRouter()

 const [isAuthenticated, setIsAuthenticated] = useState(false);

 useEffect(() => {
   const checkAuth = async () => {
     try {
       const res = await axiosInstance.get("/auth/me"); // cookies sent automatically
       if (res.status === 200) {
         setIsAuthenticated(true);
       } else {
         setIsAuthenticated(false);
       }
     } catch (err) {
       console.log("Auth check error:", err);
       setIsAuthenticated(false);
     } finally {
       setLoading(false);
     }
   };

   checkAuth();
 }, [router]);


  const iconColor = "#003366";

  // Loading screen effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500); // 3.5s loading
    return () => clearTimeout(timer);
  }, []);

  // Scroll effect only on home page
  useEffect(() => {
    if (!isHomePage) return;
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

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleUserMenuClose = () => setAnchorEl(null);
  const handlePackageToggle = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setPackageAnchor(packageAnchor ? null : event.currentTarget);
  };

  // Loading screen
  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-br from-[#003366] to-[#66b2ff] z-50">
        <div className="flex flex-col items-center">
          <Image
            src="/logo1.png"
            alt="logo"
            width={140}
            height={70}
            className="animate-logoSlide"
          />
          <h1 className="text-white text-2xl md:text-3xl mt-6 font-bold text-center animate-textSlide delay-300">
            Welcome to Mount Glacier Alpine Adventure Trek and Tours
          </h1>
          <p className="text-white mt-2 opacity-80 animate-textSlide delay-500">
            Explore Nepal, Bhutan & Tibet with Us
          </p>
        </div>

        <style>{`
          @keyframes logoSlide {
            0% { opacity: 0; transform: translateY(50px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes textSlide {
            0% { opacity: 0; transform: translateY(80px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-logoSlide {
            animation: logoSlide 1s ease-out forwards;
          }
          .animate-textSlide {
            animation: textSlide 1s ease-out forwards;
          }
          .animate-textSlide.delay-300 {
            animation-delay: 0.3s;
          }
          .animate-textSlide.delay-500 {
            animation-delay: 0.5s;
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      {/* Top scrolling text */}
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

      {/* AppBar / Navbar */}
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
          transition: "all 0.3s ease",
          zIndex: 50,
        }}
        className="px-4 md:px-16"
      >
        <Toolbar className="w-full flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo1.png"
              alt="logo"
              width={80}
              height={40}
              className="rounded-md"
            />
          </Link>

          {!isMobile && (
            <Box
              className="hidden md:flex space-x-4 font-medium items-center"
              style={{ color: isHomePage && !scrolled ? "white" : iconColor }}
            >
              {menuItems.map((item) =>
                !item.subItems ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-2 py-1 hover:text-blue-700"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Box key={item.label} className="relative group px-2 py-1">
                    <Box className="flex items-center cursor-pointer">
                      <span>{item.label}</span>
                      <ChevronDown
                        size={16}
                        color={isHomePage && !scrolled ? "white" : iconColor}
                        className="ml-1 transition-transform duration-300 group-hover:rotate-180"
                      />
                    </Box>
                    <Box className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform scale-y-0 group-hover:scale-y-100 origin-top">
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
          )}

          <Box className="flex items-center space-x-6 md:space-x-8">
            {/* Book Now */}
            {!isMobile && (
              <Button
                component={Link}
                href="/booknow"
                variant="contained"
                sx={{
                  backgroundColor: "blue",
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#4fc3f7" },
                  px: 3,
                  py: 1,
                }}
              >
                Book Now
              </Button>
            )}

            {/* User Icon */}
            <IconButton
                onClick={handleUserMenuOpen}
                className="rounded-full border-2 border-gray-300  !ml-8 hover:border-gray-400"
                sx={{
                  width: 44,
                  height: 44,
                  p: 1,
                  backgroundColor: "#ffcc00",
                  "&:hover": { backgroundColor: "#ffb300" },
                }}
              >
                <User size={24} color={iconColor} />
              </IconButton>


            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleUserMenuClose}
              >
              {isAuthenticated ? (
                <LogoutButton />
              ) : (
                <>
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
                
                </>
              )}
             
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <Box className="fixed bottom-0 left-0 w-full h-16 bg-[#e6f2ff] shadow-t z-40">
          <Box className="relative h-full flex justify-between items-center px-4 max-w-md mx-auto w-full">
            <Link
              href="/"
              className="flex flex-col items-center text-center w-1/5"
              style={{ color: iconColor }}
            >
              <Home size={22} color={iconColor} />
              <span className="text-xs mt-1">Home</span>
            </Link>

            <Link
              href="/destination"
              className="flex flex-col items-center text-center w-1/5"
              style={{ color: iconColor }}
            >
              <MapPin size={22} color={iconColor} />
              <span className="text-xs mt-1">Destination</span>
            </Link>

            {/* Center floating Book button */}
            <Box className="absolute -top-6 left-1/2 transform -translate-x-1/2 pointer-events-none">
              <Link
                href="/booknow"
                className="pointer-events-auto bg-blue-600 text-white rounded-full p-2 shadow-lg animate-pulse hover:scale-110 transition-transform flex flex-col items-center w-16 h-16 justify-center"
              >
                <BookOpen size={24} color="white" />
                <span className="text-[10px] font-bold">Book</span>
              </Link>
            </Box>

            <Link
              href="/services"
              className="flex flex-col items-center text-center w-1/5"
              style={{ color: iconColor }}
            >
              <Briefcase size={22} color={iconColor} />
              <span className="text-xs mt-1">Services</span>
            </Link>

            <Box className="flex flex-col items-center text-center w-1/5 relative">
              <Button
                onClick={handlePackageToggle}
                className="flex flex-col items-center p-0"
              >
                <Package size={22} color={iconColor} />
                <span className="text-xs mt-1 flex items-center">
                  Packages
                  <ChevronDown
                    size={14}
                    color={iconColor}
                    className={`ml-1 transition-transform duration-300 ${
                      packageAnchor ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </Button>
              <Popper
                open={Boolean(packageAnchor)}
                anchorEl={packageAnchor}
                placement="top"
                transition
                style={{ zIndex: 100 }}
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={250}>
                    <Paper className="p-2 rounded-lg shadow-lg">
                      {menuItems
                        .find((i) => i.label === "Tour Packages")
                        ?.subItems?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                            onClick={() => setPackageAnchor(null)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                    </Paper>
                  </Fade>
                )}
              </Popper>
            </Box>
          </Box>
        </Box>
      )}

      <style>{`
        @keyframes scrollText {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-scrollText { animation: scrollText 45s linear infinite; }
      `}</style>
    </>
  );
}
