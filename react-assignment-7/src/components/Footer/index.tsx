import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav" sx={{ bottom: 0, top: "unset" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h6" component="div">
              Student Registration
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </footer>
  );
};

export default Footer;
