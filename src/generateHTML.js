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
                <li class="list-group-item">ID: ${manager.id}</li>
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
          <li class="list-group-item">ID: ${engineer.id}</li>
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
              <li class="list-group-item">ID: ${intern.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
              <li class="list-group-item">School: ${intern.school}</li>
            </ul>
          </div>
        </div>
      </div>
    `;
} // end internCard

// TODO: COLLECT ALL CARDS AND CREATE IF STATEMENTS TO ASSIGN ROLES AND BEHAVIORS
generateHTML = (data) => {

    // CREATE AN ARRAY FOR STORING CARD INFO
    cardArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        // CHECK TO SEE IF EMPLOYEE IS A MANAGER
        if (role === 'Manager') {
            const managerCardEl = managerCard(employee);
            cardArray.push(managerCardEl);
        }

        // CHECK TO SEE IF EMPLOYEE IS A MANAGER
        if (role === 'Engineer') {
            const engineerCardEl = engineerCard(employee);
            cardArray.push(engineerCardEl);
        }

        // CHECK TO SEE IF EMPLOYEE IS A MANAGER
        if (role === 'Intern') {
            const internCardEl = internCard(employee);
            cardArray.push(internCardEl);
        }
        
    } // end for loop

    // JOIN CARD RESULTS
    const employeeCards = cardArray.join('')

    // RETURN HTML REFERENCE FOR THE NEXT OBJECT
    const generateTeam = generateTeamProfile(employeeCards); 
    return generateTeam;

}

// TODO: CREATE A FULL HTML PAGE AND PLACE EMPLOYEE CARDS INSIDE
const generateTeamProfile = function (employeeCards) {   
    return`
    <!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.88.1">
    

    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/album/">
    <!-- Bootstrap core CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- FontAwesome CDN -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="../assets/style.css" rel="stylesheet">
    <title>Team Profile Generator</title>

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>

    
  </head>
  <body>
    
<header>
  <div class="collapse bg-dark" id="navbarHeader">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 py-4">
          <h4 class="text-white">About</h4>
          <p class="text-muted">
            Team Profile Generator is here to make onboarding easier. Use this application to create an accessible team profile to keep track of all new and existing team members. Navigate to this app's directory, and invoke the application by running <strong>node index.js</strong>. You will then be presented with a prompt of questions asking for your team member's name, ID number, role (i.e. manager, engineer or intern), phone number, email, github profile name, and school (if the team member is an intern). That's it! Your profile will then be created.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
      <a href="#" class="navbar-brand d-flex align-items-center">
        
        <i class="fas fa-users"></i>
        <strong>Team Profile Generator</strong>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>

<main>

  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">Team Profile Generator</h1>
        <p class="lead text-muted">
          The following team profile has been created based on your command-line feedback...
        </p>
      </div>
    </div>
  </section>

  
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 generateCardContainer">
      ${employeeCards}
      </div>
    </div>
  </div>

</main>

<footer class="text-muted py-5">
  <div class="container">
    <p class="float-end mb-1">
      <a href="#">Back to top</a>
    </p>
    <small class="mb-1">Made with ????  by Candra Fried | 2021</small>
  </div>
</footer>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

      
  </body>
</html>
    `;
};

// TODO: export module
module.exports = generateHTML;