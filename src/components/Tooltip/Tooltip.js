import ERROR_MESSAGES from "../../utils/Config";
import tooltipSuccessImage from "../../images/tooltip_success.svg";
import tooltipFailureImage from "../../images/tooltip_failure.svg";

function Tooltip(props) {
  return (
    <div
      className={`tooltip ${props.isOpen ? "tooltip_opened" : ""}`}
      onClick={props.onClick}
    >
      <div className="tooltip__container">
        <button
          className="tooltip__close-button"
          onClick={props.onClose}
          type="button"
        ></button>
        <img
          className="tooltip__logo"
          src={props.isProfileEdit ? tooltipSuccessImage : tooltipFailureImage}
          alt={ERROR_MESSAGES.TOOLTIP.ALT}
        />
        <h2 className="tooltip__title ">
          {props.isProfileEdit
            ? ERROR_MESSAGES.TOOLTIP.SUCCESS
            : ERROR_MESSAGES.TOOLTIP.FAILURE}
        </h2>
      </div>
    </div>
  );
}

export default Tooltip;
