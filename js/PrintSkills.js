export default class PrintSkills {
  printSkills(skillsFeedbackLeft) {
    console.log(skillsFeedbackLeft);
    let skillsCards = document.getElementById('skills-cards');
    skillsCards.innerHTML = '';
    
    skillsFeedbackLeft.forEach((skill) => {
      const card = this.returnCardHTML(skill)
      skillsCards.innerHTML += card;
    });
  };

  
  returnCardHTML(skill) {
    const card = `<div class="card col-lg-6 m-3">
                    <div class="card-header">
                      Da tu feedback a ${skill.user_name}
                    </div>
                    <div class="card-body mb-3">
                      <h5 class="card-title">${skill.skill_name}</h5>
                      <p class="card-text">Descripción de lo que implica ${skill.skill_name}</p>
                      <a href="#" class="btn btn-info">Feedback</a>
                    </div>
                  </div>`

    return card;
  };
}