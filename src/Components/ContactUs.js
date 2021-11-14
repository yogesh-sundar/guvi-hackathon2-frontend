import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function Contactus() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleClick = async () => {
    setName("");
      setEmail("");
      setPhone("");
    if (name && email && phone) {
      return toast("Your message is sent", { type: "success" });
      
    } else {
      return toast("Fill all the field in the form", { type: "error" });
    }
    
  };

  return (
    <div className="contact-wrapper">
      <ToastContainer position="top-right" width="200px" />
      <div className="address">
      <h1>Contacts</h1>
        <h5>Address</h5>
        <p>1/116 Bazzar street,</p>
        <p>sadras,</p>
        <p>Kalpakkam-603102</p>
        <p>Phone: 9550592656</p>
      </div>
      <div className="form">
        <Form>
          <FormGroup>
            <Label for="name">Your Name</Label>
            <Input
              type="text"
              placeholder="Enter your name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone Number</Label>
            <Input
              type="text"
              placeholder="Enter your Phone Number"
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="message">Message</Label>
            <Input
              type="textarea"
              name="text"
              placeholder="Enter your message here"
              className="text"
            />
          </FormGroup>
          <Button onClick={handleClick}>Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default Contactus;
