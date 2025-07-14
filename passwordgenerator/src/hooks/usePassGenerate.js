import { useState } from 'react';

const usePassGenerate = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const generatedpassword = (checkboxdata, length) => {
    let charset = "";
    let generated = "";

    const selectedoption = checkboxdata.filter((checkbox) => checkbox.state);
    if (selectedoption.length === 0) {
      setError("Please select at least one option");
      setPassword("");
      return;
    }
    setError(""); // clear error if valid
    console.log("selected option", selectedoption)
    selectedoption.forEach((option) => {
      switch (option.title) {
        case "include Uppercase":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "include Lowecase":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "include Numbers":
          charset += "0123456789";
          break;
        case "include Symbol":
          charset += "@#$%^&*()";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      console.log("random index", randomIndex, Math.random())
      generated += charset[randomIndex];
    }

    setPassword(generated);
    setError("")
  };

  return {
    password,
    error,
    generatedpassword
  };
};

export default usePassGenerate;
