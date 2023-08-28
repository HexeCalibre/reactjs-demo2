import { useState } from "react";

const WelcomeComponent = () => {
  const [message, setMessage] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });

  // const firstNameHandleChange = (e) => {
  //   setFirstName(e.target.value);
  // };

  // const lastNameHandleChange = (e) => {
  //   setLastName(e.target.value);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // const name = e.target.name;
    // const value = e.target.value;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleClick = () => {
    setMessage(`Welcome ${data.firstName} ${data.lastName}`);
  };

  return (
    <>
      <h2>Welcome App</h2>

      <p>
        <label>First Name </label>
        <input
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
        />
      </p>
      <p>
        <label>Last Name </label>
        <input
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
        />
      </p>
      <p>
        <button onClick={handleClick}>Greet</button>
      </p>
      <p>{message}</p>
    </>
  );
};

export default WelcomeComponent;
