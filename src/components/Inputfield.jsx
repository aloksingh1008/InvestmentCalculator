export default function Inputfield({para, handleChange}){
    return (
      <>
        <div id="user-input">
          <div className="input-group">
            <div>
              <label htmlFor="initial investment">Initial Investment</label>
              <input
                type="number"
                className="input-group"
                value={para.initial}
                onChange={(event) => handleChange("initial", event)}
              />
            </div>
            <div>
              <label htmlFor="Annual investment">Annual Investment</label>
              <input
                type="number"
                className="input-group"
                value={para.annual}
                onChange={(event) => handleChange("annual", event)}
              />
            </div>
          </div>
          <br />
          <div className="input-group">
            <div>
              <label htmlFor="expected return">expected return</label>
              <input
                type="number"
                className="input-group"
                value={para.return}
                onChange={(event) => handleChange("return", event)}
              />
            </div>
            <div>
              <label htmlFor="duration">duraion</label>
              <input
                type="number"
                className="input-group"
                value={para.duration}
                onChange={(event) => handleChange("duration", event)}
              />
            </div>
          </div>
        </div>
      </>
    );
}