import {useEffect} from 'react'
function Result(props){
    useEffect(() =>{
        setTimeout(() =>props.history.push(`/quiz/${props.match.params.id}`), (4000))
    })
    return(
        <>
        <h1>Was it right?</h1>
        <p>{props.question}</p>
        </>
    )
}
export default Result;