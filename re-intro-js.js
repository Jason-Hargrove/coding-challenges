// ===== A re-introduction to JavaScript (JS tutorial) =====
// Log everyting.
log = console.log;

// == Numbers ==
// console.log(3 / 2);
// console.log(Math.floor(3 / 2));
// const num = 0.1 + 0.2;
// console.log(num);
// console.log(Math.sin(3.5));
// r = 3.5;
// var circumference = 2 * Math.PI * r;
// console.log(circumference);
// console.log (parseInt('123', 10));
// const someNum = (parseInt('010', 10));
// console.log(typeof(someNum));
// console.log(parseInt('010'));
// console.log(parseInt('0x10')); // hexadecimal
// console.log(parseInt('11', 2));
// console.log(parseFloat('11'));
// const unary = + '42';
// console.log(+ '010');
// console.log(+ '0x10');
// console.log(unary + " is a " + typeof(unary) + ".");
// console.log(parseInt('hello', 10));
// console.log(NaN + 5);
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN('hello'));
// console.log(Number.isNaN('1'));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN({}));
// console.log(Number.isNaN([1]));
// console.log(Number.isNaN([1, 2]));
// console.log(isNaN('hello')); // Bad practice to not use Number with isNaN.
// console.log(1 / 0);
// console.log(-1 / 0);
// console.log(isFinite(1 / 0));
// console.log(isFinite(-Infinity));
// console.log(isFinite(NaN));
// let str = "11.2abc";
// console.log(parseInt(str, 10));
// console.log(parseFloat(str));
// console.log(+ str);

// == Strings ==
// log("hello".length); // 5
// log("jason".length);
// const middleName = "Jason";
// const letterAtPostion0 = middleName.charAt(0);
// log(letterAtPostion0); // J
// log(middleName.charAt(4)); // n
// let name = 'Jason, Hargrove';
// name = name.replace('Jason', 'Richard');
// log(name);
// log('Jason, Hargrove'.replace('Jason', 'Richard')); // Richard Hargrove
// let daughterName = 'Eliana';
// daughterName = daughterName.toUpperCase();
// log(daughterName);

// == Other types ==
// let str = undefined;
// log(str); // undefined
// let str1 = null;
// log(str1);
// let emptyStr = "";
// let zero = 0;
// let aLie = false;
// let notANumber = NaN;
// let aNullValue = null;
// let notDefined = undefined;
// let one = 1;
// log(emptyStr);
// log(Boolean(emptyStr));
// log(Boolean(zero));
// log(Boolean(aLie));
// log(Boolean(notANumber));
// log(Boolean(aNullValue));
// log(Boolean(notDefined));
// log(Boolean(one));

// == Variables ==
// let a;
// let name = 'Jason';
// console.log(name);
// // myLetVariable is *not* visible out here
// for (let myLetVariable = 0; myLetVariable <= 5; myLetVariable++) {
//   // myLetVariable is only visible in here
//   console.log(myLetVariable);
// }
// // myLetVariable is *not* visible out here
// const Pi = 3.14;
// log(Pi);
// Pi = 1;
// log(Pi);
// log(myVarVariable); // myVarVariable *is* visible out here
// for (var myVarVariable = 0; myVarVariable <= 10; myVarVariable++) {
//   log(myVarVariable);
// }
// log(myVarVariable); // myVarVariable *is* visible out here
// let a;
// console.log(a); // undefined

// == Operators ==
// let x = 5;
// x = 6;
// x = x + 5;
// log(x + 5);
// let x = 5;
// log(x + 5); // 10
// x += 1;
// log(x);
// x++;
// log(x);
// x++;
// log(x);
// log('hello' + 'world');
// let y = '3' + 4 + 5;
// log(y + ' is a ' + typeof(y) + '.');
// log(`${y} is a type of ${typeof(y)}.`)
// log('hello' + ' world');
// let b = 3 + 4 + '5';
// log(`${b} is a type of ${typeof(b)}`);
// let c = parseFloat(b);
// log(`${b} was a ${typeof(b)}. Now, it's a ${typeof(c)}.`);
// let d = 375;
// log(`${d} is a type of ${typeof(d)}.`);
// d = 375 + "";
// log(`After adding an empty string,
//   ${d} is a type of ${typeof(d)}.`);
// let e = parseFloat(d);
// log(e);
// log(`After parseFloat,
//   ${e} is a type of ${typeof(e)}.`);
function aFunction() {
  return 123 == '123';
}
log(aFunction());
function bFunction() {
  return 123 === '123';
}
log(bFunction());
log(Boolean(1 === true));
log(Boolean(1 == true));
log(Boolean(2 === 2));
log(Boolean(3 !== '3')); // true
log(Boolean(4 != '4')); // false

// To log output: cd into the file. In the terminal enter >node re-intro-js
