import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const GreenCheckbox = withStyles({
  root: {
    color: "var(--theme-color-2)",
    "&$checked": {
      color: "var(--theme-color-2)"
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

export default function CheckboxSelector({ label }) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <GreenCheckbox
            checked={state.checkedG}
            onChange={handleChange}
            name="checkedG"
          />
        }
        label={label}
      />
    </FormGroup>
  );
}

{
  /* <FormControlLabel
control={
  <Checkbox
    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
    checkedIcon={<CheckBoxIcon fontSize="small" />}
    name="checkedI"
  />
}
/> */
}
