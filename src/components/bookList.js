import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const BookList = () => {
  const books = [
    {
      id: 1,
      name: "첫번째",
      price: "30,000",
    },
    {
      id: 2,
      name: "두번째",
      price: "25,000",
    },
    {
      id: 3,
      name: "세번째",
      price: "33,000",
    },
  ];
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div className={classes.root}>
        {books.map((book) => (
          //   <li key={book.id}>
          //     <span>이름 {book.name}</span>
          //     <span>가격 {book.price}</span>
          //   </li>
          <Accordion
            key={book.id}
            expanded={expanded === `panel${book.id}`}
            onChange={handleChange(`panel${book.id}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>책 이미지</Typography>
              <Typography className={classes.secondaryHeading}>
                {book.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default BookList;