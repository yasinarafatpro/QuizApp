import { Button, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export interface User {
    name: string,
    gender:string,
    language: string
}

const Home: React.FC = () => {
    const history = useHistory()

    const [user, setUser] = useState<User>({
        name: '',
        gender:'Male',
        language: "Java"
    })

    const handleChange = (evevt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = evevt.target
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (event: React.FormEvent<EventTarget>) => {
        history.push('/exam', user)
    }

    return (
        <>
            <div>
                <h3>Quize App</h3>
            </div>
            <FormControl component='fieldset'>
                <div>
                    <TextField
                        variant='filled'
                        label='Enter Your Name'
                        value={user.name} 
                        name='name'
                        onChange={handleChange} />
                </div>
                <h3>Select Your Choise</h3>
                <div>
                    <RadioGroup 
                    row aria-label="Language" 
                    name="language" 
                    value={user.language} 
                    onChange={handleChange}>
                        <FormControlLabel value="Java" control={<Radio />} label="Java" />
                        <FormControlLabel value="Php" control={<Radio />} label="Php" />
                        <FormControlLabel value="Python" control={<Radio />} label="Python" />
                    </RadioGroup>
                </div>
                <h3>Select Your Gender</h3>
                <div>
                    <RadioGroup 
                    row aria-label="Gender" 
                    name="gender" 
                    value={user.gender} 
                    onChange={handleChange}>
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Others" control={<Radio />} label="Others" />
                    </RadioGroup>
                </div>
                <div>
                    <Button variant='contained' onClick={handleSubmit}>go-Question</Button>
                </div>
            </FormControl>
        </>
    )
}

export default Home
