//Write your missing code here



import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Typography variant="h6">
          Employee App
        </Typography>

        <div>
          <Button
            color="inherit"
            component={Link}
            to="/"
          >
            Home
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/add"
          >
            Add Employee
          </Button>
        </div>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
