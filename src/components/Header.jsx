import "antd/dist/antd.min.css";
import { Dropdown, Menu, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <div className={`group-container ${className}`}>
      <div className="rectangle-container">
        <div className="rectangle-div" />
        <Dropdown
          className="wrapper"
          overlay={
            <Menu>
              {[].map((option, index) => (
                <Menu.Item key={index}>
                  <a onClick={(e) => e.preventDefault()}>
                    {option.value || ""}
                  </a>
                </Menu.Item>
              ))}
            </Menu>
          }
          trigger={["click"]}
        >
          <Button onClick={(e) => e.preventDefault()}>
            {` `}
            <UserOutlined />
          </Button>
        </Dropdown>
      </div>
      <div className="group-wrapper">
        <div className="kost-parent">
          <div className="kost">KOST</div>
          <div className="n">N</div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
