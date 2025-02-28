// Write your solution in this file!
const employee={
    name:"Esther",
    streetaddress: "11 Broadway"
};

// 1. Non-destructive update: Returns a new employee object with the added key-value pair
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // 2. Destructive update: Modifies and returns the original employee object
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // 3. Non-destructive delete: Creates a new object without the specified key
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 4. Destructive delete: Removes a key from the original object and returns it
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  