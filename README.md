# 2021-09-04

## 개발 환경 구축하기

1. Node.js 설치
  
   JavaScript로 브라우저 밖에서 서버를 구축하는 등의 코드를 실행 할 수 있게 해주는 런타임 환경. (npm도 같이 설치가 됨)
  
2. Create React App

   my-app 이라는 리액트 프로젝트 생성하고 해당 디렉토리로 이동 후 실행시키면 기본적으로 localhost:3000에서 프로젝트를 볼 수 있음

 ![image](https://user-images.githubusercontent.com/90030675/132092354-a8cf5820-ba97-40d9-8a18-521101edf4fd.png)
 
   

3. 강의를 따라하기 위해 기본적으로 제공되는 src/ 폴더의 app.css와 index.css 삭제


4. 빌드 할 때는 npm run build 명령어로 build 폴더 생성

  -create-react-app이 프로덕션 환경에서 사용되는 앱을 만들기 위해서 불필요하게 용량을 차지하는 정보들을 삭제해서 만듬
  
5. npx serve -s build 로 build 디렉토리를 Document Root로 하여 서버를 실행


# 2021-09-06

## 컴포넌트와 props


```
class Subject extends Component {
  render() {
    return(
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Subject title="WEB" sub="world wide web!"></Subject>
          <Subject title="APP" sub="apppppp"></Subject>
          <TOC></TOC>
          <Content title="HTML" desc="HTML is HyperText MarkUp"></Content>
      </div>
    );
  }
}
```

 다음과 같은 방식으로 props를 사용한다.
 props는 부모 컴포넌트로부터 자식 컴포넌트로 전달된 데이터를 의미한다.
 원하는 값을 입력하여 한 컴포넌트를 여러가지 출력으로 사용 가능.
 
 #### props는 state와 달리 read-only 라는 것에 주의
 
 

 
 ## react-developer tools
 
 
 크롬 확장 프로그램인 react-developer tools를 이용하여 아래와 같은 화면을 볼 수 있다.
 
 ![image](https://user-images.githubusercontent.com/90030675/132222137-1f0b3047-2adc-4da0-aaab-06fc81b64bed.png)
 
 
 ## Component를 파일로 분리하기
 
 
![image](https://user-images.githubusercontent.com/90030675/132224366-e8b31ca6-fe6e-4a34-b2f8-85fb9e449b0f.png)


각각의 컴포넌트들을 파일로 분리하고 App.js에 분리시킨 파일들을 import 하여 사용 가능.


# 2021-09-07

## State

state는 컴포넌트 자기 자신이 가지고 있는 값으로 변화가 필요할 경우 setState()로 값 변경 가능.

## constructor()

render() 보다 먼저 실행이 되면서 해당 컴포넌트를 초기화 시켜주는 부분

## key

여러개의 엘리먼트를 자동으로 생성하는 경우 아래와 같은 에러가 발생 하므로 각각의 항목들은 key라고 하는 props를 가지고 있어야 함.
애플리케이션에서 사용하는것이라기 보단 리액트 내부적으로 필요한 설정

![image](https://user-images.githubusercontent.com/90030675/132269317-c795eb2e-648a-4591-ae1b-0542f490cc4d.png)

![image](https://user-images.githubusercontent.com/90030675/132269469-8d71df8b-1869-474c-87d2-d2f2779524fe.png)


 

