console.log(hello);
var hello;

// hello is not defined가 출력되어야 정상이나,
// 코드를 실행해보면 undefined가 출력된다. 변수의 선언이 코드 내 실제 위치와 무관하게 해당 범위의 최상단으로 이동하는 것처럼 보인다. 이런 동작방식 때문에, 호이스팅이라는 이름이 붙여진 것이다. 이런 특성은 변수 선언 뿐 아니라 함수 선언에서도 마찬가지 현상이다


var hello1;
console.log(hello1);

console.log(test);
function test() {}
// 변수는 식별자만 우선 호이스팅 되는 특성이 있어 초기화 이전에 변수를 호출하면 undefined가 출력되는 것을 확인할 수 있다. 
// 함수는 식별자 뿐만 아니라 함수의 전체 정의 즉, 함수 본문도 포함이 된다. 함수 같은 경우에는 실제 선언 위치 이전에 호출을 할 수 있다.
// 함수 선언문은 해당 함수가 포함된 실행 컨텍스트가 활성화 될때 이미 사용 가능한 상태가 된다.

// 함수 선언 이전에 console.log()사용
// 3이 나옴
// js의 함수 호이스팅 덕에 sum 함수의 전체 정의가 호이스팅 되어서 console.log()실행되기 이전에 이미 사용할 준비가 되어 있고, 따라서 함수 선언 이전에 이 함수를 호출해도 sum 함수가 정상 작동하여 결과 반환 함
console.log(sum(1, 2)); // 3
function sum (a, b) {
    return a + b;
}

// 호이스팅의 작동 원리는 실행 컨텍스트 때문이다.실행컨텍스트는 엔진이 실행 가능한 코드를 구조화하고 분류하는 데 사용하는 추상적 개념으로 코드의 실행 단계에서 매우 중요한 역할을 담당한다. 엔진이 코드를 실행할 때 실행 컨텍스트는 활성화가 되고 이 시점에서 변수와 함수 선언의 호이스팅, this의 결정이 이루어진다. 

 GlobalExecutionContext = {
    VariableEnvironment: {
        hello: undefined,
        test: <ref to test function></ref>
    }
 }

//  js 코드가 실행될 때 , js 파서가 활동을 시작하고 이 과정에서 전역 컨텍스트가 초기화 된다. 전역 실행 컨텍스트는 VariableEnvironment라는  변수 객체를 생성한다. 프로그램에 의해 선언된 모든 함수와 변수의 식별자 정보를 포함한다. 이 때, 변수는 초기에 undefined로 할당하고 함수는 그 자체의 함수 객체로서 할당을한다. 이런 초기화 메커니즘에서 js 엔진이 실행 컨텍스트 내에서 식별자들을 변수 객체의 프로퍼티로 미리 할당을 하고 그 값을 미리 undefined로 설정해둔다. 이러한 이유로 선언이 코드 상의 후반부에 이루어져도 해당 함수나 변수를 코드상의 앞부분에서 사용할 수 있게 된다.