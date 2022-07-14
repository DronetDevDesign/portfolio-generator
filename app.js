const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = profileDataArray => {
  // This ...
  for (let i = 0; i < profileDataArray.length; i++) {
    console.log(profileDataArray[i]);
  }

  console.log("====================================");

  // Is the same as this ...
  profileDataArray.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);