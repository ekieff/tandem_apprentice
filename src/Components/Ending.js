function Ending (props){
    function playagain(event){
        event.preventDefault()
        props.history.push({pathname:`/quiz/0`, score:0, rounds:0})
    }
    return(
        <div>
            <h1>We've Reached the end!</h1>
            <button onClick={playagain}>Play again?</button>
        </div>
    )
}
export default Ending;