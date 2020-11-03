//[---------------------------- Starts: Settings ----------------------------]//
//+ Import
import PrintSkills from './PrintSkills.js';
//+ Instance
const printSkills = new PrintSkills;
//]----------------------------- Ends: Settings -----------------------------[//



export default class CompleteSkills {
  async completeSkills(skillsFeedbackLeft) {
    const usersNameAdded = await this.addUsersName(skillsFeedbackLeft);
    const skillsName = await this.getSkillsName();
    const skillsNameAdded = await this.addSkillsName(skillsName, usersNameAdded);
    printSkills.printSkills(skillsNameAdded);
  };


  addUsersName(skillsFeedbackLeft) {
    return new Promise((resolve, reject) =>{
      let counter = 0;
      skillsFeedbackLeft.forEach((skill) => {        
          const urlGetUserDetails = `https://matter-app.herokuapp.com/api/v1/users/${skill.user_id}`;
          const getHeaders = {'Accept': 'application/json'};  
          fetch(urlGetUserDetails, {
            headers: getHeaders
          })
            .then(response => {
              status = response.status;
              return response.json();
            })
            .then(data => {
              skill.user_name = data.name;
              counter++;
              if(counter === skillsFeedbackLeft.length) {
                resolve(skillsFeedbackLeft);
              };
            })
      });
    });
  };


  getSkillsName() {
    return new Promise((resolve, reject) =>{        
          const urlGetUserDetails = `https://matter-app.herokuapp.com/api/v1/skills`;
          const getHeaders = {'Accept': 'application/json'};  
          fetch(urlGetUserDetails, {
            headers: getHeaders
          })
            .then(response => {
              status = response.status;
              return response.json();
            })
            .then(data => {
              resolve(data);
            })
    });
  };


  addSkillsName(skillsName, usersNameAdded) {
    return new Promise((resolve, reject) => {
      usersNameAdded.forEach((user) => {
        skillsName.forEach((skill) => {
          if(user.skill_id === skill.id){
            user['skill_name'] = skill.name;
          };
        });
      });
      resolve(usersNameAdded);
    });
  }
};