import './index.css'

interface UserDataStructure {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
 }

 interface FormProps {
    onSubmitForm: (data: UserDataStructure) => void;
 }

export const Registration: React.FC<FormProps> = ({onSubmitForm}) => {
    
    
    return (
        <form className='form'>
            <input name='name' value='' />
            <input name='e-mail' value='' />
            <input name='password' value='' />
            <input name='confirm' value='' />
        </form>
    )
}