// Write your solution in this file!
// index.js

let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    return { ...employeeObj, [key]: value };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
    employeeObj[key] = value;
    return employeeObj;
  }
  
  function deleteFromEmployeeByKey(employeeObj, key) {
    const newEmployee = { ...employeeObj };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
    delete employeeObj[key];
    return employeeObj;
  }
  
  // Optional export for testing
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      employee,
      updateEmployeeWithKeyAndValue,
      destructivelyUpdateEmployeeWithKeyAndValue,
      deleteFromEmployeeByKey,
      destructivelyDeleteFromEmployeeByKey,
    };
  }