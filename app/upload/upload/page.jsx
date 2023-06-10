"use client";

import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function UploadForm() {

  const [words, setWords] = useState("");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [datedied, setDatedied] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  

  return (
    <main>
      <h1 className="title">Welcome to the upload page</h1>
      <div className="form-container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicW3w">
            <Form.Label>Headstone(What3Words)</Form.Label>
            <Form.Control type="words" name="words" placeholder="Headstone(What3Words)" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFirstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="firstname" name="firstname" placeholder="First Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMiddlename">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control type="middlename" name="middlename" placeholder="Middle Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSurname">
            <Form.Label>Surname</Form.Label>
            <Form.Control type="surname" name="surname" placeholder="Surname" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="birthdate" name="birthdate" placeholder="Date of Birth" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDateDied">
            <Form.Label>Date Died</Form.Label>
            <Form.Control type="datedied" name="datedied" placeholder="Date Died" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control type="country" name="country" placeholder="Country" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="city" name="city" placeholder="City" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </main>
  );
}
