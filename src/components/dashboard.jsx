import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const Navigate = useNavigate();

  function navigate() {
    Navigate("/");
  }
  return (
    <div className=" bg-[#B9D2B1] w-full min-h-screen flex justify-center items-center flex-col">
      <h1>you have been successfully loo-ged in to your account /n</h1>

      <h1>welcome to Dashboard</h1>
      <button className="text-blue-700 font-bold" onClick={() => navigate("/")}>
        Back to login Page
      </button>
    </div>
  );
};

export default Dashboard;
