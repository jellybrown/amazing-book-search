# Amazing Book Search

<br>

## ❗️ 프로젝트 목적

<br>

인터넷에서 책을 고를 때, 목차나 요약 내용을 보게 됩니다.<br>
이 어플리케이션은 기존 인터넷서점과 다르게 펼침 기능으로 요약 내용을 보여줍니다.<br>
상세 페이지로 들어가는 시간을 절약해 사용자의 편의성을 높여주고, <br>
실제로 구매할 수 있다면 구매 효과도 올릴 수 있지않을까 생각됩니다. <br>

<br>

---

<br>

## ❗️ 프로젝트 기능

<br>

### 1. Context api를 이용한 상태관리

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

### 2. Naver api를 이용한 검색 서비스

<br>

- axios를 이용해서 검색기능을 구현했습니다.

```js
const searchBook = async (term) => {
  try {
    const result = await axios.get("/v1/search/book.json", {
      headers: {
        "X-Naver-Client-Id": process.env.REACT_APP_CLIENT_ID,
        "X-Naver-Client-Secret": process.env.REACT_APP_CLIENT_SECRET,
      },
      params: {
        query: term,
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};
```

<br>

- 가져온 데이터를 \<b>태그를 없애기 위해 정규표현식을 이용하고, 가격에는 콤마를 붙였습니다.

```js
// BookList 컴포넌트

const bTagRegex = /<\/?b[^>]*?>/gi;
...
return (
    ...
          const filteredTitle = book.title.replace(bTagRegex, "");
          const filteredAuthor = book.author.replace(bTagRegex, "");
          const filteredPublisher = book.publisher.replace(bTagRegex, "");
          const filteredDesc = book.description.replace(bTagRegex, "");
          const commaPrice = parseInt(book.discount, 10).toLocaleString();
)
```

<br>

- Day.js를 이용하여 날짜형식을 변경했습니다. (YYYYMMDD -> YYYY.MM.DD)

```js
// BookList 컴포넌트

const dotPubdate = dayjs(book.pubdate).format("YYYY.MM.DD");
```

<br>

---

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

---

<br>

## ❗️ 사용된 기술 & 라이브러리

<br>

### 1. React (Create-React-App)

- virtual DOM을 이용해 상태를 비교하고 렌더링을 하는 react를 이용했습니다.

### 2. Context api

- 간단한 비동기 작업이라 context api를 이용했습니다.

### 3. Naver api + axios

- 책 검색기능을 위해 사용했습니다.

### 4. Design library (material-ui)

- html과 css에 많은 시간이 걸리지 않도록 디자인 라이브러리를 이용했습니다.

### 5. Styled-component

- placeholder나 hover와 같은 속성을 간단히 지정하기 위해(scss처럼) 사용했습니다.

### 6. Day.js

- 출간일의 YYYYMMDD는 날짜구분이 되지않아서 구분을 위해 이용했습니다.
  <br>
