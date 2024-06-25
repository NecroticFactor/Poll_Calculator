export default function Selector() {
    return (
      <div id="radio-button">
        <h3 id="answer-heading">Choose the Right Answer</h3>
        <form className="select">
          <input type="radio" id="rightA" name="right-answer" value="A" />
          <label htmlFor="rightA">A</label>

          <input type="radio" id="rightB" name="right-answer" value="B" />
          <label htmlFor="rightB">B</label>

          <input type="radio" id="rightC" name="right-answer" value="C" />
          <label htmlFor="rightC">C</label>

          <input type="radio" id="rightD" name="right-answer" value="D" />
          <label htmlFor="rightD">D</label>
        </form>
      </div>
    );
  }