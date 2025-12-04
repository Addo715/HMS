import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaMobileAlt } from "react-icons/fa"; // React Icons

const Payments = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { booking } = location.state || {};

  const [momoNumber, setMomoNumber] = useState("");
  const [momoName, setMomoName] = useState("");
  const [email, setEmail] = useState("");
  const [processing, setProcessing] = useState(false);

  if (!booking) {
    return (
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 pt-28 pb-20 text-center">
        <p className="text-gray-500 text-lg">No booking information found</p>
        <button
          onClick={() => navigate("/my-bookings")}
          className="mt-4 text-black hover:underline font-medium"
        >
          Go to My Bookings
        </button>
      </div>
    );
  }

  const handleMomoNumberChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/gi, "");
    if (value.length <= 10) {
      setMomoNumber(value);
    }
  };

  const validateMomoPayment = () => {
    if (!email) {
      toast.error("Please enter your email");
      return false;
    }
    if (!momoNumber || momoNumber.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile money number");
      return false;
    }
    if (!momoName) {
      toast.error("Please enter account holder name");
      return false;
    }
    return true;
  };

  const handleMomoPayment = () => {
    if (!validateMomoPayment()) return;

    setProcessing(true);

    // Simulate payment
    setTimeout(() => {
      const allBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      const updatedBookings = allBookings.map((b) => {
        if (
          b.roomId === booking.roomId &&
          b.checkIn === booking.checkIn &&
          b.checkOut === booking.checkOut
        ) {
          return {
            ...b,
            status: "Paid",
            paymentMethod: "Mobile Money",
            paymentDate: new Date().toISOString(),
          };
        }
        return b;
      });
      localStorage.setItem("bookings", JSON.stringify(updatedBookings));

      toast.success("Payment successful!", {
        duration: 3000,
        position: "top-center",
      });

      setTimeout(() => navigate("/my-bookings"), 2000);

      setProcessing(false);
    }, 2000);
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 pt-10 pb-20 text-black">
      <Toaster />

      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate("/rooms")}
          className="text-black hover:text-gray-700 mb-4 cursor-pointer flex items-center gap-2"
        >
          ← Back
        </button>
        <h1 className="text-3xl font-bold">Complete Payment</h1>
      </div>

      <div className="grid lg:grid-cols-[1fr_400px] gap-8">
        {/* Payment Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6 flex items-center gap-2">
            <FaMobileAlt size={20} />
            <h2 className="text-xl font-semibold">Mobile Money Payment</h2>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@gmail.com"
              className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
            />
          </div>

          {/* Mobile Money Number */}
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-medium mb-1">
              Mobile Money Number
            </label>
            <input
              type="text"
              value={momoNumber}
              onChange={handleMomoNumberChange}
              placeholder="0XX XXX XXXX"
              className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              Enter your mobile money number (MTN, Vodafone, or AirtelTigo)
            </p>
          </div>

          {/* Account Holder */}
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-medium mb-1">
              Account Holder Name
            </label>
            <input
              type="text"
              value={momoName}
              onChange={(e) => setMomoName(e.target.value)}
              placeholder="Full name on account"
              className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
            />
          </div>

          {/* Payment Button */}
          <button
            onClick={handleMomoPayment}
            disabled={processing}
            className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
              processing
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black hover:bg-gray-800 cursor-pointer text-white"
            }`}
          >
            {processing ? "Processing..." : `Pay ₵${booking.total}`}
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            By confirming your payment, you agree to our terms and conditions
          </p>
        </div>

        {/* Booking Summary */}
        <div className="bg-gray-50 rounded-lg p-6 h-fit sticky top-28">
          <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
          
          <div className="mb-4">
            <img
              src={booking.image}
              alt={booking.name}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-lg">{booking.name}</h3>
              <p className="text-gray-600 text-sm">{booking.roomType}</p>
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mt-0.5 flex-shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span>{booking.address}</span>
            </div>

            <div className="border-t pt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Check-In:</span>
                <span className="font-medium">
                  {new Date(booking.checkIn).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Check-Out:</span>
                <span className="font-medium">
                  {new Date(booking.checkOut).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="border-t pt-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total Amount:</span>
                <span className="text-2xl font-bold text-black">
                  ₵{booking.total}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
