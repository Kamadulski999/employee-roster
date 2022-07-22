const inquirer = require('inquirer')
inquirer.registerPrompt('selectLine', require('inquirer-select-line'));

const promptManager= data => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: "What is the manager's name?",
            validate: managerInput => {
              if (managerInput) {
                return true;
              } else {
                console.log('Please enter a name!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is the manager's employee ID number?",            
            validate: (managerIDNumber) => {
              managerIDNumber = managerIDNumber || 0;  
              if (managerIDNumber > 0) {
                return true;                            
              } else {    
                console.log('Please enter an employee ID!');    
                return false;    
          
              }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the manager's email address?",
            default: () => {},
            validate: function (managerEmail) {  
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerEmail)        
                if (valid) {                  
                    return true;
                } else {
                    console.log("Please enter a valid email address!")
                     return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerPhone',
            message: "What is the manager's telephone number (XXX) XXX-XXXX ?",
            default: () => {},
                validate: function (managerPhone) {  
                    valid = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(managerPhone)        
                    if (valid) {                  
                        return true;
                    } else {
                        console.log("Please enter a valid phone number!")
                        return false;
                    } 
                } 
            }                                 
        ]);
    };


const promptAddEmployee= data => {
    return inquirer.prompt([
        {
            type: 'list',
            message: "How would you like to proceed?",
            name: 'addEmployee',                
            choices: ["Add Engineer", "Add Intern", "Finish Building Team"]
        },     
        ]);
    };


const promptEngineer = data => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineer',
            message: "What is the engineer's name?",
            validate: engineerInput => {
                if (engineerInput) {
                return true;
                } else {
                console.log('Please enter a name!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "What is the engineer's employee ID number?",            
            validate: (engineerIDNumber) => {
                engineerIDNumber = engineerIDNumber || 0;  
                if (engineerIDNumber > 0) {
                return true;                            
                } else {    
                console.log('Please enter an employee ID!');    
                return false;    
            
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email address?",
            default: () => {},
            validate: function (engineerEmail) {  
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(engineerEmail)        
                if (valid) {                  
                    return true;
                } else {
                    console.log("Please enter a valid email address!")
                        return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub user name?",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub user name!");
                    return false;
                }
                }
            },              
        ]);
    };

    const promptIntern = data => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'intern',
                message: "What is the intern's name?",
                validate: internInput => {
                    if (internInput) {
                    return true;
                    } else {
                    console.log('Please enter a name!');
                    return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internID',
                message: "What is the intern's employee ID number?",            
                validate: (internIDNumber) => {
                    internIDNumber = internIDNumber || 0;  
                    if (internIDNumber > 0) {
                    return true;                            
                    } else {    
                    console.log('Please enter an employee ID!');    
                    return false;    
                
                    }
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the intern's email address?",
                default: () => {},
                validate: function (internEmail) {  
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(internEmail)        
                    if (valid) {                  
                        return true;
                    } else {
                        console.log("Please enter a valid email address!")
                            return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What school is the intern attending?",
                validate: school => {
                    if (school) {
                        return true;
                    } else {
                        console.log("Please enter the intern's school!");
                        return false;
                    }
                    }
                },              
            ]);
        };
    
    module.exports = { promptManager, promptAddEmployee, promptEngineer, promptIntern }