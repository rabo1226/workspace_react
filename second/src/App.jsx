import Content from "./Content"
import Side from "./Side"

//html코드는 반드시 하나의 루트 트그 안에 포함되어야 함  <>html코드</>
function App() {
  //구조분해할당 - 배열, 객체의 데이터를 편하게 변수에 할당하는 문법

  //배열 값 사용 기본 방식
  const arr = [1, 3, 5];
  const v1 = arr[0];
  const v2 = arr[1];
  const v3 = arr[2];

  //배열을 구조분해할당 문법으로 사용
  const [a, b, c] = arr;   // a = 1, b = 3, c = 5
  const [aa, bb] = arr; // aa = 1, bb = 3, 5는 안들어간다!
  const [aaa, bbb, ccc, ddd] = arr; //aaa = 1, bbb = 3, ccc = 5, ddd = undefined

  //객체 값 사용 기본 방식
  const student = {
    name : 'hong',
    year : 3,
    score : 80
  }

  const name1 = student.name;
  const year1 = student.year;

  //객체를 구조분해할당 문법으로 사용
  //객체 구조분해할당 시 변수명은 반드시 키값가 동일하게!!!!
  const {name, year, score} = student;  //name = hong, year = 3, score = 80
  //const {name, year} = student;  //name = hong, year = 3
  //const {score, year} = student;  //score = 80, year = 3
  //const {name, year, score, address} = student;  //name = hong, year = 3, score = 80, address = undefined
  

  return (
    <>
      <Content />
      <Side />
      <Header />
      <Header />
      <div>hello</div>
      <Footer />
    </>
  )
}

function Header(){
  //자바스크립트
  return(
    //html코드
    <div>헤더입니다~</div>
  )
}

const Footer = () => {
  return(
    <div>~푸터영역입니다~</div>
  )
}

export default App
