import "./swich.css"

export default function Switch(props) {
  return(
    <>
      <input
        checked={props.isOn}
        onChange={props.toggleDark}
        className="react-switch-checkbox"
        id="react-switch-new"
        type="checkbox"
      />
      <label
        style={{background: props.isOn && "white"}}
        className="react-switch-label"
        htmlFor="react-switch-new"
      >
        <span
          className="react-switch-button"
          style={{background: props.isOn && "#222"}}
          />
      </label>
    </>
  
  )

}
