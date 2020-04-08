const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("stuff worked");
  } else {
    reject("error, it broke");
  }
});

// promise.then(result => console.log(result));

promise
  .then((result) => result + "!")
  .then((result2) => {
    throw Error;
    console.log(result2);
  })
  .catch(() => console.log("Errrroorrr"));

//   .catch catches the error anywhere between the .then
//  .catch is always at the end

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Hiii");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Promey 3");
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Are you looking for me");
});

Promise.all([promise, promise2, promise3, promise4]).then((values) => {
  console.log(values);
});

// it waits until all the promises are resolved and then logged out the value

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(urls.map(url => {
    return fetch(url).then(resp=> resp.json());
  }))
  .then(results => {
  console.log(results[0]);
  console.log(results[1]);
  console.log(results[2]);
});
