import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  actionPlans1,
  actionPlans2,
  actionPlans3,
  actionPlans4,
  actionPlans5,
  actionPlans6
} from "./action-plans";

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

  const onChangeHandler = (evt) => {
    console.log("-e--v--t", evt);
    //{id: 1, name: "Opt Liqu"}
    setAccordionOne((state) => {
      let currState = state;
      console.log("--before--", currState);
      let childobj = {};
      switch (evt.id) {
        case 1:
          childobj = actionPlans1;
          break;
        case 2:
          childobj = actionPlans2;
          break;
        case 3:
          childobj = actionPlans3;
          break;
        case 4:
          childobj = actionPlans4;
          break;
        case 5:
          childobj = actionPlans5;
          break;
        default:
          childobj = actionPlans6;
          break;
      }
      /*
        "1": {
      id: 1,
      name: "Opt Liqu"
    }
      */
      currState = {
        ...currState,
        [evt.id]: {
          ...currState[evt.id],
          children: childobj //actionPlans1
        }
      };
      console.log("--after--", currState);
      return currState;
    });
  };

  return (
    <div className={classes.root}>
      {Object.keys(accordionOne).map((val) => {
        console.log("--dat--", accordionOne);
        return (
          <Accordion onChange={() => onChangeHandler(accordionOne[val])}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                {accordionOne[val].name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {accordionOne[val].children &&
                Object.keys(accordionOne[val].children).map((preval) => {
                  console.log("--dat--", accordionOne[val].children);
                  return (
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          {accordionOne[val].children[preval].name}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails></AccordionDetails>
                    </Accordion>
                  );
                })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
