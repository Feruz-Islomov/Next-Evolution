import { useState, useEffect } from "react";
function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [Dashboard, setDashboard] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setDashboard(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Post - {Dashboard.posts}</h2>
      <h2>Likes - {Dashboard.likes}</h2>
      <h2>Followers - {Dashboard.followers}</h2>
      <h2>Following - {Dashboard.following}</h2>
    </div>
  );
}
export default Dashboard;
