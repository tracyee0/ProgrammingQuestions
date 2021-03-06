const questions = [
    {
        id: 1,
        subject: "what is your name",
        author: "Papo"
    },
    {
        id: 2,
        subject: "where do you live",
        author: "Papo"
    }
]

const answers = [

    {
        id: 1,
        questionId: questions[0].id, // 1
        text: "Tracy",
        author: "Uju"
    },
    {
        id: 2,
        questionId: questions[0].id, // 1
        text: "emeka",
        author: "ronke"
    },
    {
        id: 3,
        questionId: questions[1].id, //2
        text: "dubai",
        author: "Ib"
    }
]

// const questionAnswers = answers.filter(ans => ans.questionId == 1);

const questionAnswers =  (questionId) => {
    return answers.filter(ans => ans.questionId === questionId);
}

const questionAnswersCount = (questionId) => {
    const questions = questionAnswers(questionId);
    return questions.length;
}

const questionIds = () => {
    return questions.map(question => question.id);
}

// write a method thats the list of all question subject. Hint array.Map
const questionSubject =()=>{
    return questions.map(question =>question.subject)
}
// write a method that takes an id and delete the question with thata id; array.splice
const deleteQuestion= questions.splice(1,0)

// write a method that takes a question, and adds it to the list of questions;
const newQuestion=()=>{
    return questions.push()
}
// write a method that takes an answer, and adds it to the list of answers; make sure that the answer has a question id;
const newAnswer=()=>{
    return answers.push()
}

// write a method that takes an id and delete the answer with thata id; array.splice

const deleteAnswer= answers.splice(1,0)

//CRUD
//create
// read,
//update,
//delete

