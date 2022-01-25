import React, {useState} from 'react';
import { supabase } from '../../server';

const SignForm = ({setAlert, resetAlert}) => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')

    const handleSubmit = async (email) => {
        try{
            setLoading(true)
            const { error } = await supabase.auth.signIn({ email })
            if (error) throw error
            setAlert({
                isActive: true,
                type: 'success',
                message: "Success ! Please check your mail for the login link !"
            })
        }catch(error) {
            setAlert({
                isActive: true,
                type: 'error',
                message: error.message || error.description
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <form className="sign-form" onSubmit={handleSubmit}>
            <div className="sign-form-item">
                <label className="sign-form-label">Mail</label>
                <input type="email" className='sign-form-input' value={email} onChange={(e) => {setEmail(e.target.value)}} />
                <button onClick={(e) => {
                    e.preventDefault() 
                    handleSubmit(email)}
                } disabled={loading} className='sign-form-button'><img src="./icons/login.png" alt="" /></button>
            </div>
        </form>
    );

};

export default SignForm;