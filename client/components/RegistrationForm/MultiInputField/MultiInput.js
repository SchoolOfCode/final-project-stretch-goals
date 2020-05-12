import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "40ch",
      background: "white",
    },
  },
}));

export default function MultilineTextFields({ onChange, name }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          name={name}
          onChange={onChange}
          id="outlined-textarea"
          label="Your details"
          placeholder="Placeholder"
          multiline
          variant="outlined"
          rows={4}
        />
      </div>
    </div>
  );
}
