import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  const [accordionOne, setAccordionOne] = useState({
    "1": {
      id: 1,
      name: "Opt Liqu"
    },
    "2": {
      id: 2,
      name: "Opt WrkCpt"
    },
    "3": {
      id: 3,
      name: "Mit Frd Rs"
    },
    "4": {
      id: 4,
      name: "Enh Rep"
    },
    "5": {
      id: 5,
      name: "Impr Trs Ctrl"
    },
    "6": {
      id: 6,
      name: "Red Cst Strm Ops"
    }
  });

  return (
    <div className={classes.root}>
      {Object.keys(accordionOne).map((val) => {
        console.log("--dat--", accordionOne);
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                {accordionOne[val].name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails></AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
