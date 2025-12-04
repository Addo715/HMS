import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.jpg'
import roomImg2 from './roomImg2.jpg'
import roomImg3 from './roomImg3.jpg'
import roomImg4 from './roomImg4.jpg'
import roomImg5 from './roomImg5.jpg'
import roomImg6 from './roomImg6.jpg'
import roomImg7 from './roomImg7.jpg'
import roomImg8 from './roomImg8.jpg'
import roomImg9 from './roomImg9.jpg'
import roomImg10 from './roomImg10.jpg'
// import roomImg11 from './roomImg11.jpg'
import roomImg12 from './roomImg12.jpg'
import roomImg13 from './roomImg13.jpg'
import roomImg14 from './roomImg14.jpg'
import roomImg15 from './room15.jpg'
import roomImg16 from './roomImg16.jpg'
import roomImg17 from './roomImg17.jpg'
import roomImg18 from './roomImg18.jpg'
import roomImg19 from './roomImg19.jpg'
import roomImg20 from './roomImg20.jpg'
import roomImg21 from './roomImg21.jpg'
import roomImg22 from './roomImg22.jpg'
import roomImg23 from './roomImg23.jpg'
import roomImg24 from './roomImg24.jpg'
import roomImg25 from './roomImg25.jpg'
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";



export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    // regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
}

export const cities = [
    "Dubai",
    "Singapore",
    "New York",
    "London",
];


// Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];



// Rooms Dummy Data
export const roomsDummyData = [
    {
    _id:" room1", // Unique ID
    roomType: "Double Bed",
    pricePerNight: 399,
    amenities: ["Room Service", "Mountain View", "Pool Access"],
    images: [roomImg2, roomImg1, roomImg12, roomImg13, roomImg25 ],
    isAvailable: true,
    name: "Special Gardens",
    address: "Main Road Street ",
  },

    {
    _id: "room2", // Unique ID
    roomType: "Double Bed",
    pricePerNight: 350,
    amenities: ["Free WiFi", "Free Breakfast", "Room Service"],
    images: [roomImg23, roomImg24, roomImg20, roomImg18, roomImg7 ],
    isAvailable: true,
    name: "Special Gardens",
    address: "Main Road Street",
  },

    {
    _id:" room3", // Unique ID
    roomType: "Single Bed",
    pricePerNight: 250,
    amenities: ["Room Service", "Mountain View", "Pool Access"],
    images: [roomImg15, roomImg8, roomImg13, roomImg16, roomImg22 ],
    isAvailable: true,
    name: "Special Gardens",
    address: "Main Road Street ",
  },

    {
    _id: "room4", // Unique ID
    roomType: "Family suite",
    pricePerNight: 400,
    amenities: ["Free WiFi", "Free Breakfast", "Room Service"],
    images: [roomImg5, roomImg6, roomImg9, roomImg14, roomImg17 ],
    isAvailable: true,
    name: "Special Gardens",
    address: "Main Road Street",
  },

    {
    _id: "room5", // Unique ID
    roomType: "Family suite",
    pricePerNight: 400,
    amenities: ["Room Service", "Mountain View", "Pool Access"],
    images: [roomImg10, roomImg19, roomImg21, roomImg4, roomImg3 ],
    isAvailable: true,
    name: "Special Gardens",
    address: "Main Road Street",
  },
]

