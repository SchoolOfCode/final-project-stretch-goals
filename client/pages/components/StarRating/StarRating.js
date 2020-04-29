import React, { useState } from "react";
import PropTypes from "prop-types";
//import { withStyles } from '@material-ui/core/styles';
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
//import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function StarRating({ size }) {
  const [starValue, setStarValue] = useState(0);

  function handleClick(e) {
    setStarValue(e.target.value);
  }

  return (
    <>
      <div>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="stars"
            size={size}
            defaultValue={0}
            precision={0.5}
            onChange={handleClick}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
          />
        </Box>
      </div>
    </>
  );
}
