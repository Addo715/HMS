// import React, { useEffect, useState } from 'react';
// import { roomsDummyData, facilityIcons } from '../assets/assets';
// import { Link } from 'react-router-dom';

// const CheckBox = ({ label, selected, onChange }) => (
//   <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
//     <input
//       type="checkbox"
//       checked={selected}
//       onChange={(e) => onChange(e.target.checked, label)}
//       className="accent-black"
//     />
//     <span className="font-light select-none">{label}</span>
//   </label>
// );

// const RadioButton = ({ label, selected, onChange }) => (
//   <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
//     <input
//       type="radio"
//       name="sortOption"
//       checked={selected}
//       onChange={() => onChange(label)}
//       className="accent-black"
//     />
//     <span className="font-light select-none">{label}</span>
//   </label>
// );

// const AllRooms = () => {
//   const [openFilters, setOpenFilters] = useState(false);
//   const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
//   const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
//   const [selectedSortOption, setSelectedSortOption] = useState('');

//   const roomTypes = ['Single Bed', 'Double Bed', 'Luxury Room', 'Family Suite'];
//   const priceRanges = ['0 to 500', '500 to 1000', '1000 to 2000', '2000 to 3000'];
//   const sortOptions = ['Price Low to High', 'Price High to Low', 'Newest First'];

//   const clearFilters = () => {
//     setSelectedRoomTypes([]);
//     setSelectedPriceRanges([]);
//     setSelectedSortOption('');
//   };

//   const handleRoomTypeChange = (checked, label) => {
//     setSelectedRoomTypes((prev) =>
//       checked ? [...prev, label] : prev.filter((item) => item !== label)
//     );
//   };

//   const handlePriceRangeChange = (checked, label) => {
//     setSelectedPriceRanges((prev) =>
//       checked ? [...prev, label] : prev.filter((item) => item !== label)
//     );
//   };

//   const handleSortOptionChange = (label) => {
//     setSelectedSortOption(label);
//   };

//   const filteredRooms = roomsDummyData.filter((room) => {
//     const matchesRoomType =
//       selectedRoomTypes.length === 0 || selectedRoomTypes.includes(room.roomType);
//     let matchesPriceRange = true;

//     if (selectedPriceRanges.length > 0) {
//       matchesPriceRange = selectedPriceRanges.some((range) => {
//         const [min, max] = range.split(' to ').map(Number);
//         return room.pricePerNight >= min && room.pricePerNight <= max;
//       });
//     }

//     return matchesRoomType && matchesPriceRange;
//   });

//   const sortedRooms = [...filteredRooms].sort((a, b) => {
//     if (selectedSortOption === 'Price Low to High') {
//       return a.pricePerNight - b.pricePerNight;
//     } else if (selectedSortOption === 'Price High to Low') {
//       return b.pricePerNight - a.pricePerNight;
//     } else if (selectedSortOption === 'Newest First') {
//       return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
//     }
//     return 0;
//   });

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="bg-white text-black min-h-screen">
//       <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 px-4 sm:px-8 md:px-16 lg:px-24 gap-8">

//         {/* Rooms List */}
//         <div className="flex-1 w-full">
//           {sortedRooms.length === 0 ? (
//             <div className="text-center py-20">
//               <p className="text-gray-700 text-lg">No rooms found matching your filters.</p>
//               <button onClick={clearFilters} className="mt-4 text-black hover:underline">
//                 Clear all filters
//               </button>
//             </div>
//           ) : (
//             sortedRooms.map((room) => (
//               <Link key={room._id} to={`/rooms/${room._id}`} className="block mb-10">
//                 <div className="flex flex-col md:flex-row border border-black rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
//                   <div className="md:w-1/2 w-full">
//                     <img
//                       src={room.images[0]}
//                       alt={room.roomType}
//                       className="w-full h-72 object-cover"
//                     />
//                   </div>
//                   <div className="md:w-1/2 w-full p-6 flex flex-col gap-3">
//                     <div>
//                       <p className="text-sm text-gray-700">{room.city || 'New York'}</p>
//                       <h2 className="text-2xl font-semibold">{room.name}</h2>
//                       <p className="text-gray-700 text-sm">{room.address}</p>
//                     </div>
//                     <div className="flex flex-wrap gap-3 mt-2">
//                       {room.amenities.map((amenity, index) => (
//                         <div
//                           key={index}
//                           className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
//                         >
//                           <img
//                             src={facilityIcons[amenity]}
//                             alt={amenity}
//                             className="w-4 h-4"
//                           />
//                           <span>{amenity}</span>
//                         </div>
//                       ))}
//                     </div>
//                     <div className="flex items-center justify-between mt-4">
//                       <p className="text-black font-semibold text-lg">
//                         ₵{room.pricePerNight} <span className="text-sm text-gray-600">/ night</span>
//                       </p>
//                       <button className="bg-white text-black font-semibold cursor-pointer border border-black px-4 py-2 hover:bg-gray-100 transition">
//                         Book Now
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))
//           )}
//         </div>

//         {/* Filters */}
//         <div className="bg-white w-full lg:w-80 border border-black text-black mb-8 lg:ml-8 lg:sticky lg:top-28">
//           <div className="flex items-center justify-between px-5 py-3 border-b border-black">
//             <p className="text-base font-medium">FILTERS</p>
//             <div className="text-xs cursor-pointer flex gap-2">
//               <span onClick={() => setOpenFilters(!openFilters)} className="lg:hidden">
//                 {openFilters ? 'HIDE' : 'SHOW'}
//               </span>
//               <span onClick={clearFilters} className="hidden lg:block">
//                 CLEAR
//               </span>
//             </div>
//           </div>

//           <div className={`${openFilters ? 'block' : 'hidden'} lg:block transition-all duration-300`}>
//             <div className="px-5 pt-5">
//               <p className="font-medium pb-2">Room Type</p>
//               {roomTypes.map((room, index) => (
//                 <CheckBox
//                   key={index}
//                   label={room}
//                   selected={selectedRoomTypes.includes(room)}
//                   onChange={handleRoomTypeChange}
//                 />
//               ))}
//             </div>
//             <div className="px-5 pt-5">
//               <p className="font-medium pb-2">Price Range</p>
//               {priceRanges.map((range, index) => (
//                 <CheckBox
//                   key={index}
//                   label={range}
//                   selected={selectedPriceRanges.includes(range)}
//                   onChange={handlePriceRangeChange}
//                 />
//               ))}
//             </div>
//             <div className="px-5 pt-5 pb-7">
//               <p className="font-medium pb-2">Sort By</p>
//               {sortOptions.map((option, index) => (
//                 <RadioButton
//                   key={index}
//                   label={option}
//                   selected={selectedSortOption === option}
//                   onChange={handleSortOptionChange}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllRooms;



import React, { useEffect } from 'react';
import { roomsDummyData, facilityIcons } from '../assets/assets';
import { Link } from 'react-router-dom';

const AllRooms = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen pt-28 px-4 sm:px-8 md:px-16 lg:px-24">
      <h1 className="text-3xl font-bold mb-10 text-center">All Rooms</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {roomsDummyData.map((room) => (
          <Link key={room._id} to={`/rooms/${room._id}`} className="block">
            <div className="border border-black rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img
                src={room.images[0]}
                alt={room.roomType}
                className="w-full h-72 object-cover"
              />
              <div className="p-6 flex flex-col gap-3">
                <div>
                  <p className="text-sm text-gray-700">{room.city || 'New York'}</p>
                  <h2 className="text-2xl font-semibold">{room.name}</h2>
                  <p className="text-gray-700 text-sm">{room.address}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {room.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      <img
                        src={facilityIcons[amenity]}
                        alt={amenity}
                        className="w-4 h-4"
                      />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-black font-semibold text-lg">
                    ₵{room.pricePerNight} <span className="text-sm text-gray-600">/ night</span>
                  </p>
                  <button className="bg-white text-black font-semibold cursor-pointer border border-black px-4 py-2 hover:bg-gray-100 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllRooms;
