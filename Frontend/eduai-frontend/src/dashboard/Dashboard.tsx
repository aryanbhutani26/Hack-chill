// import React from 'react';
// import { Toaster } from "@/components/ui/sonner"; // Import toast

// const Dashboard: React.FC = () => {

//   const showToast = () => {
//     toast('Account set up successful', {
//       position: 'top-right',
//       duration: 3000, // Duration in milliseconds
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-blue-600 text-white p-4">
//         <h1 className="text-2xl font-bold">Dashboard</h1>
//       </header>
//       <main className="p-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold">Overview</h2>
//             <p className="text-gray-600">Some overview content here...</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold">Statistics</h2>
//             <p className="text-gray-600">Some statistics content here...</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold">Recent Activity</h2>
//             <p className="text-gray-600">Some recent activity content here...</p>
//           </div>
//         </div>
//         <button onClick={showToast} className="mt-4 bg-blue-600 text-white p-2 rounded">
//           Show Toast
//         </button>
//       </main>
//       <Toaster /> {/* Add Toaster component */}
//     </div>
//   );
// }

// export default Dashboard;

import React, { useEffect } from 'react';
import { Toaster} from "@/components/ui/sonner"; // Import Toaster & toast
import { toast } from 'sonner';
const Dashboard: React.FC = () => {
  useEffect(() => {
    toast.success("Account set up is complete!", {
      position: "top-right",
      duration: 3000, // 3 seconds
      style: {
        backgroundColor: "#ffffff", // White background
        color: "#000000", // Black text
        borderRadius: "8px", // Rounded corners
        padding: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </header>
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="text-gray-600">Some overview content here...</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Statistics</h2>
            <p className="text-gray-600">Some statistics content here...</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Recent Activity</h2>
            <p className="text-gray-600">Some recent activity content here...</p>
          </div>
        </div>
      </main>
      <Toaster /> {/* Toaster for showing notifications */}
    </div>
  );
}

export default Dashboard;
