# 2021-09-09

## 1.  Hello World

```
ReactDOM.render(
    <h1>React!!</h1>,
  document.getElementById('root')
);

```

## 2. JSX 소개

- JavaScript를 확장한 문법으로 JSX는 React 'Element'를 생성한다.

- 중괄호 안에 유효한 모든 JavaScript 표현식을 넣을 수 있다.

```

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName : 'Harper',
  lastName : 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}
  </h1>
)

ReactDOM.render(
    element,
  document.getElementById('root')
);
```

- 속성에 JavaScript 표현식을 삽입할 때 중괄호 주변에 따옴표(문자열 값에 사용) 또는 중괄호(표현식에 사용)중 하나만 사용 해야 한다.

- 태그가 비어있다면 XML처럼 />로 닫아야 한다.



## 엘리멘트 렌더링

- 엘리먼트는 화면에 표시할 내용을 기술

```
const element = <h1>Hello, React</h1>;
```

- React 엘리먼트는 불변객체로 생성한 이후에는 해당 엘리먼트의 자식이나 속성을 변경할 수 없다.

- 현재까지의 내용으로 UI를 업데이트하는 방법은 새로운 엘리먼트를 생성하고 이를 ReactDOM.render()로 전달 하는 것

```
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

## Component와 Props

### 함수 컴포넌트

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### 클래스 컴포넌트

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

- 두 가지 유형의 컴포넌트는 동일하다.

### 컴포넌트 렌더링

```

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);

```

1. "<Welcome name="Sara" />" 엘리먼트로 ReactDOM.render()를 호출
2. React는 '{name: 'Sara'}'를 props로 하여 Welcome 컴포넌트를 호출
3. Welcome 컴포넌트는 결과적으로 '<h1>Hello, Sara</h1>' 엘리먼트를 반환
4. React DOM은 '<h1>Hello, Sara</h1>' 엘리먼트와 일치하도록 DOM 업데이트


- //기존 앱에 React를 통합하는 경우 작은 컴포넌트부터 시작해서 뷰 계층 상단으로 올라가면서 점진적으로 작업 해야 할 수도 있음.

- props는 읽기 전용


# State와 생명주기

## 함수에서 클래스로 변환하기

1. React.Component를 확장하는 동일한 이름의 ES6 class를 생성
2. render()라고 불리는 빈 메서드를 추가
3. 함수의 내용을 render() 메서드 안으로 옮김
4. render() 내용 안에 있는 props를 this.props로 변경
5. 남아있는 빈 함수 선언을 삭제

```
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

## State 주의사항

1. 직접 State를 수정하지 않기
    - this.state를 지정할 수 있는 유일한 공간은 바로 constructor 이다

2. State 업데이트는 비동기적일 수도 있다.
    - React가 성능을 위해 여러 setState()를 단일 업데이트로 한꺼번에 처리할 수 있다.
    this.props와 this.state가 비동기적으로 업데이트 될 수 있다.

```
// Wrong
this.setState({
    counter: this.state.counter + this.props.increment,
});
```

이를 위해서 객체보다는 함수로 인자를 사용하는 다른 형태의 setState()를 사용

```
// Correct
this.setState((state,props) => ({
    counter: state.counter + props.increment
}));
```

3. state 업데이트는 병합 된다.

state는 다양한 독립적인 변수를 포함할 수 있는데

```
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
}
```

별도의 setState() 호출로 이러한 변수를 독립적으로 업데이트할 수 있다.

```
componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
}
```

- 컴포넌트는 자신의 state를 자식 컴포넌트에 props로 전달할 수 있다.

```
<FormattedDate date={this.state.date} />
```

## 이벤트 처리하기

### React에서는 false를 반환해도 기본 동작을 방지할 수 없기에 preventDefault를 호출해야 방지할 수 있다.

- 이벤트 핸들러에 인자 전달하기

```
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

위 두줄은 같으며 각각 화살표 함수와 Function.prototype.bind를 사용하는 경우.

두 경우 모두 React 이벤트를 나타내는 e 인자가 전달 되는데 화살표 함수는 명시적으로 전달해야 하지만 bind는 자동으로 전달.


## 조건부 렌더링

### && 연산자로 if를 인라인으로 표현하기

```
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```

### 컴포넌트가 렌더링 하는 것 막기

다른 컴포넌트에 의해 렌더링될 때 컴포넌트 자체를 숨기고 싶으면 렌더링 결과를 출력하는 대신 null을 반환

```
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
```

## 리스트와 Key

- key는 React가 어떤 항목을 변경,추가,삭제할지 식별하는 것을 돕는다. key는 엘리먼트에 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정 해야한다.

```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

#### 대부분의 경우 데이터의 ID를 key로 사용하지만 ID가 없다면 인덱스를 Key로 사용할 수도 있다. 그러나 항목의 순서가 바뀔수 있는 경우엔 사용하지 않는다. 성능이 저하되거나 컴포넌트의 state와 관련된 문제가 생길 수 있기 때문.


## 폼

### 제어 컴포넌트



































