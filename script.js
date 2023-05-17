// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
let allTimer = 0;
let anyTimer = 0;

const outPutAll = document.querySelector("#output-all");
const outPutAny = document.querySelector("#output-any");

const all = async function () {
  while (true) {
    allTimer++;
    const prom = await Promise.all(
      apiUrls.map((val) => {
        return fetch(val);
      })
    );
    return prom;
  }
};

const any = async function () {
  while (true) {
    anyTimer++;
    const prom = await Promise.any(
      apiUrls.map((val) => {
        return fetch(val);
      })
    );
    return prom;
  }
};

all();
any();
outPutAll.innerText = allTimer;
outPutAny.innerText = anyTimer;
