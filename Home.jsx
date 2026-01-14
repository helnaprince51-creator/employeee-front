import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import "../App.css";

const Home = () => {
  const [data, setData] = useState([]);

  // Fetch employees from backend
  const fetchData = () => {
    fetch("http://localhost:3001/get")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log("Error fetching data:", err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Delete employee
  const handleDelete = (id) => {
    fetch(`http://localhost:3001/delete/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => fetchData())
      .catch((err) => console.log("Error deleting employee:", err));
  };

  // Update employee (example: append "-U" to empId)
  const handleUpdate = (id) => {
    const employee = data.find((emp) => emp.id === id);
    if (!employee) return;

    const updatedData = { ...employee, empId: employee.empId + "-U" };

    fetch(`http://localhost:3001/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then(() => fetchData())
      .catch((err) => console.log("Error updating employee:", err));
  };

  return (
    <div className="Mar">
      <Grid container spacing={6}>
        {data.map((val) => (
          <Grid item xs={12} sm={6} md={4} key={val.id}>
            <Card sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                <img
                  src={val.img_url}
                  className="img-fluid rounded-start"
                  width="100%"
                  alt="Employee"
                />
                <Typography gutterBottom variant="h5">
                  {val.EmpName}
                </Typography>
                <Typography component="div">{val.designation}</Typography>
                <Typography component="div">{val.empId}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(val.id)}
                >
                  Delete
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={() => handleUpdate(val.id)}
                >
                  Update
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
