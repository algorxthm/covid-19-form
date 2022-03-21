import React, { useState } from 'react';

function CovidForm(props) {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [ID, setID] = useState('');
  const [Address, setAddress] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Temp, setTemp] = useState('');
  const [Yes, setYes] = useState('');
  const [No, setNo] = useState('');

  // CONST HANDLECHANGE FOR EACH!

  const handleSubmit = e => {
    props.handleSubmit(
      FirstName,
      LastName,
      ID,
      Address,
      PhoneNumber,
      Temp,
      Yes,
      No
    );
    e.preventDefault();
  };
  const handleChangeFirstName = e => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  const handleChangeLastName = e => {
    e.preventDefault();
    setLastName(e.target.value);
  };
  const handleChangeID = e => {
    e.preventDefault();
    setID(e.target.value);
  };
  const handleChangeAddress = e => {
    e.preventDefault();
    setAddress(e.target.value);
  };
  const handleChangePhoneNumber = e => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };
  const handleChangeTemp = e => {
    e.preventDefault();
    setTemp(e.target.value);
  };
  const handleChangeYes = e => {
    e.preventDefault();
    setYes(e.target.value);
  };
  const handleChangeNo = e => {
    e.preventDefault();
    setNo(e.target.value);
  };

  return (
    <div className=" container form-group mt-5">
      <h2 className="heading">
        Covid-19 Screening Form
        <h6>Please fill in below </h6>
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" First Name "
          className="form-control w-75 mt-3"
          onChange={handleChangeFirstName}
          required
        />

        <input
          type="text"
          placeholder=" Last Name "
          className="form-control w-75 mt-3"
          onChange={handleChangeLastName}
          required
        />

        <input
          type="text"
          placeholder=" ID Number "
          className="form-control w-75 mt-3"
          onChange={handleChangeID}
          required
        />

        <input
          type="text"
          placeholder=" Address "
          className="form-control w-75 mt-3"
          onChange={handleChangeAddress}
          required
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="form-control w-75 mt-3"
          onChange={handleChangePhoneNumber}
          required
        />

        <input
          type="text"
          placeholder=" Temp"
          className="form-control w-75 mt-3"
          onChange={handleChangeTemp}
          required
        />

        <div className="heading mt-3">
          <h4>Medical Health</h4>
          <h6>Questions</h6>
        </div>

        <div className="Question mt-5">
          <h6 className="Question-text">
            Have you been diagnosed with Covid-19?
          </h6>
        </div>

        <div className="form-check mt-5 ">
          <input id="rd1" Name="grip1" type="radio" value="Yes" />
          <br />
          <input id="rd2" Name="grip1" type="radio" value="No" />
        </div>

        <div className="Question mt-5">
          <h6 className="Question-text">
            Have you been in contact with someone who diagnosed of Covid-19?
          </h6>

          <div className="form-check mt-5 ">
            <input id="rd1" Name="grip1" type="radio" value="Yes" />
            <br />
            <input id="rd2" Name="grip1" type="radio" value="No" />
          </div>
        </div>

        <input
          className="btn btn-dark mt-2 ml-2"
          type="submit"
          value="Submit"
          onClick={handleSubmit}
        />
        <input className="btn btn-success mt-2 ml-2" type="reset" />
      </form>
    </div>
  );
}

export default CovidForm;
