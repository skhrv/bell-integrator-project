const host = 'https://bell-json-server.herokuapp.com';
// const host = 'http://localhost:3000'; // local json server
// Create new Company
// POST /companies
//    {
//     "name": "ООО Софа",
//     "inn": "0276097173",
//     "address": "г.Уфа, ул.Менделеева 178"
//   }

// Get List Of Companies
// GET /companies

// Get Company
// GET /companies/:id

export default {
  companiesUrl: () => [host, 'companies'].join('/'), // get companies list
  companyUrl: (id: string) => [host, 'companies', id].join('/'),
  subDivisionsUrl: () => [host, 'subDivision'].join('/'), // get subDivisions list
  subDivisionUrl: (id: string) => [host, 'subDivision', id].join('/'),
  employeesUrl: () => [host, 'employees'].join('/'), // get employees list
  employeeUrl: (id: string) => [host, 'employees', id].join('/'),
};
