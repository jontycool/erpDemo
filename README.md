# ERP Tool Demo

Activity Tracker page of an ERP Tool(Demo) that can show how long an employee was 'Active' on a given work day. I am using Create-React-App CLI to build this and also using Mock API(Mocky.io) to fetch necessary data. The 3rd party libraries used in this project are,

1. [Axios](https://www.npmjs.com/package/axios)
This package is included to fetch the employee data(Mock Data in my case).

2. [Reactjs-Popup](https://www.npmjs.com/package/reactjs-popup)
This is a great all in one library to add tooltips, modals and menus. This library offers good levels of customization as well. I have added this library to implement Modals in my page.

3. [React-Datepicker](https://www.npmjs.com/package/react-datepicker)
As the name suggests this is a great datepicker. Since this project deals with dates and date-ranges, I have added this library to make the development process easier. This also offers good levels of customization.

4. [React-Circular-Progressbar](https://www.npmjs.com/package/react-circular-progressbar)
Although I could have done without this library, I still chose to include this just to make the UI a bit more interactive.


## Component Architecture

![Component Architecture](https://i.imgur.com/Ovr9wmT.jpg)

## About

This is a Demo Project showing an user's/employee's activity or active time for a particular date. The activity can also be checked selectively by entering a date range. The dashboard will display the number of hours/minutes the person was active for a particular date. For the purpose of this project we are using mock data fetched from Mocky.io. Finally the build of this project is uploaded to Netlify(_Link below_) so that it can accessed publicly. 


## Installation Steps:
1. Clone the Repo.
2. Run 'npm install' to install all the necessary packages.
3. Run 'npm start' to serve it localhost and run locally by entering localhost:3000 in your browser.
4. Enjoy!


## Alternatively use this link to view the project online.
[ERP-DEMO](https://erp-demo.netlify.app/)
