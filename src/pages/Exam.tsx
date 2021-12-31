import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getQuestionByLanguage, Question, questionsList } from '../Question/Questions'
import { User } from './Home'

interface Answere{
    id:number,
    options:string[]
}

const Exam: React.FC = () => {
    const { state } = useLocation()
    const newUser = state as User

    //setState Question
    const [currentQuestion,setCurrentQuestion]=useState<number>(0)

    //ans state

    const [answereList,setAnswerList]=useState<Answere[]>([])

    //mathing question from Question and exam
    const newQuestionList:Question[]=getQuestionByLanguage(newUser.language)

    //mapping question with current Queston state
    const newCurrentQuestion:Question=newQuestionList[currentQuestion]

    const handleSelectOption=(option:string,checked?:boolean)=>{

        console.log('handleSelect',newCurrentQuestion.id)

        const findAns=answereList.find(ans=>ans.id===newCurrentQuestion.id)
        if(findAns){
            if(newCurrentQuestion.ans.length >1){
                const newAnswereList=answereList.map((ans)=>{

                    if(ans.id===newCurrentQuestion.id){
                        if(checked){
                            ans={id:newCurrentQuestion.id,options:[...ans.options]}
                        }else{
                            let newOptions=ans.options.filter(op=>op !==option)
                            ans ={id:newCurrentQuestion.id,options:newOptions}
                        }

                    }
                   return ans
                })
                setAnswerList(newAnswereList)
            }
            else{
                const _newAnswerList={id:newCurrentQuestion.id,options:[option]}
                setAnswerList([...answereList,_newAnswerList])
            }
        }
    }
    return (
        <>
            <div>
                <h3>Exam page</h3>
                <p>You Selected : {newUser.language}</p>
                <p>{newQuestionList.map(q=>q.title)[0]}</p>

                {newQuestionList.map((question,i)=>(
                    <span
                    key={i}
                    style={{
                        display:'inline-block',
                        cursor:'pointer'
                    }}
                    onClick={()=>setCurrentQuestion(i)}
                    >{i + 1}</span>
                ))}
            </div>
            <div>
                <p>{currentQuestion + 1}. {newCurrentQuestion.title}</p>
                {
                    newCurrentQuestion.options.map((option,i)=>(
                        <div key={i}>
                            <label key={option}>
                                {i+1}{
                                    newCurrentQuestion.ans.length >1 ?
                                    <input 
                                    type='checkbox'
                                    onChange={(e)=>handleSelectOption(option,e.target.checked)}
                                    ></input>:
                                    <input type='radio'></input>
                                }{option}
                            </label>
                        </div>
                    ))
                }
            </div>
            {
                currentQuestion===(questionsList.length -1) && 
                <Button>Submit</Button>
            }
        </>
    )
}

export default Exam
