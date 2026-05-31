Weather Forecast App

A modern and responsive Weather Forecast Application built with React.js that allows users to search for any city and view real-time weather information. The application fetches live weather data using the WeatherAPI service and displays it through a clean and user-friendly interface with a modern glassmorphism-inspired design.

Features
Search weather by city name
Display current temperature in Celsius
Show weather condition and weather icon
View humidity percentage
Display wind speed
Show "Feels Like" temperature
Fully responsive design
Modern glassmorphism UI with gradient background
Real-time weather data using WeatherAPI
Tech Stack
React.js
JavaScript (ES6+)
CSS3
WeatherAPI
React Hooks (useState)
React Icons
Project Structure
src/
├── App.js
├── App.css
└── index.js
Getting Started
Clone the Repository
git clone <repository-url>
Navigate to the Project Directory
cd weather-app
Install Dependencies
npm install
Start the Development Server
npm start

The application will run at:

http://localhost:3000
API Configuration

This project uses WeatherAPI to fetch weather data.

Get your API key from:

https://www.weatherapi.com/

Replace the API key in App.js if needed:

https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${cityname}
Application Highlights
Real-time weather information
City-based weather search
Responsive layout for desktop and mobile devices
Modern glassmorphism-inspired user interface
Clean and intuitive user experience
Future Enhancements
Multi-day weather forecast
Search history
Dark and light mode support
Current location weather detection
Loading states and animations
Better error handling
Additional weather metrics
Author

Rishi Singh

This project was built to practice React fundamentals, API integration, state management using React Hooks, and modern frontend UI design.
