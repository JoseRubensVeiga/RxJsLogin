const {
  Observable,
  fromEvent,
  ajax: { ajax },
} = rxjs;
const { mergeMap, pluck } = rxjs.operators;

const containerEl = document.querySelector("#sign-up-container");
const authContainerEl = document.querySelector("#auth-container");
const btnSubmit = document.querySelector("#btn-submit");
const loginEl = document.querySelector("#login");
const passwordEl = document.querySelector("#password");

const api = (login, password) =>
  ajax({
    url: "http://localhost:3333/login",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "rxjs-custom-header": "Rxjs",
    },
    body: {
      login,
      password,
    },
  }).pipe(pluck("response"));

const click$ = fromEvent(btnSubmit, "click");

function sucesso() {
  containerEl.style = "opacity: 0";
  setTimeout(() => {
    containerEl.classList.add("d-none");
    authContainerEl.classList.remove("d-none");
    setTimeout(() => {
      authContainerEl.style = "opacity: 1";
    }, 100);
  }, 1000);
}

function erro() {
  alert("b");
}

click$
  .pipe(mergeMap(() => api(loginEl.value, passwordEl.value)))
  .subscribe((result) => {
    if (result.error) {
      erro();
    } else {
      sucesso();
    }
  });
