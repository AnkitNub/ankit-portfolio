const today = new Date();
const birthDate = new Date('2001-10-22'); 
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1; 
const currentDay = today.getDate();

let age = currentYear - birthDate.getFullYear();

if (currentMonth < birthDate.getMonth() + 1 || 
    (currentMonth === birthDate.getMonth() + 1 && currentDay < birthDate.getDate())) {
    age--;
}

export const data = [
  {
    id: 1,
    name: 'Name',
    value: 'Ankit Choudhary',
  },
  {
    id: 2,
    name: 'Age',
    value: age,
  },
  {
    id: 3,
    name: 'Email',
    value: 'ankitc23413@gmail.com',
  },
  {
    id: 4,
    name: 'Phone',
    value: '+91 9075 230 680',
  },
  {
    id: 5,
    name: 'Country',
    value: 'India',
  },
];
