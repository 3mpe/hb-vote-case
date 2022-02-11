import { ListPage, CreatePage } from './../pages/index';

export const urls = {
    list: '/',
    create: '/create',
};

export const routes = [
    {
        path: urls.list,
        element: <ListPage />,
        exact: true,
    },
    {
        path: urls.create,
        element: <CreatePage />,
    }
];