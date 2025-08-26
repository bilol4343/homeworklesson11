const studentsJSON = `[
  {"id":1,"name":"Ali","birthDate":"2004-05-10","grades":[5,4,3]},
  {"id":2,"name":"Malika","birthDate":"2005-03-15","grades":[4,4,5]},
  {"id":3,"name":"Vali","birthDate":"2003-12-01","grades":[3,5,4]},
  {"id":4,"name":"Dilnoza","birthDate":"2004-07-22","grades":[5,5,4]},
  {"id":5,"name":"Sardor","birthDate":"2005-01-18","grades":[2,3,4]},
  {"id":6,"name":"Madina","birthDate":"2004-09-05","grades":[4,5,5]},
  {"id":7,"name":"Javohir","birthDate":"2003-11-25","grades":[3,4,3]},
  {"id":8,"name":"Gulbahor","birthDate":"2004-02-14","grades":[5,5,5]},
  {"id":9,"name":"Bekzod","birthDate":"2005-06-30","grades":[4,3,4]},
  {"id":10,"name":"Sevinch","birthDate":"2004-12-19","grades":[3,5,4]},
  {"id":11,"name":"Islom","birthDate":"2003-04-07","grades":[2,4,3]},
  {"id":12,"name":"Shahnoza","birthDate":"2005-09-11","grades":[4,4,5]},
  {"id":13,"name":"Oybek","birthDate":"2004-08-28","grades":[5,3,4]},
  {"id":14,"name":"Nilufar","birthDate":"2003-10-03","grades":[3,4,5]},
  {"id":15,"name":"Jasur","birthDate":"2004-06-16","grades":[5,5,2]}
]`;

const students = JSON.parse(studentsJSON);

const today = new Date();

students.forEach(student => {
  const { name, birthDate, grades } = student;
    const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  const avg = grades.reduce((a, b) => a + b, 0) / grades.length;
  console.log(`Ismi: ${name}`);
  console.log(`Yoshi: ${age}`);
  console.log(`O'rtacha bahosi: ${avg.toFixed(2)}`);
  console.log(`Hozirgi sana: ${today.toLocaleDateString()}`);
  console.log('----------------------');
});
