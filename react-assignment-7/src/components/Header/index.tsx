import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Courses", to: "/course" },
  { name: "Students", to: "/student" },
];

const Header: FC = () => {
  return (
    <header>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" component="div">
              Student Registration
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Link to={item.to}>
                  <Button key={item.to} sx={{ color: "#fff" }}>
                    {item.name}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

export default Header;
