import React, { useState } from "react";
import "./MainDashboard.css";

// Sample JSON data
const widgetData = {
  categories: {
    CSPM: [
      {
        id: "cspm1",
        name: "Cloud Accounts",
        content: "No data available",
        img: "https://www.iconpacks.net/icons/1/free-pie-chart-icon-683-thumb.png",
      },
      {
        id: "cspm2",
        name: "Cloud Account Risk Assessment",
        content: "No data available",
        img: "https://cdn-icons-png.flaticon.com/512/3589/3589863.png",
      },
    ],
    CWPP: [
      {
        id: "cwpp1",
        name: "Top 5 Namespace Specific Alerts",
        content: "No data available",
        img: "https://cdn-icons-png.flaticon.com/512/3589/3589863.png",
      },
      {
        id: "cwpp2",
        name: "World Pad Alerts",
        content: "No data available",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DvY0tpPIFvKW2-5K_k3oqc94wb1xddiZVvD9GyRghoNzwUqymtKxYJcYMS4atKUJJ6g&usqp=CAU",
      },
    ],
    IMAGE: [
      {
        id: "image1",
        name: "Image Risk Assessment",
        content: "No data available",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kcuUKHt6040hJFoiz6dNq7FlnFT2QPMZSMfYgd--XmkuzonZN6TNKz-ItWYuRxlmwFE&usqp=CAU",
      },
      {
        id: "image2",
        name: "Image Security Scan",
        content: "No data available",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScAb_FHgvl0A-OBi9trkfES_Xv1xgetjr2CnVFLoE1XL4Yj8nxEh2ZFu5kVwRzLTZ3CKU&usqp=CAU",
      },
    ],
    TICKET: [
      {
        id: "ticket1",
        name: "Ticket Assessment",
        content: "No data available",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DvY0tpPIFvKW2-5K_k3oqc94wb1xddiZVvD9GyRghoNzwUqymtKxYJcYMS4atKUJJ6g&usqp=CAU",
      },
      {
        id: "ticket2",
        name: "Ticket Security Scan",
        content: "No data available",
        img: "https://www.iconpacks.net/icons/1/free-pie-chart-icon-683-thumb.png",
      },
    ],
  },
};

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("CSPM");
  const [selectedWidgets, setSelectedWidgets] = useState({
    CSPM: [...widgetData.categories.CSPM],
    CWPP: [...widgetData.categories.CWPP],
    IMAGE: [...widgetData.categories.IMAGE],
    TICKET: [...widgetData.categories.TICKET],
  });
  const [temporarySelection, setTemporarySelection] = useState({
    CSPM: [...selectedWidgets.CSPM],
    CWPP: [...selectedWidgets.CWPP],
    IMAGE: [...selectedWidgets.IMAGE],
    TICKET: [...selectedWidgets.TICKET],
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCheckboxChange = (category, widget) => {
    setTemporarySelection((prevSelection) => {
      const isSelected = prevSelection[category].includes(widget);
      if (isSelected) {
        return {
          ...prevSelection,
          [category]: prevSelection[category].filter((w) => w.id !== widget.id),
        };
      } else {
        return {
          ...prevSelection,
          [category]: [...prevSelection[category], widget],
        };
      }
    });
  };

  const handleConfirm = () => {
    setSelectedWidgets(temporarySelection);
    toggleSidebar();
  };

  const renderTabContent = () => {
    return widgetData.categories[activeTab].map((widget) => (
      <label key={widget.id} className="tab-widgets">
        <input
          type="checkbox"
          checked={temporarySelection[activeTab].includes(widget)}
          onChange={() => handleCheckboxChange(activeTab, widget)}
        />
        <p>{widget.name}</p>
      </label>
    ));
  };

  const renderWidgetsList = (category) => {
    return selectedWidgets[category].map((widget) => (
      <div key={widget.id} className="widget-bg col-lg-4">
        <h6>{widget.name}</h6>
        <div className="widgets-description">
          <img className="img-fluid" src={widget.img}></img>
          <p>{widget.content}</p>
        </div>
      </div>
    ));
  };
  return (
    <main className="mainContainer">
      <section className="dashboardSection">
        <div className="dashboardTitle">
          <h5 className="dashBoardHeading">CNAPP Dashboard</h5>
          <div>
            <button className="btn topWidgetBtn" onClick={toggleSidebar}>
              Add Widget +
            </button>
            <button className="btn topWidgetBtn">
              <i className="material-icons">refresh</i>
            </button>
            <button className="btn topWidgetBtn">:</button>
            <div className="btn-group">
              <button className="btn topWidgetBtnSplit" type="button">
                <i className="material-icons">access_time</i>
              </button>
              <button
                type="button"
                className="btn topWidgetBtnSplit dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
                Last 2 Days
              </button>
            </div>
          </div>
        </div>
        <section className="WidgetsBoard">
          <div className="widgetsList row">
            <h6>CSPM Dashboard</h6>
            {renderWidgetsList("CSPM")}
          </div>
          <div className="widgetsList row">
            <h6>CWPP Dashboard</h6>
            {renderWidgetsList("CWPP")}
          </div>
          <div className="widgetsList row">
            <h6>IMAGE Dashboard</h6>
            {renderWidgetsList("IMAGE")}
          </div>
          <div className="widgetsList row">
            <h6>TICKET Dashboard</h6>
            {renderWidgetsList("TICKET")}
          </div>
        </section>
      </section>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sider-head">
          <h6>Add Widget</h6>
          <button className="closeSidebarBtn" onClick={toggleSidebar}>
            &times;
          </button>
        </div>

        {/* Tabs */}
        <div className="tabs">
          {Object.keys(widgetData.categories).map((category) => (
            <button
              key={category}
              className={`tab ${activeTab === category ? "active" : ""}`}
              onClick={() => handleTabClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tabContent">{renderTabContent()}</div>

        {/* Confirm and Cancel Buttons */}
        <div className="sidebar-footer">
          <button className="btn btn-cancel" onClick={toggleSidebar}>
            Cancel
          </button>
          <button className="btn btn-confirm" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </main>
  );
}
