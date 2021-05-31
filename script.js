function getName() {
  let userName = '';

  do { 
      userName = prompt('What is your name?');
  }
   while (isValidUserName(userName));
  return userName;
}

function isValidUserName(str) {
  return (str === '' || str === null || str === ' ' );
}


 const userName = getName();

 const greeting = document.getElementById('hello'); 

 greeting.textContent = greeting.textContent + `, ${userName}!`;
          
          