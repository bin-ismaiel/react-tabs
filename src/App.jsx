import { useEffect, useState } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  };
  const selectTab = (idx) => {
    setSelectedTab(idx);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      {!isLoading && (
        <>
          <Sidebar jobs={jobs} selectTab={selectTab} />
          <Content {...jobs[selectedTab]} />
        </>
      )}
    </main>
  );
};
export default App;
