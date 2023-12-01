import React, { useState } from "react";

//Style
import "./CustomTabsStyle.css";

const CustomTabs = ({tabs}) => {
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="custom-tabs">
      <div className="custom-tabs-tab-block">
        {tabs.map((el, i) => {
          return (
            <div
              className={
                isActive === i ? "custom-tabs-tab-is-active" : "custom-tabs-tab"
              }
              onClick={() => setIsActive(i)}
            >
              {el.name} {el.surname}
            </div>
          );
        })}{" "}
      </div>
      <div className="custom-tabs-content">{tabs[isActive].text}</div>
    </div>
  );
};

export default CustomTabs;
