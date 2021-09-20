# 2021-09-14

- 일반 함수는 자신이 종속된 객체를 this로 가리키며, 화살표 함수는 자신이 종속된 인스턴스를 가리킨다. p.90

- 컴포넌트명.defaultProps{} 로 디폴트 Props값 지정 가능.

- 컴포넌트 태그 사이에 있는 내용을 보여 주는 props 가 있는데 children이라 한다. p.94

- 아래와 같은 구조를 비구조화 할당이라고 한다.


```
const MyComponent = props => {
    const { name, children } = props;
    return (
        <div>
            안녕하세요 제 이름은 {name} 입니다.
            children 값은 {children} 입니다.
        </div>
    );
};


```
```
const MyComponent = ({ name, children }) => {
    return (
        <div>
            안녕하세요 제 이름은 {name} 입니다.
            children 값은 {children} 입니다.
        </div>
    );
};
```

- 클래스형 컴포넌트에서의 state 초깃값은 객체 형태를 넣어 주어야 하지만 useState에서는 객체가 아니여도 괜찮다.


# 2021-09-15

- 메서드 바인딩은 생성자 메서드에서 하는 것이 정석이나 바벨의 transform-class-properties 문법을 사용하면 화살표 함수 형태로 메서드를 정의 p.132

# 2021-09-16

- Dom에 접근하지 않고 state로 구현 가능한 것이 있지만 특정 input에 포커스 주기/스크롤 박스 조작 등의 상황에서는 DOM에 직접 접근하여 ref를 사용한다 (CreateRef 혹은 콜백 함수 사용) p.147

# 2021-09-20

- 자바스크립트 배열 객체의 내장 함수인 map 함수로 반복되는 컴포넌트를 렌더링 할 수 있다

문법) arr.map(callback,[thisArg])

ex)
```
const numbers = [1,2,3,4,5];
const result = numbers.map(num => num * num);
```

- 배열의 추가/삭제는 concat/filter 등을 이용한다. (불변성 유지(컴포넌트의 성능 최적화 가능))

- render()안에서는 이벤트 설정이 아닌 곳에서 setState를 사용하면 안되며, DOM에 접근해서도 안된다. componentDidMount에서 처리해야 한다.

- useReducer의 첫 번재 파라미터에는 리듀서 함수를, 두번째에는 해당 리듀서의 기본 값을 넣어줌 p.200

```
const [state,dispatch] = useReducer(reducer, {value : 0});
```
