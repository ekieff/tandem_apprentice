
function Question(props){
    console.log(props)
    const next = parseInt(props.match.params.id)+1
    const responses = props.location.question[props.match.params.id].incorrect + ',' +props.location.question[props.match.params.id].correct
    const response = responses.split(',')
    const answer = props.location.question[props.match.params.id].correct
    console.log(response)
    console.log(answer)
    console.log(props.location.score)
    console.log(props.location.rounds)

    //

    function choice(event){
        if (event.target.value === answer && props.location.rounds<9){
            console.log(event.target.value)
            console.log(answer)
            event.preventDefault()
            props.history.push({pathname:`/quiz/${next}/result`, answer:'right', score:props.location.score+1, rounds:props.location.rounds+1, question:props.location.question})
        }else if (event.target.value === answer && props.location.rounds===9){
            console.log(event.target.value)
            console.log(answer)
            event.preventDefault()
            props.history.push({pathname:`/end`, answer:'right', score:props.location.score+1, rounds:props.location.rounds+1, question:props.location.question})
        }else if (event.target.value !== answer && props.location.rounds<9){
            event.preventDefault()
            props.history.push({pathname:`/quiz/${next}/result`, answer:'wrong', score:props.location.score, rounds:props.location.rounds+1, question:props.location.question})
        }else if (event.target.value !== answer && props.location.rounds===9){
            event.preventDefault()
            props.history.push({pathname:`/end`, answer:'wrong', score:props.location.score, rounds:props.location.rounds+1, question:props.location.question})
        }
    }
    

    return(
        <div>
        <h1>{props.location.question[props.match.params.id].question}</h1>
        {Object.keys(response).map((key) =>{
            return (
                <button onClick={choice} value={response[key]}>
                    {response[key]}
                </button>
            )
        })}
        
        </div>
    )
}
export default Question;