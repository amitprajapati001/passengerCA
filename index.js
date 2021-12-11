const count_El = document.getElementById("count-el");
let count = 0;

function Increment() {
  count = count + 1;
  count_El.innerText = count;
}

function save() {
  let countStr = count + " - ";
  pv.textContent += countStr;
  count_El.textContent = 0;
  count = 0;
}

// // const obj = {
// //   name: "Aman",
// //   city: "Indore",
// //   Id: "101",
// //   Engineer: function (a) {
// //     return `${this.name} is Frontend Dev,${a} resides in ${this.city}`;
// //   },
// // };

// // console.log(obj.city, obj.Id);
// // console.log(obj.Engineer("MARCH"));

// const today = new Date();
// today.setFullYear(2013);
// document.write(a);
