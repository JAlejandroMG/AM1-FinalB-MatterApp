//@---------------------- Starts: Parámetros Endpoints ----------------------@//
const baseURL = "https://matter-app.herokuapp.com/api/v1";
const users = "/users";
const skills = "/skills";
const login = "/auth/login";

const getHeaders = {'Accept': 'application/json'};
const headers = {'Content-Type': 'application/json', 'Accept': 'application/json'};

let status;
//&----------------------- Ends: Parámetros Endpoints -----------------------&//


export default class InviteUsers {
  inviteUsers(id, email) {
    const userInvited = {email: email};
    fetch(`${baseURL}${users}/${id}/invite`, {
      method: `POST`,
      headers: headers,
      body: JSON.stringify(userInvited)
    })
    .then(response => {
      status = response.status;
      // console.log(`POST making invitation status: ${status}`);
      if(status !== 201) {
        alert(`Tu invitación no pudo ser enviada. Vuelve a intentar!!`);
        document.getElementById('loging').reset()
      };
      alert(`Tu invitación ha sido enviada!!!`);
      return response.json();
    })
    .then(data => showInvitationMade(data))
  
    const showInvitationMade = (data) => {
      console.log(data);
    };
  }
}
