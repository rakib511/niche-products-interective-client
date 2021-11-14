import { TextField,Button, Alert } from '@mui/material';
import React ,{useState} from'react';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const [success,setSuccess] = useState(false);
    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e =>{
        const user = {email};
        fetch('https://infinite-lowlands-89222.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true)
            }
            
        })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField onBlur={handleOnBlur} label='email' type='email' variant="standard"></TextField>
                <Button type='submit' variant='contained'>make Admin</Button>
            </form>
            {success?.email && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;