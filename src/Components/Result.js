import {useEffect} from 'react'
function Result(props){
    useEffect(() =>{
        setTimeout(() =>props.history.push({pathname: `/quiz/${props.match.params.id}`, score:parseInt(props.location.score), rounds:props.location.rounds}), (4000))
    })
    console.log(props.location.answer)
    console.log(props.location.score)
    console.log(props.location.rounds)
    return(
        <>
        <h1>Was it right?</h1>
        <p>{props.location.answer}</p>

        </>
    )
}
export default Result;