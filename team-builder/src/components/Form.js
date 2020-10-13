import React from 'react';


export default function Form(props) {

    const { values, update, submit } = props;

    const onChange = (evt) => {
        const { name, value } = evt.target;

        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();

        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                Name
                <input
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={values.name}
                    placeholder='name'
                />
            </label>
            <label>
                Email
                <input
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                    placeholder='email'
                />
            </label>
            <label>
                Role
                <select
                    name='role'
                    value={values.role}
                    onChange={onChange}
                >
                    <option>---select role---</option>
                    <option>Backend Engineer</option>
                    <option>FrontEnd Engineer</option>
                    <option>Designer</option>

                </select>
                <button>Submit</button>
            </label>
        </form>
    )
}