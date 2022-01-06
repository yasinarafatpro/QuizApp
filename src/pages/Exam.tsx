import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import { useLocation,useHistory } from 'react-router-dom'
import { getQuestionByLanguage, Question } from '../Question/Questions'
import { User } from './Home'

interface Answere {
    id: number,
    options: string[]
}


const Exam: React.FC = () => {
   
    const {state}=useLocation()

    const examUser=state as User

    const history=useHistory()

    const [currentQ,setCurrentQ]=useState<number>(0)

    const [ansList,setAnsList]=useState<Answere[]>([])

    const questionsList:Question[]=getQuestionByLanguage(examUser.language)
    const question:Question=questionsList[currentQ]

    const handleAnsOption=(option:string,checked?:boolean)=>{

        const find=ansList.find(ans=>ans.id===question.id)
        if(find){

            if(question.ans.length > 1){

                const _ansList=ansList.map((ans)=>{

                    if(ans.id===question.id){
                        if(checked){
                            ans={id:question.id,options:[...ans.options,option]}
                        }else{
                            let _options=ans.options.filter(op=>op!==option)
                            ans={id:question.id,options:_options}
                        }
                    }
                    return ans
                })
                setAnsList(_ansList)

            }else{
                const _ansList=ansList.map((ans)=>{
                    if(ans.id===question.id){
                        ans={id:question.id,options:[option]}
                    }
                    return ans
                })
                setAnsList(_ansList)
            }

        }else{
            const _ans={id:question.id,options:[option]}
            setAnsList([...ansList,_ans])
        }
    }

    const isAns=(option:string)=>{
        const ans=ansList.find(ans=>ans.id===question.id)
        if(!ans) return false
        return !!ans.options.find(op=>op===option)
    }
    const handleSubmit=()=>{
        let count:number=0
        
        ansList.forEach(ans=>{
            for(let q of questionsList){
                if(ans.id===q.id){
                    if(JSON.stringify(ans.options)===JSON.stringify(q.ans)){
                        count ++
                    }
                    break
                }
            }
        })
        history.push('/result',count)
    }

    return (
        <div>
           <h4>Exam Page</h4>
           <p>You Chose : {examUser.language}</p>
           <div>
                {getQuestionByLanguage(examUser.language).map((question,i)=>(
                    <span 
                    key={i} 
                    style={{
                        display: "inline-block",
                            margin: "4px",
                            width: "30px",
                            height: "30px",
                            lineHeight: "30px",
                            borderRadius: "50%",
                            backgroundColor:'red',
                            cursor:'pointer'
                    }}
                    onClick={()=>setCurrentQ(i)}
                    >{i+1}
                    </span>
                ))}
           </div>
           <div>
               <p>{currentQ+1}.{question.title}</p>

               {question.options.map((option,i)=>(
                   <div key={i}>
                       <label key={option}>
                            {i + 1}.
                            {
                                question.ans.length>1 ?
                                <input
                                type='checkbox' 
                                checked={isAns(option)}
                                onChange={(event)=>handleAnsOption(option,event.target.checked)}/>:
                                <input 
                                type='radio' 
                                checked={isAns(option)}
                                name={question.id.toString()}
                                onChange={()=>handleAnsOption(option)}/>
                            }
                            {option}
                       </label>
                   </div>
               ))}
               
           </div>
           {
               currentQ===(questionsList.length-1) &&
               <Button variant='contained' onClick={handleSubmit}>Submit</Button>
           }
        </div>
        
    )
}

export default Exam
