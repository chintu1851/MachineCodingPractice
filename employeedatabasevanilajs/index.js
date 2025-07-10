// IIFE: Immediately Invoked Function Expression for scoped async execution
(async function () {
  // 🔹 Fetch employee data from local JSON file
  const data = await fetch("./data.json");
  const res = await data.json();

  // 🔹 Initialize state
  let employees = res;
  let selectedEmployeeId = employees[0].id;
  let selectedEmployee = employees[0];

  // 🔹 Select core DOM elements
  const employeeList = document.querySelector(".employees__names--list");
  const employeeInfo = document.querySelector(".employees__single--info");

  const createEmployee = document.querySelector(".createEmployee"); // "Add Employee" button
  const addEmployeeModal = document.querySelector(".addEmployee"); // Modal wrapper
  const addEmployeeForm = document.querySelector(".addEmployee_create"); // Form inside modal
  const dobInput = document.querySelector(".addEmployee_create--dob"); // DOB input field

  // 🔹 Set max DOB to ensure employee is at least 18 years old
  dobInput.max = `${new Date().getFullYear() - 18}-${new Date()
    .toISOString()
    .slice(5, 10)}`;

  // 🔹 Show modal on "Add Employee" button click
  createEmployee.addEventListener("click", () => {
    addEmployeeModal.style.display = "flex";
  });

  // 🔹 Hide modal if background is clicked
  addEmployeeModal.addEventListener("click", (e) => {
    if (e.target.className === "addEmployee") {
      addEmployeeModal.style.display = "none";
    }
  });

  // 🔹 Handle form submission for adding a new employee
  addEmployeeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // 1. Collect form data
    const formData = new FormData(addEmployeeForm);
    const values = [...formData.entries()];
    let empData = {};

    values.forEach(([key, val]) => {
      empData[key] = val;
    });

    // 2. Assign new ID and age
    empData.id = employees[employees.length - 1].id + 1;
    empData.age =
      new Date().getFullYear() - parseInt(empData.dob.slice(0, 4), 10);
    empData.imageUrl =
      empData.imageUrl || "https://cdn-icons-png.flaticon.com/512/0/93.png";

    // 3. Push to employees list
    employees.push(empData);

    // 4. Re-render list and reset form
    renderEmployees();
    addEmployeeForm.reset();
    addEmployeeModal.style.display = "none";
  });

  // 🔹 Handle employee selection and delete logic
  employeeList.addEventListener("click", (e) => {
    // ✅ Handle name click → Select employee
    if (e.target.tagName === "SPAN" && selectedEmployeeId !== e.target.id) {
      selectedEmployeeId = e.target.id;
      renderEmployees();
      renderSingleEmployee();
    }

    // ❌ Handle delete icon click → Remove employee
    if (e.target.tagName === "I") {
      const toDeleteId = e.target.parentNode.id;
      employees = employees.filter((emp) => String(emp.id) !== toDeleteId);

      // If deleted employee was selected, update selection
      if (String(selectedEmployeeId) === toDeleteId) {
        selectedEmployeeId = employees.length > 0 ? employees[0].id : -1;
        selectedEmployee = employees.length > 0 ? employees[0] : {};
        renderSingleEmployee();
      }

      renderEmployees();
    }
  });

  // 🔹 Render all employees to sidebar list
  const renderEmployees = () => {
    employeeList.innerHTML = ""; // Clear existing list

    employees.forEach((emp) => {
      const employee = document.createElement("span");
      employee.classList.add("employees__names--item");

      // Highlight the selected employee
      if (parseInt(selectedEmployeeId, 10) === emp.id) {
        employee.classList.add("selected");
        selectedEmployee = emp;
      }

      // Set ID and content
      employee.setAttribute("id", emp.id);
      employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="employeeDelete">❌</i>`;

      employeeList.append(employee);
    });
  };

  // 🔹 Render single employee info in right panel
  const renderSingleEmployee = () => {
    if (selectedEmployeeId === -1) {
      employeeInfo.innerHTML = ""; // No employee selected
      return;
    }

    // Display selected employee details
    employeeInfo.innerHTML = `
        <img src="${selectedEmployee.imageUrl}" />
        <span class="employees__single--heading">
          ${selectedEmployee.firstName} ${selectedEmployee.lastName} (${selectedEmployee.age})
        </span>
        <span>${selectedEmployee.address}</span>
        <span>${selectedEmployee.email}</span>
        <span>Mobile - ${selectedEmployee.contactNumber}</span>
        <span>DOB - ${selectedEmployee.dob}</span>
      `;
  };

  // 🔹 Initial render on page load
  renderEmployees();
  if (selectedEmployee) renderSingleEmployee();
})();
