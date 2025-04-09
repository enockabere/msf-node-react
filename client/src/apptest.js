import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [soapResponse, setSoapResponse] = useState(null);

  useEffect(() => {
    // Fetch Users
    fetch("/api/bc/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("Users:", data);
        setUsers(data.value || []);
      })
      .catch((err) => console.error("Error fetching users:", err));

    // Fetch Employees
    fetch("/api/bc/employees")
      .then((res) => res.json())
      .then((data) => {
        console.log("Employees:", data);
        setEmployees(data.value || []);
      })
      .catch((err) => console.error("Error fetching employees:", err));
  }, []);

  const handleSoapPost = async () => {
    try {
      const res = await fetch("/api/bc/soap/fn-leave-planner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plannerNo: "",
          employeeNo: "MWA0001",
          myAction: "insert",
        }),
      });

      const data = await res.json();
      setSoapResponse(JSON.stringify(data, null, 2));
    } catch (err) {
      console.error("SOAP call failed:", err);
      setSoapResponse("SOAP call failed");
    }
  };

  return (
    <div>
      <h1>ESS - React + Node</h1>

      <button onClick={handleSoapPost}>🚀 Test Leave Planner SOAP</button>

      {soapResponse && (
        <>
          <h2>🧼 SOAP Response</h2>
          <pre>{JSON.stringify(soapResponse, null, 2)}</pre>
        </>
      )}

      <h2>👤 Users</h2>
      <pre>{JSON.stringify(users, null, 2)}</pre>

      <h2>👔 Employees</h2>
      <pre>{JSON.stringify(employees, null, 2)}</pre>
    </div>
  );
}

export default App;
