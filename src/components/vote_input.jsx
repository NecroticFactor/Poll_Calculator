

export default function Input(){
  return(
      <div>
         <form className="poll-values">
            <h3 id="poll-heading">Enter the results of your Poll</h3>

            <div className="input">
               <label htmlFor="A">1<sup>st</sup> Poll Count</label>
               <input type="number" id="A"  name="A"/>
            </div>

             <div className="input">
                <label htmlFor="B">2<sup>nd</sup> Poll Count</label>
                <input type="number" id="B"  name="B"/>
             </div>


            <div className="input">
               <label htmlFor="C">3<sup>rd</sup> Poll Count</label>
               <input type="number" id="C"  name="C"/>
            </div>


            <div className="input">
               <label htmlFor="D">4<sup>th</sup> Poll Count</label>
               <input type="number" id="D"  name="D"/>
            </div>
           </form>
      </div>

  )
}

