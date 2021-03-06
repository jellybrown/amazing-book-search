import React, { useCallback, useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { BookContext } from "../bookContext";
import dayjs from "dayjs";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "20%",
    flexShrink: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));
const bTagRegex = /<\/?b[^>]*?>/gi;

const BookList = () => {
  const [books, setBooks] = useContext(BookContext);

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = useCallback(
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  const filter = (bookData) => {
    const title = bookData.title.replace(bTagRegex, "");
    const author = bookData.author.replace(bTagRegex, "");
    const publisher = bookData.publisher.replace(bTagRegex, "");
    const desc = bookData.description.replace(bTagRegex, "");
    const price = parseInt(bookData.discount, 10).toLocaleString();
    const pubdate = dayjs(bookData.pubdate).format("YYYY.MM.DD");
    return {
      title,
      author,
      publisher,
      desc,
      price,
      pubdate,
    };
  };

  return (
    <>
      <div className={classes.root}>
        {books?.map((book) => {
          const filteredData = filter(book);
          return (
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
                <Typography component={"div"} className={classes.heading}>
                  <img src={book.image} alt={book.title} />
                </Typography>
                <Typography
                  component={"div"}
                  className={classes.secondaryHeading}
                >
                  <div>
                    <ul>
                      <li style={{ marginBottom: "1em" }}>
                        <span
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: "bold",
                          }}
                        >
                          {filteredData.title}
                        </span>
                        <span> | </span>
                        <span>{filteredData.author}</span>
                      </li>
                      <li>
                        <span>{`가격: ${filteredData.price}원`}</span>
                      </li>
                      <li>
                        <span>출판사: {filteredData.publisher}</span>
                      </li>
                      <li>
                        <span>출간일: {filteredData.pubdate}</span>
                      </li>
                    </ul>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component={"div"}>
                  <span
                    style={{
                      display: "block",
                      padding: "1em",
                      margin: "0 2em",
                      borderTop: "1px solid #eee",
                    }}
                  ></span>
                  <div style={{ padding: "0 1em", fontSize: "0.9rem" }}>
                    {filteredData.desc}
                  </div>
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: "0.8em",
                      display: "block",
                      textAlign: "right",
                      margin: "1.5em 1em",
                      marginRight: "0.5em",
                      color: "#333",
                    }}
                  >
                    자세히 보기 (naver로 연결)
                  </a>
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </>
  );
};

export default BookList;
