import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "./_app";

function Dashboard() {
  return (
    <div id="dashboardPage">
      <h1 id="dashboard-tag"> Welcome to Dashboard</h1>
      <button id="dashboard-logout">
        <Link>Log out</Link>
      </button>
    </div>
  );
}
export default Dashboard;
