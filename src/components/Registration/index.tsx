import { useState } from 'react';
import './index.css'

export interface UserDataStructure {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
 }

 interface FormProps {
    onSubmitForm: (data: UserDataStructure) => void;
 }

export const Registration: React.FC<FormProps> = ({onSubmitForm}) => {
    const [user, setUser] = useState<UserDataStructure>({
        username: 'User Name',
        email: 'Email Address',
        password: 'Password',
        passwordConfirm: 'Confirm Password',
    })
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitForm(user)
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <input value={user.username} name='username' onChange={handleChange} />
            <input value={user.email} name='email' onChange={handleChange}/>
            <input value={user.password} name='password'  onChange={handleChange}/>
            <input value={user.passwordConfirm} name='passwordConfirm' onChange={handleChange}/>
            <button type='submit'>Submit</button>
        </form>
    )
}