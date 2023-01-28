// // import "./App.css";
// import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import format from "date-fns/format";
// import parse from "date-fns/parse";
// import startOfWeek from "date-fns/startOfWeek";
// import getDay from "date-fns/getDay";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from "react-datepicker";
// import { useState } from "react";
// import "react-datepicker/dist/react-datepicker.css";
// import './Cal.css';


// const locales = {
//   "en-US": require("date-fns/locale/en-US"),
// };

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

// const events = [
//     {
//       title: "Exam Notice",
//       allDay: true,
//       start: new Date(2023, 0, 1),    /* Date formate:--> year/month/day*/
//       end: new Date(2023, 0, 1)
//   },
//   {
//        title: "Exam Date",
//       start: new Date(2023, 0, 7),   /* here month count  start with 0, means 0 = jan */
//       end: new Date(2023, 0, 10)
//   },
//   {
//        title: "Result Date",
//       start: new Date(2023, 0, 21),
//       end: new Date(2023, 0, 23)
//   }
// ];
// ;

// const Cal = ()=>{
//   const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
//   const [allEvents, setAllEvents] = useState(events);

//   function handleAddEvent() {
//     setAllEvents([...allEvents, newEvent]);
//   }
//     return (
//           <div className="Cal">
//             <h1>Calendar</h1>
//             <h2>Add New Event</h2>
      
//             <div className="date">
//               <input
//                 type="text"
//                 placeholder="Add Title"
//                 style={{ width: "20%", marginRight: "10px" }}
//                 value={newEvent.title}
//                 onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
//               />
      
//               <DatePicker
//                 placeholderText="Start Date"
//                 style={{ marginRight: "10px",width:"200rem" }}
//                 selected={newEvent.start}
//                 onChange={(start) => setNewEvent({ ...newEvent, start })}
//               />
      
//               <DatePicker
//                 placeholderText="End Date"
//                 selected={newEvent.end}
//                 onChange={(end) => setNewEvent({ ...newEvent, end })}
//               />
//               <button style={{ marginTop: "10px",  }} onClick={handleAddEvent}>
//                 Add Event
//               </button>
//             </div>
      
//             <Calendar
//               localizer={localizer}
//               events={allEvents}
//               startAccesor="start"
//               endAccessor="end"
//               style={{ height: 250, margin: "20px",width:"auto" }}
//             />
//           </div>
//   )
// }
// export default Cal;
