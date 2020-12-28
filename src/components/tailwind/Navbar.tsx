import React from 'react';

import styles from './Navbar.module.css';

export const Search = () => {
  return (
    <form>
      <input type='text' name='search' className={styles.Search} placeholder='Search' /> 
    </form>
  );
};

export const NavbarIconLink = ({ icon }: { icon: string }) => {
  return (
    <a className={styles.NavbarIconLink}>
      <span className='material-icons'>{icon}</span>
    </a>
  );
}

export const Navbar = () => {
  return (
    <header className={styles.NavbarContainer}>
      <div className={styles.NavbarContent}>

          <NavbarIconLink icon={'apps'} />

          <div className={styles.NavbarSearch}>
            <Search />
          </div>

          <NavbarIconLink icon={'account_circle'} />
      </div>
    </header>
  );
};