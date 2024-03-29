// 커링 함수의 지연 실행
// 필요할 때까지 계산을 연기
//  커링에서는 함수가 모든 인자를 받을 때까지 실행 지연시킴
// 커링된 함수는 여러 인자를 받는 함수를 인자를 하나씩 받는 여러 함수의 연쇄로 변환
// 각 중간 단계 함수는 다음 인자를 기다리며 실행 지연
// add 함수 작성

function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

// 함수가 실행되지 않음 , add 함수가 3개의 인자를 기대함, 3개 인자가 모두 제공될 때까지 대기
// 지연실행!!!! 함수가 모든 필요한 인자를 받을 때까지 실행을 지연시킴
// 함수의 인자를 보다 유연하게 관리하게 함
// 함수의 인자를 부분적으로 적용하고 나머지 인자는 나중에 적용 
console.log(add(1)(2));
console.log(add(1)(2)(3));