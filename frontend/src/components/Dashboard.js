// import React from "react";
// import Calendar from "./Calendar";


// function Dashboard() {
//     return (
//         <div>
//             <h1>Welcome to the Dashboard</h1>
//             <p>This is your private dashboard. Only authenticated users can access this page.</p>
//             <Calendar/>
//         </div>
//     );
// }

// export default Dashboard;




import React from "react";
import Calendar from "./Calendar";
import Admin from "./Admin";
import NavScrollExample from "./NavScrollExample";


function Dashboard() {
    return (
        <>
        <NavScrollExample/>
        <Admin/>
        </>
    );
}

export default Dashboard;


