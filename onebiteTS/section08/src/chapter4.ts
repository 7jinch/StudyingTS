/**
 * 탬플릿 리터럴 타입
 * string 리터럴 타입을 기반으로 특정 패턴을 갖는 문자열 타입을 생성함
 */

type Color = `red` | `black` | `green`;
type Animal = `dog` | `cat`;
// type ColorAnimal = `reds-dog`|`reds-cat` ... // 다 해줘야 해서 불편함

type ColorAnimal = `${Color} - ${Animal}`; // 간단하게 생성할 수 있음
