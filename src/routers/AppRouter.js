import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ContactPage from '../components/ContactPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import PortfolioPage from '../components/PortfolioPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path  = "/" component = {HomePage} exact = {true}/>
        <Route path = "/contact" component = {ContactPage}/>
        <Route path = "/portfolio" component = {PortfolioPage} exact ={true}/>
        <Route path = "/portfolio/:id" component = {PortfolioItemPage}/>
        <Route component = {NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
