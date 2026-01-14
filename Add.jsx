import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    EmpName: "",
    designation: "",
    empId: "",
    img_url: "",
  });

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const addData = (e) => {
    e.preventDefault(); // prevent form submission page reload
    fetch("http://localhost:3001/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Employee added:", data);
        navigate("/"); // go back to home page
      })
      .catch((err) => console.log("Error adding employee:", err));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "500px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Employee Name"
          name="EmpName"
          value={inputs.EmpName}
          onChange={inputHandler}
          fullWidth
        />

        <TextField
          variant="outlined"
          placeholder="Designation"
          name="designation"
          value={inputs.designation}
          onChange={inputHandler}
          fullWidth
        />

        <TextField
          variant="outlined"
          placeholder="Employee ID"
          name="empId"
          value={inputs.empId}
          onChange={inputHandler}
          fullWidth
        />

        <TextField
          variant="outlined"
          placeholder="Photo URL"
          name="img_url"
          value={inputs.img_url}
          onChange={inputHandler}
          fullWidth
        />

        <Button
          variant="contained"
          color="secondary"
          onClick={addData}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Add;
