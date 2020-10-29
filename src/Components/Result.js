import {useEffect} from 'react'
function Result(props){
    useEffect(() =>{
        setTimeout(() =>props.history.push('/quiz'), (4000))
    })
    return(
        <h1>Was it right?</h1>
    )
}
export default Result;