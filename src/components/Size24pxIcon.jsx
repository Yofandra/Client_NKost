import { useMemo } from "react";
import PropTypes from "prop-types";

const Size24pxIcon = ({
  className = "",
  size24pxIconSize24px,
  size24pxIconWidth,
  size24pxIconHeight,
  size24pxIconPosition,
  size24pxIconTop,
  size24pxIconLeft,
}) => {
  const size24pxIconStyle = useMemo(() => {
    return {
      width: size24pxIconWidth,
      height: size24pxIconHeight,
      position: size24pxIconPosition,
      top: size24pxIconTop,
      left: size24pxIconLeft,
    };
  }, [
    size24pxIconWidth,
    size24pxIconHeight,
    size24pxIconPosition,
    size24pxIconTop,
    size24pxIconLeft,
  ]);

  return (
    <img
      className={`w-6 h-6 overflow-hidden shrink-0 ${className}`}
      alt=""
      src={size24pxIconSize24px}
      style={size24pxIconStyle}
    />
  );
};

Size24pxIcon.propTypes = {
  className: PropTypes.string,
  size24pxIconSize24px: PropTypes.string,

  /** Style props */
  size24pxIconWidth: PropTypes.any,
  size24pxIconHeight: PropTypes.any,
  size24pxIconPosition: PropTypes.any,
  size24pxIconTop: PropTypes.any,
  size24pxIconLeft: PropTypes.any,
};

export default Size24pxIcon;
