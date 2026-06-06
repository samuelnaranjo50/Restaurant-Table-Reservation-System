# Table Reservation System

## Project Overview
The primary engineering goal of this application was to build a robust, dynamic booking engine without relying on third-party form libraries (like Formik or React Hook Form). The objective was to gain a comprehensive understanding of how these libraries are constructed and the underlying state mechanisms that make them work.

To achieve this, the project features a custom validation micro-framework, built entirely from scratch using native React hooks, state machines, the Context API, and reducers. This architecture ensures a highly predictable and performant user experience.

The application itself is a React-based table reservation system featuring dynamic time slot management and a fully responsive design. This restaurant reservation scenario served as the perfect real-world testbed to validate the quality of the logic implemented within the micro-framework, allowing me to observe exactly how it interacts with a complex, multi-step form in action.

## Live Deployment

*[Experience the live application here](https://restaurant-table-reservation-system-khaki.vercel.app/)*

## 🛠️ Tech Stack
* **Frontend:** React (Hooks, Context API)
* **Styling:** CSS Modules / SASS
* **Validation:** Built my own validation **micro-framework** using `reducer`, `context`, `custom hooks` and a colletion of helper methods.
* **Testing:** Jest & React Testing Library
* **Routing:** React Router 

## 🚀 Key Features
* **Dynamic Booking:** Real-time availability updates based on the selected date.
* **Form Validation:** Comprehensive client-side validation for booking details and contact information.
* **Responsive Design:** Optimized for mobile, tablet, and desktop viewing.
* **Unit Testing:** Verified logic for the `initializeTimes` and `updateTimes` reducer functions. Verified user experience validation form error feedback.

## 🧪 Testing
To run the test suite:
```bash
npm test
```
*Includes tests for HTML5 validation, state transitions, and component rendering.*

## 📦 Installation
1. Clone the repository:
 ```bash
git clone https://github.com/samuelnaranjo50/Restaurant-Table-Reservation-System.git
```
2. Install dependencies:
 ```bash
npm install
```
3. Start the dev server:
 ```bash
npm start
```


