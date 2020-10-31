
function Landing(props){
    console.log(props.score)
    function goplay(event){
        event.preventDefault()
        props.history.push({pathname:`/quiz/0`, score:0, rounds:0})

    }
    return(
        <>
        <h1>Our homepage</h1>
        <button onClick={goplay}>
            Let's play
        </button>
        </>
    )
}
export default Landing;