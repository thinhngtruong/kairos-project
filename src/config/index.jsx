import { HomePage, LoginPage } from "components/containers";
import Group1 from 'assets/images/group1.png';
import Group2 from 'assets/images/group2.png';
import Group3 from 'assets/images/group3.png';
import Group4 from 'assets/images/group4.png';
import Group5 from 'assets/images/group5.png';
import Group6 from 'assets/images/group6.png';

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

export const SERVICES = [
    {
        id: 1,
        img: Group1,
        title: 'Assets',
        group: [
            {
                name: 'Inventory Management',
                btn: 'G-Book'
            }
        ]
    },
    {
        id: 2,
        img: Group2,
        title: 'Accounting',
        group: [
            {
                name: 'Accounting',
                btn: 'G-Book'
            }
        ]
    },
    {
        id: 3,
        img: Group3,
        title: 'HR & Admin',
        group: [
            {
                name: 'Webmail',
                btn: 'E-office'
            },
            {
                name: 'E-Apporval',
                btn: 'E-office'
            },
            {
                name: 'E-Document',
                btn: 'E-office'
            },
            {
                name: 'E- Check in.out',
                btn: 'E-office'
            },
            {
                name: 'Co-work/Project',
                btn: 'E-office'
            },
        ]
    },
    {
        id: 4,
        img: Group4,
        title: 'Sales',
        group: [
            {
                name: 'Create Homepage',
                btn: 'Fieldmake'
            }
        ]
    },
    {
        id: 5,
        img: Group5,
        title: 'Customer',
        group: [
            {
                name: 'Customer Request Management',
                btn: 'OQUFIE'
            }
        ]
    },
    {
        id: 6,
        img: Group6,
        title: 'Security',
        group: [
            {
                name: 'SSL server',
                btn: 'SECTIGO'
            }
        ]
    },
]

export const PRICES = [
    {
        id: 1,
        title: 'Free Test',
        desc: 'Organize across all apps by hand',
        price: 0,
        unit: '$'
    },
    {
        id: 2,
        title: 'Low Price',
        desc: 'Monthly Fixed Amount',
        price: 200000,
        unit: '$'
    },
    {
        id: 3,
        title: 'Easy Using Methods',
        desc: 'Various Manuals',
        price: 200000,
        unit: '$'
    },
    {
        id: 4,
        title: 'Verified IT Service',
        desc: 'On sale in 4 countries',
        price: 300000,
        unit: 'VND',
        isSpecial: true
    }
]