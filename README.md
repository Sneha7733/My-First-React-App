# Ethereum Validator App

Ethereum Validator App is a specialized application designed to provide comprehensive information about Ethereum validators fetched from Beaconcha.in, a trusted source for Ethereum blockchain data. Whether you're a validator, investor, or enthusiast, Ethereum Validator App offers valuable insights into the Ethereum Validator network.

## Core Aspects Of The App:

1. *Validator Details:*
   - Ethereum Validator App provides detailed information about individual Ethereum validators. This includes essential data such as validator ID, status, balance, performance metrics, information on Epoch, and withdrawals.

2. *Attestations and Performance:*
   - Users can track validator performance metrics such as the Epoch number, Attestations slot, Inclusion Slot, its Status, start, and end of those performance.

3. *Top 10 Validators:*
   - Ethereum Validator App highlights the top 10 Ethereum validators based on criteria such as stake size, efficiency, and reliability. This feature helps users identify leading validators in the network and also their information.

## Architecture Overview

The Ethereum Validator App is built using React.js for the frontend, utilizing components to manage UI elements and state. The application fetches data from Beaconcha.in API endpoints to populate validator information dynamically.

### Frontend Architecture

- *React Components:* Structured components such as Navbar, Sidebar(Top Validator List), Validator Search and Validator Details are used to organize the application's frontend.
- *Routing:* Handled by react-router-dom to navigate between different sections of the application (Welcome,Validator Search, Validator Details, About Top Validator List from Sidebar).

### Backend Integration

- *API Integration:* Communicates with Beaconcha.in API endpoints to retrieve real-time data about Ethereum 2.0 validators and their performance metrics.

## Getting Started

To run the Ethereum Validator App locally on your machine, make sure you have the following prerequisites installed:

### Prerequisites

- Node.js (version 20.x or higher)
- npm (Node Package Manager)
- Axios (for making HTTP requests)


### Steps

- Check Versions
       node -v
       npm -v
- Create react app
- add files to respective folders

   my-react-app/
├── public/
│   ├── eth-valid.jpg
│   ├── index.html
├── src/
│   ├── About.css
│   ├── About.js
│   ├── App.js
│   ├── App.css
│   ├── beaconchaAPI.js
│   ├── index.js
│   ├── index.css
│   ├── Navbar.css
│   ├── Navbar.js
│   ├── Sidebar.css
│   ├── Sidebar.js
│   ├── Validator_Info.css
│   └── Validator_Info.js
│   ├── Validator.css
│   └── Validator.js
│   ├── WEL_COME.css
│   └── WEL_COME.js
├── .gitignore
├── README.md
├── package-lock.json 
└── package.json
