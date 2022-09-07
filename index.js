function scuberGreetingForFeet(numberFeet){


  if(numberFeet <= 400){
    return `This is one me! `;

  }else if (numberFeet > 400){

    return `no free sample`;

  }
}

function ternaryCheckCity(City){
 
  return City === `Chicago`?`You are in the destination`:`This is another destination ${City}`;
  
}

let genorosity;

function switchOnCharmFromTip(num){

  
  switch(num){
    case 'Coffee' :
      genorosity = 'good ';
      break;

    case 'fruits' :
      genorosity = 'Very Good';
      break;

    case 'sweets' :
      genorosity = 'Want to stay here';
      break;

    default:
      console.log("This city did not receive me as it should!");
      break

  }
}