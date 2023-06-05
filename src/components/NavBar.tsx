import { Box, Typography, TypographyProps, styled } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

export default function NavBar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        padding: "1em",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: "200",
        boxShadow: "0 0 10px rgba(0,0,0,.09)",
        backgroundColor: "white",
      }}
    >
      <NavItem variant="h5">limbu.dev</NavItem>
      <Box
        sx={{
          display: "flex",
          gap: "1em",
          alignItems: "center",
        }}
      >
        <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
          <NavItem>Home</NavItem>
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
          <NavItem>About</NavItem>
        </ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
          <NavItem>Projects</NavItem>
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
          <NavItem>Contact</NavItem>
        </ScrollLink>
        <NavItem>Resume</NavItem>
      </Box>
    </Box>
  );
}

const NavItem = styled(Typography)<TypographyProps>(({ theme }) => ({
  display: "inline",
  fontWeight: "bold",
  cursor: "pointer",
  "&:hover": {
    color: "rgb(10, 123, 245)",
  },
}));
