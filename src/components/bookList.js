import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { BookContext } from "../bookContext";

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
  const [books, setBooks] = useContext(BookContext);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div className={classes.root}>
        {books?.map((book) => console.log(book))}

        {books?.map((book) => (
          <Accordion
            key={book.isbn}
            expanded={expanded === `panel${book.isbn}`}
            onChange={handleChange(`panel${book.isbn}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                <img src={book.image} alt={book.title} />
              </Typography>
              <Typography className={classes.secondaryHeading}>
                <div>
                  <ul>
                    <li>
                      <span>{book.title}</span>
                      <span> | </span>
                      <span>{book.author}</span>
                    </li>
                    <li>
                      <span>가격: {book.discount}</span>
                    </li>
                    {/* 가격 문자열 없애고 ,찍기 */}
                    <li>
                      <span>출판사: {book.publisher}</span>
                    </li>
                    <li>
                      <span>출간일: {book.pubdate}</span>
                    </li>
                  </ul>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>{book.description}</p>
                <span>책 정보 자세히 보기 (naver로 연결)</span>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default BookList;
