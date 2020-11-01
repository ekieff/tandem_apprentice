
function Question(props){
    console.log(props)
    const next = parseInt(props.match.params.id)+1
    const responses = props.location.question[props.match.params.id].incorrect + ',' +props.location.question[props.match.params.id].correct
    console.log(responses)
    const array = []
    function makeArray(){
        var i = 0
        for (i in props.location.question[props.match.params.id].incorrect)(
            array.push(props.location.question[props.match.params.id].incorrect[i])
        )
        i=i+1
        array.push(props.location.question[props.match.params.id].correct)
        return array
    }
    makeArray()
    console.log(array)
    //cahnge response to be an array of responses
    const answer = props.location.question[props.match.params.id].correct
    console.log(answer)
    console.log(props.location.score)
    console.log(props.location.rounds)

    //

    function choice(event){
        if (event.target.value === answer && props.location.rounds<9){
            console.log(event.target.value)
            console.log(answer)
            event.preventDefault()
            props.history.push({pathname:`/quiz/${next}/result`, answer:'right', score:props.location.score+1, rounds:props.location.rounds+1, question:props.location.question, correct:answer})
        }else if (event.target.value === answer && props.location.rounds===9){
            console.log(event.target.value)
            console.log(answer)
            event.preventDefault()
            props.history.push({pathname:`/end`, answer:'right', score:props.location.score+1, rounds:props.location.rounds+1, question:props.location.question, correct:answer})
        }else if (event.target.value !== answer && props.location.rounds<9){
            event.preventDefault()
            props.history.push({pathname:`/quiz/${next}/result`, answer:'wrong', score:props.location.score, rounds:props.location.rounds+1, question:props.location.question, correct:answer})
        }else if (event.target.value !== answer && props.location.rounds===9){
            event.preventDefault()
            props.history.push({pathname:`/end`, answer:'wrong', score:props.location.score, rounds:props.location.rounds+1, question:props.location.question, correct:answer})
        }
    }
    

    return(
        <div>
        <h1>{props.location.question[props.match.params.id].question}</h1>
        {Object.keys(array).map((key) =>{
            return (
                <button onClick={choice} value={array[key]}>
                    {array[key]}
                </button>
            )
        })}
        
        </div>
    )
}
export default Question;