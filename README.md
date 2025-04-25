# Crypto Price Tracker

A real-time cryptocurrency price tracker application built with **React**, **Redux Toolkit**, and **WebSocket**. The app tracks the latest price, percentage change, volume, and other market data of various cryptocurrencies.

## Setup Instructions

### 1. Clone the repository
git clone https://github.com/your-username/crypto-price-tracker.git
cd crypto-price-tracker
  ## install depedencies 
  npm install
  ## start the development server
  npm run dev

## Tech Stack & Architecture
  ## Tech Stack
 React: Frontend framework used to build the UI components and manage the app's state.

 Redux Toolkit: Used for state management, especially for managing the data coming from the WebSocket and performing asynchronous operations.

 WebSocket (Binance API): Used to fetch live crypto data in real-time, including price, market cap, volume, and other statistics.

 Tailwind CSS: Utility-first CSS framework used to style the app.

 React Icons: Used for adding icons to the app (e.g., up/down arrows for percentage changes).



## Architecture
## Component Structure:

App.jsx: The main component that handles WebSocket connections and renders the Table component.

Table.jsx: Displays the list of coins and their respective prices, percentage changes, volume, etc.

Redux Store: Stores the global state, including coins' data, loading state, and error handling. It is updated with real-time data coming from the WebSocket.

WebSocket: Connects to the Binance API's WebSocket endpoint and listens for real-time price updates. The data is dispatched to the Redux store and then displayed in the Table.

## Real-Time Data:

The application continuously fetches and updates the prices and percentages every time the WebSocket sends a new message. It uses Redux to store the data globally and automatically triggers UI updates.

## Features:

View cryptocurrency details like name, price, 24h change, volume, market cap, and more.

Real-time updates of price changes and percentage changes.

Support for multiple currencies (USD, INR, etc.).

Dynamic chart that displays the price movement over the last 7 days using an SVG-based polyline.

## Demo Video
Alternatively, you can watch the demo video here :[https://drive.google.com/drive/my-drive](https://drive.google.com/drive/my-drive?q=type:video%20parent:0AFZFNnOxyWYeUk9PVA)
