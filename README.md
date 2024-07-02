# Ethereum Validator App

Ethereum Validator App is a specialized application designed to provide comprehensive information about Ethereum validators fetched from Beaconcha.in, a trusted source for Ethereum blockchain data. Whether you're a validator, investor, or enthusiast, Ethereum Validator App offers valuable insights into the Ethereum Validator network.

## Key Features:

1. *Validator Details:*
   - Ethereum Validator App provides detailed information about individual Ethereum validators. This includes essential data such as validator ID, status, balance, performance metrics, information on Epoch, and withdrawals.

2. *Attestations and Performance:*
   - Users can track validator performance metrics such as the Epoch number, Attestations slot, Inclusion Slot, its Status, start, and end of those performance.

3. *Top 10 Validators:*
   - Ethereum Validator App highlights the top 10 Ethereum validators based on criteria such as stake size, efficiency, and reliability. This feature helps users identify leading validators in the network and also their information.

## Architecture Overview

The Ethereum Validator App is built using React.js for the frontend, utilizing components to manage UI elements and state. The application fetches data from Beaconcha.in API endpoints to populate validator information dynamically.

### Frontend Architecture

- *React Components:* Structured components such as Navbar, Sidebar, Validator List, and Validator Details are used to organize the application's frontend.
- *Routing:* Handled by react-router-dom to navigate between different sections of the application (Welcome, Validator List, Validator Details, About).

### Backend Integration

- *API Integration:* Communicates with Beaconcha.in API endpoints to retrieve real-time data about Ethereum 2.0 validators and their performance metrics.

## Getting Started

To run the Ethereum Validator App locally on your machine, make sure you have the following prerequisites installed:

### Prerequisites

- Node.js (version 12.x or higher)
- npm (Node Package Manager)
- Axios (for making HTTP requests)