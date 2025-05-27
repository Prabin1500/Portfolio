import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="app">
      <main className='leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white font-Ovo'>{children}</main>
    </div>
  );
};

export default Layout;