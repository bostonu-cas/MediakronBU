import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import css from "../../public/css/app.css";

const pages = [
  // Home
  { path: "/", 
    title: "Welcome", 
    component: require("./doc-pages/home.md") },
  // Items
  
  {
    title: 'API',
    pages: [
      {
        path: '/api/',
        title: 'MediaKron API',
        component: require("./doc-pages/api-readme.md")
      },
      // Other subpages
    ]
  },
  
  {
    title: 'Items',
    pages: [
      {
        path: '/items/',
        title: 'Introduction',
        component: require("../../app/items/items-readme.md")
      },
      // Other subpages
    ]
  },
  // UI
  {
    title: 'UI',
    pages: [
      {
        path: '/ui/',
        title: 'Introduction',
        component: require("../../app/ui/ui-readme.md")
      },
      // Other subpages
    ]
  },
  {
    title: 'Core CSS',
    pages: [
      {
        path: '/core-css/',
        title: 'Introduction',
        component: require("../../app/core-css/core-css-readme.md")
      },
      // Other subpages
    ]
  },
  {
    title: 'Core JS',
    pages: [
      {
        path: '/core-js/',
        title: 'Introduction',
        component: require("../../app/core-js/core-js-readme.md")
      },
      // Other subpages
    ]
  },
  
];

ReactDOM.render(
  <Catalog title="MediaKron 4 Style Guide" pages={pages} />,
  document.getElementById("catalog")
);
