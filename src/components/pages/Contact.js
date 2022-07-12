import React, { useState } from 'react';

function Form() {
  // Here we set two state variables for username and email using `useState`
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function checkEmailValid(emailAttempt) {
    var mailformat = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (!emailAttempt.match(mailformat)) {
      alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
    }
  }

  function emptyCheck(event) {
    const { name, value } = event.target;
    if (!value) {
      alert(`You have left the ${name} field empty!`);
    }
  }

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setUserName(value)
        break;
      case 'email':
        setEmail(value)
        break;
      case 'message':
        setMessage(value);
        break;
    }

  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    checkEmailValid(email)

    // Alert the user their first and last name, clear the inputs
    alert(`Thankyou ${username}`);
    setUserName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h3 className="text-light">
        Hello {username}
      </h3>
      <form className="form">
        <div className='form-group'>
          <label className="text-light">Name</label>
          <input className="form-control w-50"
            value={username}
            name="username"
            onChange={handleInputChange}
            onMouseLeave={emptyCheck}
            type="text"
            placeholder="Name"
          />
          <label className="text-light">Email</label>
          <input className="form-control w-50"
            value={email}
            name="email"
            onChange={handleInputChange}
            onMouseLeave={emptyCheck}
            type="email"
            placeholder="Email"
          />
          <label className="text-light">Message</label>
          <textarea className="form-control w-50" rows="3"
            value={message}
            name="message"
            onChange={handleInputChange}
            onMouseLeave={emptyCheck}
            type="text"
            placeholder="Type in here..."
          ></textarea>
          <br />
          <button className="btn btn-primary" type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
