function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  function printNext20LeapYears() {
    let currentYear = new Date().getFullYear();
    let leapYearsFound = 0;
  
    console.log("Next 20 Leap Years:");
  
    while (leapYearsFound < 20) {
      if (isLeapYear(currentYear)) {
        console.log(currentYear);
        leapYearsFound++;
      }
      currentYear++;
    }
  }
  
  
  printNext20LeapYears();
  