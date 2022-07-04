import Index from './index/index';
import Projects from './projects/projects';
import CV from './cv/cv';
import Contact from './contact/contact';
import Blog from './blog/blog';

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
    {
        path: '/blog',
        ruta: Blog
    }
];

export default Rutas;