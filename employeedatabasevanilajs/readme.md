
🧠 Employee App Logic Summary

🔹 IIFE (Immediately Invoked Function Expression)
- Wraps all logic inside an async function invoked immediately.
- Allows use of async/await without polluting global scope.

🔹 Fetch Employee Data
- Uses fetch("./data.json") to load employee data from a local JSON file.
- Parses JSON response to get employee array.

🔹 Initialize State
- employees: stores all employee objects.
- selectedEmployeeId: tracks the currently selected employee’s ID.
- selectedEmployee: full object for the selected employee.

🔹 Query DOM Elements
- employeeList: container for the employee names sidebar.
- employeeInfo: container for detailed employee info.
- createEmployee: button to open the "Add Employee" modal.
- addEmployeeModal: modal wrapper for the form.
- addEmployeeForm: the form inside the modal.
- dobInput: date of birth input field, used to enforce age limit.

🔹 DOB Max Limit
- Sets maximum allowed DOB so users must be at least 18 years old.

🔹 Show Modal on Button Click
- Clicking "Add Employee" shows the modal popup.

🔹 Hide Modal on Background Click
- Clicking outside the form (modal background) closes the popup.

🔹 Form Submission to Add Employee
- Prevents default form submission.
- Collects form data using FormData API.
- Assigns new unique ID and calculates age from DOB.
- Adds default profile image if none provided.
- Pushes new employee into employees array.
- Re-renders employee list and resets the form.
- Hides the modal after submission.

🔹 Sidebar Click Events (Event Delegation)
- If a name (<span>) is clicked: update selectedEmployeeId and show details.
- If delete icon (<i>) is clicked: remove employee from array.
- If deleted employee was selected, update selection accordingly.
- Re-render employee list and details after changes.

🔹 renderEmployees()
- Clears and repopulates the employee names sidebar.
- Adds "selected" class on the currently selected employee.
- Adds delete icon for each employee.

🔹 renderSingleEmployee()
- Displays detailed info for selected employee:
  image, full name with age, address, email, contact number, DOB.
- Clears info panel if no employee is selected.

🔹 Initial Rendering on Page Load
- Calls renderEmployees() to populate list.
- Shows details of first employee by default.

🛠️ Key JS Features:
- async/await and fetch for data loading.
- querySelector for DOM access.
- addEventListener for handling UI interactions.
- FormData for form input handling.
- classList manipulation for styling selected items.
- innerHTML for dynamic content insertion.
- Array methods (forEach, filter) for managing employee data.
*/
