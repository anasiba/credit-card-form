const GenerateYears = () => {
  const currentYear = new Date().getFullYear();
  console.log(currentYear);
  const maxYear = currentYear + 20;

  let years = [];

  for (let i = currentYear; i < maxYear; i++) {
    years.push(i.toString());
  }

  return years
};

const years = GenerateYears();

console.log(years);