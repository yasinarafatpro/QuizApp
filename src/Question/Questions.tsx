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
        title:'Java 2 question',
        options:['a','b','c','d'],
        ans:['c','d'],
        language:'Java'
    },
    {
        id:3,
        title:'Java 3 question',
        options:['a','b','c','d'],
        ans:['a','d'],
        language:'Java'
    },
    {
        id:4,
        title:'Java 4 question',
        options:['a','b','c','d'],
        ans:['a'],
        language:'Java'
    },
    {
    
        id:5,
        title:'PHP stands for -',
        options:['Hypertext Preprocessor ','Pretext Hypertext Preprocessor ','Personal Home Processor ','None of the above'],
        ans:['Hypertext Preprocessor'],
        language:'Php'
        
    },
    {
        id:6,
        title:' Who is known as the father of PHP?',
        options:['Drek Kolkevi','List Barely','Rasmus Lerdrof','None of the above'],
        ans:['Rasmus Lerdrof'],
        language:'Php'
    },
    {
        id:7,
        title:'Which of the following is not a variable scope in PHP?',
        options:['Extern','Local','Static','Global'],
        ans:['Extern'],
        language:'Php'
    },
    {
        id:8,
        title:'Which of the following is used to display the output in PHP?',
        options:['echo','write','print','console'],
        ans:['echo','print'],
        language:'Php'
    }
]

    export const getQuestionByLanguage=(language:string)=>{
        return questionsList.filter(q=>q.language===language)
    }