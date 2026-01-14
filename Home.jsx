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
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ FIX

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // ✅ FIX

  useEffect(() => {
    axios
      .get("http://localhost:3001/view")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then((res) => {
        alert(res.data.message);
        setData(data.filter((item) => item._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Mar">
      <Grid container spacing={6}>
        {data.map((val) => (
          <Grid item xs={12} sm={6} md={4} key={val._id}>
            <Card sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                <img src={val.img_url} width="100%" alt="employee" />
                <Typography gutterBottom variant="h5">
                  {val.EmpName}
                </Typography>
                <Typography>{val.designation}</Typography>
                <Typography>{val.empId}</Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteEmployee(val._id)}
                >
                  Delete
                </Button>

                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={() => navigate("/add", { state: val })}
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
