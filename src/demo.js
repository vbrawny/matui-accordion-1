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
import {
  actionProduct1,
  actionProduct2,
  actionProduct3,
  actionProduct4,
  actionProduct5,
  actionProduct6,
  actionProduct7,
  actionProduct8,
  actionProduct9,
  actionProduct10,
  actionProduct11,
  actionProduct12,
  actionProduct13,
  actionProduct14,
  actionProduct15,
  actionProduct16,
  actionProduct17,
  actionProduct18,
  actionProduct19,
  actionProduct20,
  actionProduct21,
  actionProduct22,
  actionProduct23,
  actionProduct24,
  actionProduct25,
  actionProduct26,
  actionProduct27
} from "./action-products";

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

  const onActionPlanChangeHnadler = (mstevt, evt) => {
    console.log("---evt--2--mstevt--", mstevt);
    console.log("---evt--2--evt--", evt);
    //{id: "1", name: "Acc my fnd"}
    //{id: "4", name: "mng strg csh"}
    setAccordionOne((state) => {
      let currState = state;
      console.log("--sub-before--", currState);
      let subchildobj = {};
      switch (evt.id) {
        case "1":
          subchildobj = actionProduct1;
          break;
        case "2":
          subchildobj = actionProduct2;
          break;
        case "3":
          subchildobj = actionProduct3;
          break;
        case "4":
          subchildobj = actionProduct4;
          break;
        case "5":
          subchildobj = actionProduct5;
          break;
        case "6":
          subchildobj = actionProduct6;
          break;
        case "7":
          subchildobj = actionProduct7;
          break;
        case "8":
          subchildobj = actionProduct8;
          break;
        case "9":
          subchildobj = actionProduct9;
          break;
        case "10":
          subchildobj = actionProduct10;
          break;
        case "11":
          subchildobj = actionProduct11;
          break;
        case "12":
          subchildobj = actionProduct12;
          break;
        case "13":
          subchildobj = actionProduct13;
          break;
        case "14":
          subchildobj = actionProduct14;
          break;
        case "15":
          subchildobj = actionProduct15;
          break;
        case "16":
          subchildobj = actionProduct16;
          break;
        case "17":
          subchildobj = actionProduct17;
          break;
        case "18":
          subchildobj = actionProduct18;
          break;
        case "19":
          subchildobj = actionProduct19;
          break;
        case "20":
          subchildobj = actionProduct20;
          break;
        case "21":
          subchildobj = actionProduct21;
          break;
        case "22":
          subchildobj = actionProduct22;
          break;
        case "23":
          subchildobj = actionProduct23;
          break;
        case "24":
          subchildobj = actionProduct24;
          break;
        case "25":
          subchildobj = actionProduct25;
          break;
        case "26":
          subchildobj = actionProduct26;
          break;
        default:
          subchildobj = actionProduct27;
          break;
      }
      currState = {
        ...currState,
        [mstevt.id]: {
          ...currState[mstevt.id],
          children: {
            ...currState[mstevt.id].children,
            [evt.id]: {
              ...currState[mstevt.id].children[evt.id],
              children: subchildobj
            }
            //children: subchildobj
          }
          //actionPlans1
        }
      };
      console.log("--sub-after--", currState);
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
              <div>
                {accordionOne[val].children &&
                  Object.keys(accordionOne[val].children).map((preval) => {
                    console.log("--dat--", accordionOne[val].children);
                    return (
                      <Accordion
                        onChange={() =>
                          onActionPlanChangeHnadler(
                            accordionOne[val],
                            accordionOne[val].children[preval]
                          )
                        }
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography className={classes.heading}>
                            {accordionOne[val].children[preval].name}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {/* --- level 3 --- */}

                          <div>
                            {accordionOne[val].children[preval].children &&
                              Object.keys(
                                accordionOne[val].children[preval].children
                              ).map((smallVal) => {
                                console.log(
                                  "--dat--",
                                  accordionOne[val].children[preval].children
                                );
                                return (
                                  <Accordion>
                                    <AccordionSummary
                                      expandIcon={<ExpandMoreIcon />}
                                      aria-controls="panel1a-content"
                                      id="panel1a-header"
                                    >
                                      <Typography className={classes.heading}>
                                        {
                                          accordionOne[val].children[preval]
                                            .children[smallVal].name
                                        }
                                      </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                      <p>Products</p>
                                    </AccordionDetails>
                                  </Accordion>
                                );
                              })}
                          </div>

                          {/*-----------------------------*/}
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
