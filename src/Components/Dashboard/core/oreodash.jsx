import React from "react";
import AppList from "./applists";
import EList from "./ecommerceList";
import InterfaceList from "./interfaceList";
import FormsList from "./formsLists";
import TablesList from "./TablesList";
import ChartList from "./chartsList";
import WidgetList from "./WidgetsList";
import AuthenticationList from "./authenticationList";
import SampleList from "./sampleList";
import MapList from "./MapsList";
import NestedList from "./list";

const OreoDash = () => {
  return (
    <div className="sd-content-container">
      <div className="sd-main"> --MAIN </div>
      <NestedList />
      <AppList />
      <EList />
      <InterfaceList />
      <div className="sd-main"> -- FORMS, CHART, TABLES</div>
      <FormsList />
      <TablesList />
      <ChartList />
      <div className="sd-main"> -- EXTRA COMPONENTS</div>
      <WidgetList />
      <AuthenticationList />
      <SampleList />
      <MapList />
      <div className="sd-main"> -- Extra</div>
    </div>
  );
};
export default OreoDash;
