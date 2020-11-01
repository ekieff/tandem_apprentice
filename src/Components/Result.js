import {useEffect} from 'react'
function Result(props){
    useEffect(() =>{
        setTimeout(() =>props.history.push({pathname: `/quiz/${props.match.params.id}`, score:parseInt(props.location.score), rounds:props.location.rounds, question:props.location.question}), (4000))
    })
    console.log(props.location.answer)
    console.log(props.location.score)
    console.log(props.location.rounds)
    return(
        <>
        <h1>Your Answer was:</h1>
        <p>{props.location.answer}</p>
        <h1>Your score is:</h1>
        <p>{props.location.score}</p>
        <h1>With</h1>
        <p>{10-parseInt(props.location.rounds)} more rounds</p>

        </>
    )
}
export default Result;