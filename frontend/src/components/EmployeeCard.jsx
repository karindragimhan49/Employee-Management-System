import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import { Link } from "react-router-dom";

const EmployeeCard = ({ employee, onDelete }) => {
  const handleDelete = () => {
    onDelete(employee._id);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/src/assets/user.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {employee.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {employee.employeeID}
            <br />
            {employee.address}
            <br />
            {employee.nic}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary" onClick={handleDelete}>
          Delete
        </Button>

        <Link
          className="btn btn-outline-warning float-right"
          to={`/showdetails/${employee._id}`}
        >
          Details
        </Link>
      </CardActions>
    </Card>
  );
};

export default EmployeeCard;
