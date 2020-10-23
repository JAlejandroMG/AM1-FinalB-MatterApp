export default class InviteUsers {
  inviteUsers(id, email) {
    const urlInvite = `https://matter-app.herokuapp.com/api/v1/users/${id}/invite`;
    const headers = {'Content-Type': 'application/json', 'Accept': 'application/json'};
    const userInvited = {email: email};
    let status;

    fetch(urlInvite, {
      method: `POST`,
      headers: headers,
      body: JSON.stringify(userInvited)
    })
    .then(response => {
      status = response.status;
      if(status !== 201) {
        alert(`Tu invitación no pudo ser enviada. Vuelve a intentar!!`);
        document.getElementById('loging').reset()
      };
      alert(`Tu invitación ha sido enviada!!!`);
      return response.json();
    })
  }
}
