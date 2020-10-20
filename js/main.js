//@---------------------- Starts: Parámetros Endpoints ----------------------@//
const baseURL = "https://matter-app.herokuapp.com/api/v1";
const users = "/users";
const skills = "/skills";
const login = "/auth/login";

const getHeaders = {'Accept': 'application/json'};
const headers = {'Content-Type': 'application/json', 'Accept': 'application/json'};

let status;
//@----------------------- Ends: Parámetros Endpoints -----------------------@//

const getUsers = () => {
  fetch(`${baseURL}${users}`, {
    headers: getHeaders
  })
    .then(response => {
      status = response.status;
      console.log(`GET users status: ${status}`)
      return response.json();
    })
    .then(data => showUsers(data))

  const showUsers = (data) => {
    console.log(data);
  }
}

//* getUsers();