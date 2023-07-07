/**
 * File: TabsComponent.js
 * Description:
 *   This component renders a set of tabs with associated content. It takes an array of tab objects as input.
 * Props:
 *   - tabs: An array of tab objects with 'label' and 'content' properties (Array<{ label: string, content: ReactNode }>)
 * Example Usage:
 *   <TabsComponent
 *     tabs={[
 *       { label: "Tab 1", content: <div>Tab 1 content</div> },
 *       { label: "Tab 2", content: <div>Tab 2 content</div> },
 *       { label: "Tab 3", content: <div>Tab 3 content</div> }
 *     ]}
 *   />
 */
import { useState } from 'react';

const TabsComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => handleTabClick(index)}
            className={activeTab === index ? 'active' : ''}>
            {tab.label}
          </li>
        ))}
      </ul>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabsComponent;
