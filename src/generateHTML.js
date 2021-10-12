// TODO: CREATE INDIVIDUAL CARD ELEMENTS FOR ALL ROLES
   
// MANAGER CARD
const managerCard = function (manager) {
    return `
        <div class="col">
          <div class="card shadow-sm">
            <div class="card-header">
              <i class="fas fa-mug-hot"></i> Manager
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Team Member: ${manager.name}</li>
                <li class="list-group-item">ID: ${manager.ID}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Phone: ${manager.officeNumber}</li>
              </ul>
            </div>
          </div>
        </div>
    `;
} // end managerCard

// ENGINEER CARD
const engineerCard = function (engineer) {
    return `
    <div class="col">
    <div class="card shadow-sm">
      <div class="card-header">
        <i class="fas fa-glasses"></i> Engineer
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Team Member: ${engineer.name}</li>
          <li class="list-group-item">ID: ${engineer.ID}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
          <li class="list-group-item">Github: <a href="https://www.github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
      </div>
    </div>
  </div>
    `;
} // end engineerCard

// INTERN CARD
const internCard = function (intern) {
    return `
    <div class="col">
        <div class="card shadow-sm">
          <div class="card-header">
            <i class="fas fa-user-graduate"></i> Intern
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Team Member: ${intern.name}</li>
              <li class="list-group-item">ID: ${intern.ID}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
              <li class="list-group-item">School: ${intern.school}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
} // end internCard

// TODO: COLLECT ALL CARDS AND CREATE IF STATEMENTS TO ASSIGN ROLES AND BEHAVIORS

// TODO: CREATE A FULL HTML PAGE AND PLACE EMPLOYEE CARDS INSIDE