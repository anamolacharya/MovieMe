import React, { useState } from "react";
import Select from "react-select";
import MoviePage from "./MoviePage";
import "../css/Nav.css";

function SelectRegion() {
  const countrylist = [
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

  const [result, setResult] = useState("");
  //Adding a handler .(The handler stores the value of whatever the user selects)
  const Handler = (e) => {
    setResult(e.value);
  };

  return (
    <div>
      <Select
        className="region_search"
        options={countrylist}
        onChange={Handler}
      />
      {/* <MoviePage resultss={result} /> */}
    </div>
  );
}
export default SelectRegion;

// const defaultChoice = { value: "Default", label: "Choose Country" };

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       width: "17ch",
//     },
//   },
// }));

// export default function SelectRegion() {
//   const classes = useStyles();
//   const [currency, setCurrency] = React.useState("Default");

//   const handleChange = (event) => {
//     setCurrency(event.target.value);
//   };

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <div>
//         <TextField
//           className="select"
//           id="outlined-select-currency"
//           style={{ background: "white" }}
//           select
//           value={currency}
//           onChange={handleChange}
//           defaultValue="Success"
//         >
//           <MenuItem
//             key={defaultChoice.value}
//             value={defaultChoice.value}
//             disabled
//           >
//             {defaultChoice.label}
//           </MenuItem>
//           {currencies.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//       </div>
//     </form>
//   );
// }

// <div>
//   <select id="country">
//     <option value="US">United States</option>
//     <option value="BR">Brazil</option>
//     <option value="CA">Canada</option>
//     <option value="UK">United Kingdom</option>
//     <option value="AU">Australia</option>
//     <option value="ZA">South Africa</option>
//     <option value="KR">Korea</option>
//     <option value="JP">Japan</option>
//     <option value="BR">Brazil</option>
//     <option value="BR">Brazil</option>
//   </select>
//   ;
// </div>
