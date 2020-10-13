import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import TeamMember from './components/TeamMember';




const initialFormValues = {
  name: '', 
  email: '',
  role: '',
}

function App() {

  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    })
  }

  const submitForm = () => {
    let newTM = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!newTM.name || !newTM.email || !newTM.role) return;


    setTeamMembers([...teamMembers, newTM])
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {teamMembers.map((tm) => {
        return <TeamMember key={tm.id} details={tm} />
      })}
    </div>
  );
}

export default App;
