# Amazing Book Search

<br>

## ❗️ 프로젝트 소개

<br>

- 사용자의 편의성을 생각하며 만든 도서 검색 사이트

<br>

---

<br>

## ❗️ 프로젝트 기간

<br>

- 2021.01.21 ~ 2021.01.30 (1인)

<br>

## ❗️ 사용된 기술 & 라이브러리

<br>

- React (Create-React-App)

- Context api : 상태 관리

- Naver api + axios : 검색

- Design library (material-ui) : 검색 리스트

- Styled-component : scss처럼 활용

- Day.js : 날짜형식 변경

  <br>

---

<br>

## ❗️ 프로젝트 구현

<br>

### 1. context api를 이용한 상태관리

<br>

- 책 검색 내용을 다른 컴포넌트에서 렌더링 할 수 있도록 배열로 context에 저장했습니다.

```js
// SeachHeader 컴포넌트

const onSearch = (e) => {
  e.preventDefault();

  searchBook(term)
    .then((response) => setBooks(response.data.items))
    .catch((error) => console.log(error));
};
```

<br>

- 검색 결과로 저장된 내용은 다른 컴포넌트에서 map함수를 이용하여 렌더링 했습니다.

```js
// BookList 컴포넌트

const BookList = () => {
  const [books, setBooks] = useContext(BookContext);
  ...
  ...
    return (
    <>
      ...

        {books?.map((book) => {
            ...
        }

        ...
    </>
}

```

<br>

### 2. open api를 이용한 검색 서비스

<br>

- naver에서 제공하는 api를 이용해서 검색기능을 구현했습니다.

```js
const instance = axios.create({
  headers: {
    "X-Naver-Client-Id": process.env.REACT_APP_CLIENT_ID,
    "X-Naver-Client-Secret": process.env.REACT_APP_CLIENT_SECRET,
  },
});

const searchBookByQuery = (term) => {
  return instance.get("/v1/search/book.json", {
    params: {
      query: term,
    },
  });
};

// searchBook: 검색시 실행되는 함수
const searchBook = async (term) => {
  try {
    const result = await searchBookyByQuery(term);
    return result;
  } catch (error) {
    console.error(error);
  }
};
```

<br>

- 가져온 데이터를 가공하여 렌더링 했습니다.

```js
// BookList 컴포넌트

const bTagRegex = /<\/?b[^>]*?>/gi;

// 매개변수로 받은 data를 가공하여 return하는 filter 함수
const filter = (bookData) => {
  const title = bookData.title.replace(bTagRegex, "");
  //...
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
```

```js
// filter함수를 이용해서 받아온 data를 렌더링
  return (
    ...
      {books?.map((book) => {
          const filteredData = filter(book);

          return (
          //...
          <span>{filteredData.author}</span>
          //...
      }
  )

```

<br>

<br>

---

<br>

## ❗️ 링크

<br>

<a href="http://125.176.40.12:9090/">구경하러 가기</a>

<br>

## ❗️ 프로젝트 결과화면

<br>

<img src="https://github.com/jellybrown/amazing-book-search/blob/master/book-search.gif" width="800">

<br>

<br>

---

<br>

## ❗️ 만들면서 힘들었던 점

<br>

### CORS 보안정책

검색시 400번대 에러가 뜨는 CORS(Cross-Oring-Resource-Security)를 마주치게 되었는데,
구글을 통해 몇가지 방법이 있다는 것을 알았습니다.<br>
클라우드나 서버에 대해 알지 못해서 package.json에 proxy를 설정하여 개발환경에서 검색가능하게
해결했습니다.

<br>

<br>
