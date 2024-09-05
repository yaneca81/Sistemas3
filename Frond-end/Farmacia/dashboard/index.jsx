import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="wrapper">
      <nav className="nav">
        <ul className="nav__list" role="menubar">
          <li className="nav__item nav__item--isActive">
            <a href="#" className="nav__link focus--box-shadow" role="menuitem" aria-label="Home">
              <svg className="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation">
                <path fill="#6563ff" d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"/>
              </svg>
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link focus--box-shadow" role="menuitem" aria-label="Favorite projects">
              <svg className="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation">
                <path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/>
              </svg>
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link focus--box-shadow" role="menuitem" aria-label="Informational messages">
              <svg className="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation">
                <path d="M12,11a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0V12A1,1,0,0,0,12,11Zm0-3a1,1,0,1,0,1,1A1,1,0,0,0,12,8Zm0-6A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z"/>
              </svg>
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link focus--box-shadow" role="menuitem" aria-label="Collections">
              <svg className="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation">
                <path d="M2.5,10.56l9,5.2a1,1,0,0,0,1,0l9-5.2a1,1,0,0,0,0-1.73l-9-5.2a1,1,0,0,0-1,0l-9,5.2a1,1,0,0,0,0,1.73ZM12,5.65l7,4-7,4.05L5,9.69Zm8.5,7.79L12,18.35,3.5,13.44a1,1,0,0,0-1.37.36,1,1,0,0,0,.37,1.37l9,5.2a1,1,0,0,0,1,0l9-5.2a1,1,0,0,0,.37-1.37A1,1,0,0,0,20.5,13.44Z"/>
              </svg>
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link focus--box-shadow" role="menuitem" aria-label="Analytics">
              <svg className="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation">
                <path d="M6,13H2a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H6a1,1,0,0,0,1-1V14A1,1,0,0,0,6,13ZM5,21H3V15H5ZM22,9H18a1,1,0,0,0-1,1V22a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V10A1,1,0,0,0,22,9ZM21,21H19V11h2ZM14,1H10A1,1,0,0,0,9,2V22a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V2A1,1,0,0,0,14,1ZM13,21H11V3h2Z"/>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      <main className="main">
        <header className="header">
          <div className="header__wrapper">
            <form action="" className="search">
              <button className="search__button focus--box-shadow" type="submit">
                <svg className="search__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.41-1.41ZM4,10A6,6,0,1,1,10,16,6,6,0,0,1,4,10Z"/>
                </svg>
              </button>
              <input className="search__input" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <div className="header__title">
              <h1 className="title">Dashboard</h1>
            </div>
          </div>
        </header>
        <section className="content">
          <ul className="content__list">
            <li className="content__item">
              <a href="#" className="content__link">
                <div className="content__icon-wrapper">
                  <svg className="content__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation">
                    <path d="M12,4a8,8,0,0,0-8,8,1,1,0,0,0,1,1h1.5a1,1,0,0,0,1-1,5.5,5.5,0,0,1,11,0,1,1,0,0,0,1,1H20a1,1,0,0,0,1-1A8,8,0,0,0,12,4Zm7,8.5a4.5,4.5,0,0,0-9,0V14a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1v-5a1,1,0,0,0-1-1ZM16.5,12a1,1,0,0,0-1,1v1.5a1,1,0,0,0,2,0V13A1,1,0,0,0,16.5,12ZM12,11a1,1,0,0,0-1,1v1.5a1,1,0,0,0,2,0V12A1,1,0,0,0,12,11Z"/>
                  </svg>
                </div>
                <span className="content__text">User Activity</span>
              </a>
            </li>
            <li className="content__item">
              <a href="#" className="content__link">
                <div className="content__icon-wrapper">
                  <svg className="content__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation">
                    <path d="M21,11.67,18,10.25v-.5a4,4,0,0,0-4-4H10a4,4,0,0,0-4,4v.5l-3,1.42V22H4V17H6v5h3V16H9a4,4,0,0,0-4-4V10a4,4,0,0,0,4-4h4a4,4,0,0,0,4,4v1.42L21,10Z"/>
                  </svg>
                </div>
                <span className="content__text">Recent Activities</span>
              </a>
            </li>
            <li className="content__item">
              <a href="#" className="content__link">
                <div className="content__icon-wrapper">
                  <svg className="content__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="presentation">
                    <path d="M12,3a9,9,0,0,0-9,9,9.35,9.35,0,0,0,2.4,6.4L3,21a1,1,0,0,0,1.4,1.4L12,16.4l7.6,6a1,1,0,0,0,1.4-1.4l-2.4-2.6A9.35,9.35,0,0,0,21,12,9,9,0,0,0,12,3ZM12,15a3,3,0,0,1-3-3V6a3,3,0,0,1,6,0v6A3,3,0,0,1,12,15Zm0-8a1,1,0,1,0-1,1A1,1,0,0,0,12,7Z"/>
                  </svg>
                </div>
                <span className="content__text">Security Logs</span>
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
