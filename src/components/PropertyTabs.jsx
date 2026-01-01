import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";


export default function PropertyTabs({ description, floorPlan, lat, lng }) {
  return (
    <Tabs>
      <TabList>
        <Tab>Description</Tab>
        <Tab>Floor Plan</Tab>
        <Tab>Map</Tab>
      </TabList>

      <TabPanel><p>{description}</p></TabPanel>
      <TabPanel><img src={floorPlan} alt="Floor plan" /></TabPanel>
      <TabPanel>
        <iframe
          title="map"
          src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
        />
      </TabPanel>
    </Tabs>
  );
}