import React, { useState } from "react";

export function Tabs({ children } : any) {
  function findActiveTab(a : any) {
    return a.reduce((accumulator : any, currentValue : any, i : any) => {
      if (currentValue.props.active) {
        return i;
      }

      return accumulator;
    }, 0);
  }

  function tabValidator(tab : any) {
    return tab.type.displayName === "Tab" ? true : false;
  }

  const [activeTab, setActiveTab] = useState(findActiveTab(children));
  return (
    <>
      <div className="flex gap-2 justify-center  p-2">
        {children.map((item : any, i : any) => {
          return (
            <>
              {tabValidator(item) && (
                <Tab
                  key={`tab-{i}`}
                  currentTab={i}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  {item.props.children}
                </Tab>
              )}
            </>
          );
        })}
      </div>
      <div className="p-5">
        {children.map((item : any, i : any) => {
          return (
            <div className={` text-white ${i === activeTab ? "visible" : "hidden"}`}>
              {item.props.component}
            </div>
          );
        })}
      </div>
    </>
  );
}

export function Tab({ children, activeTab, currentTab, setActiveTab } : any) {
  return (
    <>
      <div
        className={`px-5 py-3 rounded cursor-pointer text-white
      ${activeTab === currentTab ? "underline" : " "}`}
        onClick={() => setActiveTab(currentTab)}
      >
        {children}
      </div>
    </>
  );
}

Tab.displayName = "Tab";
