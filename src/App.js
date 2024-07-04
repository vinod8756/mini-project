import { useState } from "react";
import NavBar from "./Components/NavBar";
import './App.css';

function App() {
  const [home, sethome] = useState("");
  let element;

  if (home === "") {
    element = null;
  } else if (home === "sales") {
    element = (
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          title="mini"
          src="https://app.powerbi.com/reportEmbed?reportId=5698bf22-0d0f-42f7-bc5e-9ba96ff58ca5&autoAuth=true&ctid=1c87fdb6-051d-43a4-a73c-ad6de4fac5b2"
          allowFullScreen={true}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
        ></iframe>
      </div>
    );
  } else if (home === "employee") {
    element = (
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          title="Employee"
          src="https://app.powerbi.com/reportEmbed?reportId=a35bf946-44cc-4ecd-ba7f-ed8c3b1b0d2c&autoAuth=true&ctid=1c87fdb6-051d-43a4-a73c-ad6de4fac5b2"
          allowFullScreen={true}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
        ></iframe>
      </div>
    );
  } else if (home === "Manufacturing") {
    element = (
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          title="Manufacturing"
          src="https://app.powerbi.com/reportEmbed?reportId=7b264ea3-c1e2-4382-981d-8bd243a40b2e&autoAuth=true&ctid=1c87fdb6-051d-43a4-a73c-ad6de4fac5b2"
          allowFullScreen={true}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
        ></iframe>
      </div>
    );
  }

  return (
    <div className="App">
      <NavBar state={(i) => sethome(i)} />
      {home === "" && (
        <div className="welcome-container">
          <h1 className="welcome-text">Welcome to AnalyticaHub</h1>
          <div className="button-container">
            <button className="nav-button" onClick={() => sethome('sales')}>Sales</button>
            <button className="nav-button" onClick={() => sethome('employee')}>Employee</button>
            <button className="nav-button" onClick={() => sethome('Manufacturing')}>Manufacturing</button>
          </div>
        </div>
      )}
      {element}
    </div>
  );
}

export default App;
