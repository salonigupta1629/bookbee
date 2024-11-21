// "use client"
// import React from "react";
// import { HiPresentationChartBar } from "react-icons/hi2";
// import { MdShoppingBag } from "react-icons/md";
// import { HiMiniUserCircle } from "react-icons/hi2";
// import { LuInbox } from "react-icons/lu";
// import { FaChevronRight } from "react-icons/fa6";
// import { FaChevronDown } from "react-icons/fa6";

// import {
//   Card,
//   Typography,
//   List,
//   ListItem,
//   ListItemPrefix,
//   ListItemSuffix,
//   Chip,
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";

// export function Sidebar() {
//   const [open, setOpen] = React.useState(0);
 
//   const handleOpen = (value) => {
//     setOpen(open === value ? 0 : value);
//   };
 
//   return (
//     <Card className="h-[calc(100vh-2rem)] w-full border-r-2 max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
//       <div className="mb-2 p-4">
//         <Typography variant="h5" color="blue-gray">
//           Sidebar
//         </Typography>
//       </div>
//       <List>
//       <ListItem>
//           <ListItemPrefix>
//             <HiMiniUserCircle className="h-5 w-5" />
//           </ListItemPrefix>
//           Dashboard
//         </ListItem>
//         <Accordion
//           open={open === 1}
//           icon={
//             <FaChevronDown
//               strokeWidth={2.5}
//               className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
//             />
//           }
//         >
//           <ListItem className="p-0" selected={open === 1}>
//             <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
//               <ListItemPrefix>
//                 <HiPresentationChartBar className="h-5 w-5" />
//               </ListItemPrefix>
//               <Typography color="blue-gray" className="mr-auto font-normal text-base">
//                 Book
//               </Typography>
//             </AccordionHeader>
//           </ListItem>
//           <AccordionBody className="py-1">
//             <List className="p-0">
//               <ListItem>
//                 <ListItemPrefix>
//                   <FaChevronRight strokeWidth={3} className="h-3 w-5" />
//                 </ListItemPrefix>
//                 Insert & Manage
//               </ListItem>
             
//             </List>
//           </AccordionBody>
//         </Accordion>
//         <Accordion
//           open={open === 2}
//           icon={
//             <FaChevronDown
//               strokeWidth={2.5}
//               className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
//             />
//           }
//         >
//           <ListItem className="p-0" selected={open === 2}>
//             <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
//               <ListItemPrefix>
//                 <MdShoppingBag className="h-5 w-5" />
//               </ListItemPrefix>
//               <Typography color="blue-gray" className="mr-auto font-normal">
//                 Student
//               </Typography>
//             </AccordionHeader>
//           </ListItem>
//           <AccordionBody className="py-1">
//             <List className="p-0">
//               <ListItem>
//                 <ListItemPrefix>
//                   <FaChevronRight strokeWidth={3} className="h-3 w-5" />
//                 </ListItemPrefix>
//                 Insert & Manage
//               </ListItem>
             
//             </List>
//           </AccordionBody>
//         </Accordion>
//         <ListItem>
//           <ListItemPrefix>
//             <LuInbox className="h-5 w-5" />
//           </ListItemPrefix>
//           Borrow List
//           <ListItemSuffix>
//             <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
//           </ListItemSuffix>
//         </ListItem>
//         <Accordion
//           open={open === 1}
//           icon={
//             <FaChevronDown
//               strokeWidth={2.5}
//               className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
//             />
//           }
//         >
//           <ListItem className="p-0" selected={open === 1}>
//             <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
//               <ListItemPrefix>
//                 <HiPresentationChartBar className="h-5 w-5" />
//               </ListItemPrefix>
//               <Typography color="blue-gray" className="mr-auto font-normal">
//                 Admin
//               </Typography>
//             </AccordionHeader>
//           </ListItem>
//           <AccordionBody className="py-1">
//             <List className="p-0">
//               <ListItem>
//                 <ListItemPrefix>
//                   <FaChevronRight strokeWidth={3} className="h-3 w-5" />
//                 </ListItemPrefix>
//                 Edit Profile
//               </ListItem>
//               <ListItem>
//                 <ListItemPrefix>
//                   <FaChevronRight strokeWidth={3} className="h-3 w-5" />
//                 </ListItemPrefix>
//               Change Password
//               </ListItem>
             
//             </List>
//           </AccordionBody>
//         </Accordion>
//       </List>
//     </Card>
//   );
// }
"use client";
import React from "react";
import { HiPresentationChartBar } from "react-icons/hi2";
import { MdShoppingBag } from "react-icons/md";
import { HiMiniUserCircle } from "react-icons/hi2";
import { LuInbox } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function Sidebar() {
  // State for each accordion
  const [openBook, setOpenBook] = React.useState(false);
  const [openStudent, setOpenStudent] = React.useState(false);
  const [openAdmin, setOpenAdmin] = React.useState(false);

  // Toggle Book accordion
  const handleOpenBook = () => {
    console.log("Toggling Book accordion:", !openBook);  // Debugging
    setOpenBook(prev => !prev);  // Toggle Book accordion state
  };

  // Toggle Student accordion
  const handleOpenStudent = () => {
    console.log("Toggling Student accordion:", !openStudent);  // Debugging
    setOpenStudent(prev => !prev);  // Toggle Student accordion state
  };

  // Toggle Admin accordion
  const handleOpenAdmin = () => {
    console.log("Toggling Admin accordion:", !openAdmin);  // Debugging
    setOpenAdmin(prev => !prev);  // Toggle Admin accordion state
  };

  return (
    <Card className="h-[calc(100vh-2rem)] w-full border-r-2 max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <HiMiniUserCircle className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>

        {/* Book Accordion */}
        <Accordion open={openBook} icon={
          <FaChevronDown
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${openBook ? "rotate-180" : ""}`}
          />
        }>
          <ListItem className="p-0" selected={openBook}>
            <AccordionHeader onClick={handleOpenBook} className="border-b-0 p-3">
              <ListItemPrefix>
                <HiPresentationChartBar className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal text-base">
                Book
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <FaChevronRight strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Insert & Manage
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>

        {/* Student Accordion */}
        <Accordion open={openStudent} icon={
          <FaChevronDown
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${openStudent ? "rotate-180" : ""}`}
          />
        }>
          <ListItem className="p-0" selected={openStudent}>
            <AccordionHeader onClick={handleOpenStudent} className="border-b-0 p-3">
              <ListItemPrefix>
                <MdShoppingBag className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Student
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <FaChevronRight strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Insert & Manage
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>

        {/* Borrow List */}
        <ListItem>
          <ListItemPrefix>
            <LuInbox className="h-5 w-5" />
          </ListItemPrefix>
          Borrow List
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>

        {/* Admin Accordion */}
        <Accordion open={openAdmin} icon={
          <FaChevronDown
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${openAdmin ? "rotate-180" : ""}`}
          />
        }>
          <ListItem className="p-0" selected={openAdmin}>
            <AccordionHeader onClick={handleOpenAdmin} className="border-b-0 p-3">
              <ListItemPrefix>
                <HiPresentationChartBar className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Admin
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <FaChevronRight strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Edit Profile
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <FaChevronRight strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Change Password
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
      </List>
    </Card>
  );
}
