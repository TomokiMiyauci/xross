/**
 * Adds two values.
 *
 * @func
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number} The result of `a + b`.
 * @example
 *
 *      R.add(2, 3)       //=>  5
 *      R.add(7)(10)      //=> 17
 */
const add = (a: number | string, b: number | string): number =>
  Number(a) + Number(b)

/**
 * Subtracts its second argument from its first argument.
 *
 * @func
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @example
 *
 *      subtract(10, 8) //=> 2
 *
 *      const minus5 = subtract(5)
 *      minus5(17) //=> 12
 *
 *      const complementaryAngle = subtract(90)
 *      complementaryAngle(30) //=> 60
 *      complementaryAngle(72) //=> 18
 */
const subtract = (a: number | string, b: number | string): number =>
  Number(a) - Number(b)

/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @example
 *
 *      const double = multiply(2)
 *      const triple = multiply(3)
 *      double(3)       //=>  6
 *      triple(4)       //=> 12
 *      multiply(2, 5)  //=> 10
 */
const multiply = (a: number, b: number): number => Number(a) * Number(b)

/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a / b`.
 * @example
 *
 *      divide(71, 100) //=> 0.71
 *
 *      const half = divide(2)
 *      half(42) //=> 21
 *
 *      const reciprocal = divide(1)
 *      reciprocal(4)   //=> 0.25
 */
const divide = (a: number, b: number): number => Number(a) / Number(b)

export { add, subtract, multiply, divide }
