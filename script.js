// Data for projects
const projects = [
    { number: 1, name: "Color Changer", iconClass: "bx bx-color-fill", link:"./1-color-changer/index.html" },
    { number: 2, name: "BMI Calculator", iconClass: "bx bx-calculator", link:"./2-BMI-calculator/index.html"  },
    { number: 3, name: "Digital Clock", iconClass: "bx bxs-watch", link:"./3-Digital-Clock/index.html"  },
    { number: 4, name: "Guess The Number", iconClass: "bx bxs-confused", link:"./4-Guess-the-number/index.html"  },
    { number: 5, name: "Keyboard", iconClass: "bx bxs-keyboard", link:"./5-Keyboard"  },
    { number: 6, name: "Unlimited Colors", iconClass: "bx bxs-color", link:"./6-unlimited-colors"  },
    { number: 7, name: "Random Jokes", iconClass: "bx bxs-laugh", link:"./7-Random-joke"  },
    { number: 8, name: "Currency Converter", iconClass: "bx bx-dollar", link:"./8-currency-converter"  },
    { number: 9, name: "Tic Tac Toe", iconClass: "bx bx-x", link:"./9-TicTacToe"  },
    { number: 10, name: "Stone Paper Scissors", iconClass: "bx bxs-hand", link:"./10-StonePaperScissors"  }
  ];
  
  // Function to dynamically generate HTML
  function generateProjectHTML(project) {
    return `
    <a href="${project.link}">
        <div class="pro-item">
            <div class="num-indi">${project.number}</div>
            <div class="name">${project.name}</div>
            <div class="icon">
            <i class='${project.iconClass}'></i>
            </div>
        </div>
    </a>
      
    `;
  }
  
  // Function to insert generated HTML into container
  function renderProjects() {
    const container = document.querySelector('.project-container');
    container.innerHTML = projects.map(generateProjectHTML).join('');
  }
  
  // Call the render function to generate and insert HTML
  renderProjects();