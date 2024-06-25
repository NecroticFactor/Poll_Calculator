export default function Result(){
    return(<div className="result-box">
         <h3 id="results">Results</h3>
         <div id="Display">
            <div>
                <label id="output" htmlFor="Total-Votes">Total Votes:</label>
                <output id="Total-Votes">  0</output>
            </div>

            <div>
                <label id="output" htmlFor="%right">Percentage Right Answer:</label>
                <output id="right">  0</output>
            </div>
        </div>
    </div>
    )

}