import React from "react";
import "./NotifyTop.sass";

const NotifyTop = () => {
  return (
    <>
      <div className="notify-top" style={{ display: "block" }}>
        <div className="max1100">
          <div className="nt-content">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <p>
                Squadhelp is now Atom{" "}
                <span className="mobile-new-line">
                  -- where everything starts!
                </span>
              </p>
              <span className="learn-more">Learn More</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotifyTop;
