
function Question(props){
    console.log(props.history.back)
    const next = parseInt(props.match.params.id)+1
    const responses = props.question[props.match.params.id].incorrect + ',' +props.question[props.match.params.id].correct
    const response = responses.split(',')
    console.log(response)
    

    return(
        <div>
        <h1>{props.question[props.match.params.id].question}</h1>
        
        
        <a href={`/quiz/${next}/result`}>answer</a>
        </div>
    )
}
export default Question;