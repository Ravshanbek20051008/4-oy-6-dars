// function yiginidinixisoblash(son1, son2) {
//   return son1 + son2;
// }
// console.log(yiginidinixisoblash(10, 15));
// 2-masala
// function kopaytmanixisoblash(son1, son2) {
//   return son1 * son2;
// }
// console.log(kopaytmanixisoblash(10, 15));
// 3-masala
// function birorsoningkvadratinixisoblash(son1) {
//   return son1 ** 2;
// }
// console.log(birorsoningkvadratinixisoblash(10));
// 4-masala
// function birorsoningkvadratinixisoblash(son1) {
//   return son1 ** 3;
// }
// console.log(birorsoningkvadratinixisoblash(10));
// 5-masala
// function sonningortachaqiymati(a, b, c) {
//   return (a + b + c) / 3;
// }
// console.log(sonningortachaqiymati(10, 15, 20));
// 6-masala
// let son1 = +prompt("sonni kiriting");
// function sonning_juft(son1) {
//   return son1 % 2 == 0;
// }
// let result = sonning_juft(son1);
// console.log(result);
// 7-masala
// let son1 = +prompt("sonni kiriting");
// function sonning_juft(son1) {
//   return son1 % 2 == 1;
// }
// let result = sonning_juft(son1);
// console.log(result);
// 8-masala
// let son1 = +prompt("sonni kiriting");
// let son2 = +prompt("sonni kiriting");
// function sonnitaqqoslash(son1, son2) {
//   let result;
//   if (son1 > son2) {
//     result = son1;
//   } else {
//     result = son2;
//   }
//   return result;
// }
// let result = sonnitaqqoslash(son1, son2);
// console.log(result);
// 9-masala
// let son1 = +prompt("sonni kiriting");
// let son2 = +prompt("sonni kiriting");
// function sonnitaqqoslash(son1, son2) {
//   let result;
//   if (son1 < son2) {
//     result = son1;
//   } else {
//     result = son2;
//   }
//   return result;
// }
// let result = sonnitaqqoslash(son1, son2);
// console.log(result);
// 10-masala
// let son1 = +prompt("sonni kiriting");
// function sonningyigindisi(son1) {
//   let result = 0;
//   for (let i = 1; i <= son1; i++) {
//     result += i;
//   }
//   return result;
// }
// let result = sonningyigindisi(son1);
// console.log(result);
// 11-masala
// let son1 = +prompt("sonni kiriting");
// function sonningfaktariali(son1) {
//   let result = 1;
//   for (let i = 1; i <= son1; i++) {
//     result *= i;
//   }
//   return result;
// }
// let result = sonningfaktariali(son1);
// console.log(result);
// 12-masala
// let yosh = +prompt("yoshingizni kiriting...");
// function yoshingiz(yosh) {
//   let result;
//   if (yosh < 18) {
//     result = "yoshingiz 18 dan kirichik";
//   } else {
//     result = "yoshingiz 18 dan katta";
//   }
//   return result;
// }
// let result = yoshingiz(yosh);
// console.log(result);
// 13-masala
// let son1 = +prompt("1sonni kiriting...");
// let son2 = +prompt("2sonni kiriting...");
// function bolinishalomati(son1, son2) {
//   let result;
//   if (son1 % son2 == 0) {
//     result = "true";
//   } else {
//     result = "false";
//   }
//   return result;
// }
// let result = bolinishalomati(son1, son2);
// console.log(result);
// 14-masala
// let son1 = +prompt("sonni kiriting...");
// function sonning_ishorasi(son1) {
//   let result;
//   if (son1 == 0) {
//     result = "0 kiritish mumkun emas";
//   } else if (son1 > 0) {
//     result = "true";
//   } else {
//     result = "false";
//   }
//   return result;
// }
// let result = sonning_ishorasi(son1);
// console.log(result);
// 15-masala
// let son1 = +prompt("sonni kiriting...");
// function sonning_ishorasi(son1) {
//   let result;
//   if (son1 == 0) {
//     result = "0 kiritish mumkun emas";
//   } else if (son1 > 0) {
//     result = "false";
//   } else {
//     result = "true";
//   }
//   return result;
// }
// let result = sonning_ishorasi(son1);
// console.log(result);
// 16-masala
// let son1 = +prompt("sonni kiriting...");
// function sonning_darajasi(son1) {
//   let result = son1 ** 0.5;
//   return result;
// }
// let result = sonning_darajasi(son1);
// console.log(result);
// 17-masala
// let son1 = +prompt("sonni kiriting...");
// let son2 = +prompt("sonni kiriting...");
// function sonning_farqi(son1, son2) {
//   let result = Math.abs(son1 - son2);
//   return result;
// }
// let result = sonning_farqi(son1, son2);
// console.log(result);
// 18 - masala
// let son1 = +prompt("1sonni kiriting...");
// let son2 = +prompt("2sonni kiriting...");
// let son3 = +prompt("3sonni kiriting...");
// function sonlarning_engkattasi(son1, son2, son3) {
//   let result;
//   if (son1 > son2 && son2 > son3) {
//     result = son1;
//   } else if (son1 < son2 && son2 > son3) {
//     result = son2;
//   } else if (son1 < son2 && son2 < son3) {
//     result = son3;
//   }
//   return result;
// }
// let result = sonlarning_engkattasi(son1, son2, son3);
// console.log(result);
// 19-masala
// let son1 = +prompt("1sonni kiriting...");
// let son2 = +prompt("2sonni kiriting...");
// let son3 = +prompt("3sonni kiriting...");
// function sonlarning_engkattasi(son1, son2, son3) {
//   let result;
//   if (son1 > son2 && son2 > son3) {
//     result = son3;
//   } else if (son1 > son2 && son2 < son3) {
//     result = son2;
//   } else if (son1 < son2 && son2 < son3 && son3 > son1) {
//     result = son1;
//   }
//   return result;
// }
// let result = sonlarning_engkattasi(son1, son2, son3);
// console.log(result);
// 20-masala
// let son1 = +prompt("sonni kiriting...");
// function sonni_tekshirish(son1) {
//   let result;
//   if (son1 > 10) {
//     result = "10dan katta";
//   } else if (son1 < 10) {
//     result = "10dan kichik";
//   }
//   return result;
// }
// let result = sonni_tekshirish(son1);
// console.log(result);
// 21-masala
// let son1 = +prompt("1sonni kiriting...");
// let son2 = +prompt("2sonni kiriting...");
// function sonlarning_juftligi(son1, son2) {
//   let result;
//   result = son1 + son2;
//   if (result % 2 == 0) {
//     result = "true";
//   } else {
//     result = "false";
//   }
//   return result;
// }
// let result = sonlarning_juftligi(son1, son2);
// console.log(result);
// 22-masala
// let son = +prompt("sonni kiriting...");
// function sonning_5gabolinis(son) {
//   let result;
//   if (son % 5 == 0) {
//     result = "true";
//   } else {
//     result = "false";
//   }
//   return result;
// }
// let result = sonning_5gabolinis(son);
// console.log(result);
// 23-masala
// let son1 = +prompt("sonni kiriting...");
// let son2 = +prompt("sonni kiriting...");
// function sonning_taqqoslash(son1, son2) {
//   let result;
//   if (son1 > son2) {
//     result = "true";
//   } else {
//     result = "false";
//   }
//   return result;
// }
// let result = sonning_taqqoslash(son1, son2);
// console.log(result);
// 24-masala
// let son = +prompt("sonni kiriting...");
// function sonning_7gabolinishi(son) {
//   let result;
//   if (son % 7 == 0) {
//     result = "true";
//   } else {
//     result = "false";
//   }
//   return result;
// }
// let result = sonning_7gabolinishi(son);
// console.log(result);
// 25-masala
// let son = +prompt("sonni kiriting...");
// function sonning_10darajasi(son) {
//   return son ** 10;
// }
// console.log(sonning_10darajasi(son));
// 26-masala
// let son1 = +prompt("sonni kiriting...");
// let son2 = +prompt("sonni kiriting...");
// function sonlarning_ortachasi(son1, son2) {
//   return (son1 + son2) / 2;
// }
// console.log(sonlarning_ortachasi(son1, son2));
// 27 - masala
// let son = +prompt("sonni kiriting...");
// function sonning_100dankichikkattaligi(son) {
//   let result;
//   if (son > 100) {
//     result = "katta";
//   } else {
//     result = "kichik";
//   }
//   return result;
// }
// let result = sonning_100dankichikkattaligi(son);
// console.log(result);
// 28-masala
// let son = +prompt("sonni kiriting...");
// function sonning_2gabolinishi(son) {
//   let result;
//   if (son % 2 == 0) {
//     result = "true";
//   } else {
//     result = "false";
//   }
//   return result;
// }
// let result = sonning_2gabolinishi(son);
// console.log(result);
// 29-masala
// let son1 = +prompt("1sonni``kiriting...");
// let son2 = +prompt("2sonni``kiriting...");
// function sonning_ildizi(son1, son2) {
//   let result = son1 * son2;
//   result = result ** 0.5;
//   return result;
// }
// let result = sonning_ildizi(son1, son2);
// console.log(result);
// 30-masala
// let son1 = +prompt("1sonni``kiriting...");
// let son2 = +prompt("2sonni``kiriting...");
// let son3 = +prompt("3sonni``kiriting...");
// function sonlarningtengligi(son1, son2, son3) {
//   let result;
//   if (son1 + son2 == son3 || son2 + son3 == son1 || son1 + son3 == son2) {
//     result = "true";
//   } else {
//     result = "false";
//   }
//   return result;
// }
// let result = sonlarningtengligi(son1, son2, son3);
// console.log(result);
// for yordamida ishlanadigan masalalar
// 1-masala
// function sonlarningyigindisi() {
//   let result = 0;
//   for (let i = 1; i <= 10; i++) {
//     result += i;
//   }
//   return result;
// }
// let result = sonlarningyigindisi();
// console.log(result);
// 2-masala
// function sonlarningyigindisi() {
//   let result = 1;
//   for (let i = 1; i <= 5; i++) {
//     result *= i;
//   }
//   return result;
// }
// let result = sonlarningyigindisi();
// console.log(result);
// 3-masala
// let son = +prompt("son kiriting");
// function sonning_faktariali(son) {
//   let result = 1;
//   for (let i = 1; i <= son; i++) {
//     result *= i;
//   }
//   return result;
// }
// let result = sonning_faktariali(son);
// console.log(result);
// 4-masala
// let son = +prompt("son kiriting");
// function sonning_juftiglari(son) {
//   for (let i = 1; i <= son; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
//   return;
// }
// sonning_juftiglari(son);
// 5-masala
// let son = +prompt("son kiriting");
// function sonning_juftiglari(son) {
//   for (let i = 1; i <= son; i++) {
//     if (i % 2 == 1) {
//       console.log(i);
//     }
//   }
//   return;
// }
// sonning_juftiglari(son);
