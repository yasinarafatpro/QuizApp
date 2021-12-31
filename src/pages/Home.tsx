import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export interface User {
    name: string,
    gender: string,
    language: string
}

const Home: React.FC = () => {

    const navigate=useNavigate()

    const [user, setUser] = useState<User>({
        name: '',
        gender: 'Male',
        language: 'Java'
    })

    const handleInputs = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        console.log('After submit')
        console.log(user)
        navigate('/exam' ,{state:user})
    }

    return (
        <>
            <div>
                <h2>Quiz App</h2>
                <div>
                    <FormControl component="fieldset">
                        <div>
                            <TextField id="filled-basic"
                                label="Enter Your name"
                                variant="filled"
                                name='name'
                                value={user.name} onChange={handleInputs} />
                        </div>
                        <div>
                            <FormLabel component="legend"><h1>Select Your Gender</h1></FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                name="gender"
                                value={user.gender}
                                onChange={handleInputs}
                            >
                                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                            <FormLabel component="legend"><h1>Select A Language</h1></FormLabel>
                            <RadioGroup
                                aria-label="language"
                                name="language"
                                value={user.language}
                                onChange={handleInputs}
                            >
                                <FormControlLabel value="Java" control={<Radio />} label="Java" />
                                <FormControlLabel value="Php" control={<Radio />} label="Php" />
                                <FormControlLabel value="Python" control={<Radio />} label="Python" />
                            </RadioGroup>
                        </div>
                        <div>
                            <Button type='submit' variant='contained' onClick={handleSubmit}>Submit</Button>
                        </div>
                    </FormControl>
                </div>

        </div>
        </>
    )
}

export default Home
