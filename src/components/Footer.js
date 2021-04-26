import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="autor">
        {" "}
        &copy; {new Date().getFullYear()} | José Arriaga
      </div>
    </div>
  );
};

export default Footer;
