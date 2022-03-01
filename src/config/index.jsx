import {HomePage, LoginPage} from "components/containers";

export const ROUTES = [
    {
        name: "Home",
        path: "/",
        component: <HomePage/>,
    },
    {
        name: "Login",
        path: "/login",
        component: <LoginPage/>,
    },
];

export const TOP_HEADER = [
    {
        id: 1,
        name: 'ENG'
    },
    {
        id: 2,
        name: 'Company'
    },
    {
        id: 3,
        name: 'Partner Market Place'
    }
]

export const BOTTOM_HEADER = [
    {
        id: 1,
        name: 'Home'
    },
    {
        id: 2,
        name: 'Auto Homepage'
    },
    {
        id: 3,
        name: 'Sales'
    },
    {
        id: 4,
        name: 'CRM'
    },
    {
        id: 5,
        name: 'Electronic Office'
    },
    {
        id: 6,
        name: 'Cloud ERP'
    },
    {
        id: 7,
        name: 'SSL'
    }
]