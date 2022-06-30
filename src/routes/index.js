import Index from './index/index';
import Projects from './projects/projects';
import CV from './cv/cv';
import Contact from './contact/contact';

const Rutas = [
    {
        path: '/',
        ruta: Index
    },
    {
        path: '/projects',
        ruta: Projects
    },
    {
        path: '/cv',
        ruta: CV
    },
    {
        path: '/contact',
        ruta: Contact
    },
];

export default Rutas;