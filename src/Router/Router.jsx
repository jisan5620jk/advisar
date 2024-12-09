import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home1 from '../Pages/Home1/Home1';
import ErrorPage from '../Shared/ErrorPage/ErrorPage';
import Home3 from '../Pages/Home3/Home3';
import Main3 from '../Main/Main3';
import Main11 from '../Main/Main11';
import AboutInner from '../Pages/InnerPage/AboutInner/AboutInner';
import ServiceInner from '../Pages/InnerPage/ServiceInner/ServiceInner';
import ServiceDetails from '../Pages/InnerPage/ServiceDetails/ServiceDetails';
import PortfolioDetails from '../Pages/InnerPage/PortfolioDetails/PortfolioDetails';
import BlogDetails from '../Pages/InnerPage/BlogDetails/BlogDetails';
import TeamInner from '../Pages/InnerPage/TeamInner/TeamInner';
import PricingInner from '../Pages/InnerPage/PricingInner/PricingInner';
import ContactInner from '../Pages/InnerPage/ContactInner/ContactInner';
import PortfolioInner from '../Pages/InnerPage/PortfolioInner/PortfolioInner';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home1 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main3 />,
    children: [
      {
        path: '/home3',
        element: <Home3 />,
      },
    ],
  },
  {
    errorElement: <ErrorPage />,
    element: <Main11 />,
    children: [
      {
        path: '/about',
        element: <AboutInner />,
      },
      {
        path: '/service',
        element: <ServiceInner />,
      },
      {
        path: '/service_details',
        element: <ServiceDetails />,
      },
      {
        path: '/portfolio_details',
        element: <PortfolioDetails />,
      },
      {
        path: '/blog_details',
        element: <BlogDetails />,
      },
      {
        path: '/team',
        element: <TeamInner />,
      },
      {
        path: '/portfolio',
        element: <PortfolioInner />,
      },
      {
        path: '/pricing',
        element: <PricingInner />,
      },
      {
        path: '/contact',
        element: <ContactInner />,
      },
    ],
  },
]);

export default router;
