import { getSession, signIn } from "next-auth/client";
import { useEffect, useState } from "react";
function Dashboard() {
  const [loading, setLoading] = useState(true);
  // const [session, loading] = useSession(); doesn't work
  // console.log({ session, loading });
  useEffect(() => {
    const securepage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securepage();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return <h1>Dashboard page</h1>;
}

export default Dashboard;
