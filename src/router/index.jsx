import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import LayoutRoot from '../layout/LayoutRoot'
import LayoutPrivate from '../layout/LayoutPrivate'


export const router= createBrowserRouter ([  //configuracion del acceso a las paginas
    {
        path:'/', //ruta raiz
        element: <LayoutRoot/>, //retornar el elemento, aquí estara el navbar, footer... caracteristicas que se comparten en todo el citio web
        children: [//aquí se agregan mas rutas
            {
                index:true, //ruta raiz 
                element:<Home/>, //envia a la pagina home
            },
            {
                path:'/dashboard',
                element: <LayoutPrivate/>, //rutas protegidas o privadas (donde el usario puede estar subscrito)
                children:[
                    {
                        index:true,
                        element: <Dashboard/>
                    }
                ]
                
            }

        ]
    }
])