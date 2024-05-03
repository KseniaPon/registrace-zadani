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
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (user.email.includes('@')) {
            if (user.username === '') {
                setUser({ ...user, 
                    username:  user.email.substring(0, user.email.indexOf('@'))})
                alert('User name was empty. Try to submit again')
            } else {
                onSubmitForm(user);
            }
        } else {
            alert('The e-mail is not valid. @ is missing')
        }
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input className='form__input' value={user.username} name='username' onChange={handleChange} placeholder="User Name" />
            <input className='form__input' value={user.email} name='email' onChange={handleChange} placeholder="Email Address" required/>
            <input className='form__input' value={user.password} name='password'  onChange={handleChange} placeholder="Password" required/>
            <input className='form__input' value={user.passwordConfirm} name='passwordConfirm' onChange={handleChange} placeholder="Confirm Password" required/>
            <button className='form__btn' type='submit'>Submit</button>
        </form>
    )
}