
function Landing(props){
    console.log(props.score)
    console.log(props.question)

    function goplay(event){
        event.preventDefault()
            function shuffle(array) {
        var copy = [], n = array.length, i;
    
        // While there remain elements to shuffle…
        while (n) {
    
         // Pick a remaining element…
            i = Math.floor(Math.random() * n--);
    
            // And move it to the new array.
            copy.push(array.splice(i, 1)[0]);
        }
    
        return copy;
    }
    
    const random = shuffle(props.question)
    console.log(random)

        props.history.push({pathname:`/quiz/0`, score:0, rounds:0, question:random})

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