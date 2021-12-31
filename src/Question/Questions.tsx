export interface Question{
    id:number,
    title:string,
    options:string[],
    ans:string[],
    language:string
}
export const questionsList:Question[]=[
    {
        id:1,
        title:'Java 1 no question',
        options:['a','b','c','d'],
        ans:['d'],
        language:'Java'
    },
    {
        id:2,
        title:'Java 2',
        options:['a','b','c','d'],
        ans:['c','d'],
        language:'Java'
    },
    {
        id:3,
        title:'Java 2',
        options:['a','b','c','d'],
        ans:['a','d'],
        language:'Java'
    },
    {
    
        id:3,
        title:'Php 1',
        options:['a','b','c','d'],
        ans:['d'],
        language:'Php'
        
    },
    {
        id:4,
        title:'Php 2',
        options:['a','b','c','d'],
        ans:['c'],
        language:'Php'
    }
]

    export const getQuestionByLanguage=(language:string)=>{
        return questionsList.filter(q=>q.language===language)
    }