export default function Selector() {
  return (
    <div id="radio-button">
      <h3 id="answer-heading">Choose the Right Answer</h3>
      <form className="select">
        <div>
          <label className="radio-container" htmlFor="rightA">
            A
          </label>
          <input type="radio" id="rightA" name="right-answer" value="A" />
        </div>

        <div>
          <label className="radio-container" htmlFor="rightB">
            B
          </label>
          <input type="radio" id="rightB" name="right-answer" value="B" />
        </div>

        <div>
          <label className="radio-container" htmlFor="rightC">
            C
          </label>
          <input type="radio" id="rightC" name="right-answer" value="C" />
        </div>

        <div>
          <label className="radio-container" htmlFor="rightD">
            D
          </label>
          <input type="radio" id="rightD" name="right-answer" value="D" />
        </div>
      </form>
    </div>
  );
}
