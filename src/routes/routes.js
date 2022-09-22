import config from '~/config';

import Home from "~/pages/Home";
import Hospitality from "~/pages/Hospitality";
import Memberships from "~/pages/Memberships";
import Tours from "~/pages/Tours";

const publicRoutes =[
    { path: config.routes.home, component: Home },
    { path: config.routes.hospitality, component: Hospitality },
    { path: config.routes.memberships, component: Memberships },
    { path: config.routes.tours, component: Tours },

    
];
const privateRoutes =[

]
export {privateRoutes,publicRoutes} ;