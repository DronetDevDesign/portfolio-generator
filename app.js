const generatePage = (name, gitHub) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${gitHub}">Github</a></h2>
  </body>
  </html>
  `;
};
// console.log(generatePage("Ron", "DronetDevDesign"));

const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, gitHub] = profileDataArgs;
console.log(name, gitHub);
console.log(generatePage(name, gitHub));

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const printProfileData = profileDataArray => {
//   // This ...
//   for (let i = 0; i < profileDataArray.length; i++) {
//     console.log(profileDataArray[i]);
//   }

//   console.log("====================================");

//   // Is the same as this ...
//   profileDataArray.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);
