import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { roomsDummyData, facilityIcons } from "../assets/assets";

const RoomsDetails = () => {
  const { id } = useParams();
  const room = roomsDummyData.find((room) => room._id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!room) {
    return (
      <div className="text-center py-32 px-4 sm:px-8 md:px-16 lg:px-24">
        <p className="text-gray-500 text-lg">Room not found</p>
        <Link to="/rooms" className="text-black font-semibold hover:underline mt-4 inline-block">
          Back to All Rooms
        </Link>
      </div>
    );
  }

  const handleBookNow = () => {
    if (!checkIn || !checkOut) {
      toast.error("Please select both check-in and check-out dates");
      return;
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkInDate < today) {
      toast.error("Check-in date cannot be in the past");
      return;
    }

    if (checkOutDate <= checkInDate) {
      toast.error("Check-out date must be after check-in date");
      return;
    }

    const bookingData = {
      roomId: room._id,
      name: room.name,
      address: room.address,
      city: room.city || "New York",
      pricePerNight: room.pricePerNight,
      roomType: room.roomType,
      image: room.images[0],
      checkIn,
      checkOut,
      total:
        room.pricePerNight *
        Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)),
      status: "Unpaid",
      bookingDate: new Date().toISOString(),
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    existingBookings.push(bookingData);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    toast.success("Room added to your bookings!", { duration: 4000, position: "top-center", icon: "✅" });

    setCheckIn("");
    setCheckOut("");
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 pt-28 pb-20 text-black">
      <Toaster />

      {/* Title and Location */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">{room.name}</h1>
        <p className="text-gray-700">{room.address}</p>
        <p className="text-gray-700">{room.city || "New York"}</p>
      </div>

      {/* Main Section */}
      <div className="mt-8 flex flex-col lg:flex-row gap-10">
        {/* Images */}
        <div className="flex-1 space-y-4">
          <div className="rounded-lg overflow-hidden border border-black shadow-sm">
            <img
              src={room.images[selectedImage]}
              alt={`${room.roomType} large`}
              className="w-full h-72 sm:h-96 object-cover"
            />
          </div>
          <div className="flex gap-3 overflow-x-auto">
            {room.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  selectedImage === index ? "border-black" : "border-gray-300"
                }`}
              >
                <img
                  src={image}
                  alt={`thumbnail ${index + 1}`}
                  className="w-full h-full cursor-pointer object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Room Details & Booking */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="space-y-2">
            <p className="text-2xl font-semibold">₵{room.pricePerNight} / night</p>
            <p className="text-gray-700">{room.roomType}</p>
          </div>

          {/* Amenities */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Amenities</h2>
            <div className="flex flex-wrap gap-3">
              {room.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-100 text-black px-3 py-1 rounded-full border border-black text-sm"
                >
                  <img src={facilityIcons[amenity]} alt={amenity} className="w-4 h-4" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-gray-50 border border-black p-4 rounded-lg flex flex-col sm:flex-row sm:items-end gap-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">Check-in</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="border border-black rounded px-3 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">Check-out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || new Date().toISOString().split("T")[0]}
                className="border border-black rounded px-3 py-2"
              />
            </div>
            <button
              onClick={handleBookNow}
              className="bg-black cursor-pointer text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Book Now
            </button>
          </div>

          {/* My Bookings Link */}
          <div className="mt-4">
            <Link
              to="/my-bookings"
              className="text-black hover:underline inline-flex items-center gap-2 font-medium"
            >
              View My Bookings →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsDetails;
