import { useState } from "react";
import { useDispatch } from "react-redux";
import { adduser, updateuser } from "../redux/UserRedux";
import { useHistory } from "react-router-dom";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

function UserForm({ id }) {
  const [name, setname] = useState("");
  const [emailaddress, setemailaddress] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [nameerror, setnameerror] = useState({});
  const [emailerror, setemailerror] = useState({});
  const [phoneerror, setphoneerror] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  function handleemail(e) {
    setemailaddress(e.target.value);
  }
  function handlename(e) {
    setname(e.target.value);
  }
  function handlephone(e) {
    setphonenumber(e.target.value);
  }
  function handlesubmit(e) {
    e.preventDefault();
    let isvalid = true;
    if (name.trim() === "") {
      isvalid = false;
      setnameerror({ border: "2px solid red", boxShadow: "0 0 5px red" });
      setTimeout(() => {
          setnameerror({});
      }, 1000);
    }
    if (!/^\d{10}$/.test(phonenumber)) {
        isvalid = false;
        setphoneerror({ border: "2px solid red", boxShadow: "0 0 5px red" });
        setTimeout(() => {
            setphoneerror({});
        }, 1000);
    }
    if (!/^\S+@\S+\.\S+$/.test(emailaddress)) {
        isvalid = false;
        setemailerror({ border: "2px solid red", boxShadow: "0 0 5px red" });
        setTimeout(() => {
            setemailerror({});
        }, 1000);
    }
    if (isvalid) {
      if (id) {
        dispatch(updateuser({ emailaddress, name, phonenumber, id }));
        history.push("/");
      } else dispatch(adduser({ emailaddress, name, phonenumber }));
      setemailaddress("");
      setname("");
      setphonenumber("");
    }
  }
  return (
    <>
      <form onSubmit={handlesubmit}>
        <MDBInput
          style={nameerror}
          className="mb-4"
          id="form5Example1"
          label="Name"
          type="text"
          value={name}
          onChange={handlename}
        />
        <MDBInput
          style={emailerror}
          className="mb-4"
          type="email"
          id="form5Example2"
          label="Email address"
          value={emailaddress}
          onChange={handleemail}
        />
        <MDBInput
          style={phoneerror}
          className="mb-4"
          type="text"
          id="form5Example2"
          label="Phone Number"
          value={phonenumber}
          onChange={handlephone}
        />
        <MDBBtn type="submit" block>
          Submit
        </MDBBtn>
      </form>
    </>
  );
}
export default UserForm;
