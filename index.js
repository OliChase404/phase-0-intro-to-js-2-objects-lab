
const employee = {
        name: "Mike",
        streetAddress: "123 Big Street"
    }


function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = { ...employee };

    newObj[key] = value;
    return newObj;
  }


  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
  }


  function deleteFromEmployeeByKey(employee, key){
    return {
      ...employee,
      [key]: undefined
    }
  }

  ////I like my way better but you could do this:
  // function deleteFromEmployeeByKey(employee, key) {
  //   const newEmployee = {...employee};
  //   delete newEmployee[key];
  //   return newEmployee;
  // }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }

  destructivelyDeleteFromEmployeeByKey(employee, "name")
  console.log(employee)
  