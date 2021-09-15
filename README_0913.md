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


