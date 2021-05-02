import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import "../css/Nav.css";

const currencies = [
  {
    value: "US",
    label: "USA",
  },
  {
    value: "BR",
    label: "Brazil",
  },
  {
    value: "AU",
    label: "Australia",
  },
  {
    value: "UK",
    label: "United Kingdom",
  },
  {
    value: "ZA",
    label: "South Africa",
  },
  {
    value: "IN",
    label: "India",
  },
];

const defaultChoice = { value: "Default", label: "Choose Country" };

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "17ch",
    },
  },
}));

export default function SelectRegion() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("Default");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          className="select"
          id="outlined-select-currency"
          style={{ background: "white" }}
          select
          value={currency}
          onChange={handleChange}
          defaultValue="Success"
        >
          <MenuItem
            key={defaultChoice.value}
            value={defaultChoice.value}
            disabled
          >
            {defaultChoice.label}
          </MenuItem>
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
