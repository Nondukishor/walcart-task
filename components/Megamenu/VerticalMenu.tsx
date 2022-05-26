import React from 'react';
import classes from './styles.module.css';
import clsx from 'clsx';

const MegaMenu = () => {
  return (
    <div className={clsx(classes.menu, classes.customDisplay)}>
      <ul className={clsx(classes.menuList)}>
        <li className={classes.menuHeading}>Mega Menu</li>

        <li
          className={clsx(
            classes.menuItem,
            classes.menuHasChildren,
            classes.menuAllowHover
          )}
        >
          <a href="#" className={classes.menuLink}>
            {' '}
            Tutorials{' '}
          </a>
          <ul className={clsx(classes.menuChildren)}>
            <li className={clsx(classes.menuItem)}>
              <a href="#" className={classes.menuLink}>
                Data Structures and Algorithms
              </a>
            </li>
            <li className={clsx(classes.menuItem)}>
              <a href="#" className={classes.menuLink}>
                {' '}
                GATE 2022{' '}
              </a>
            </li>

            <li
              className={clsx(
                classes.menItem,
                classes.menuHasChildren,
                classes.menuAllowHover
              )}
            >
              <a href="#" className={classes.menuLink}>
                {' '}
                Practice{' '}
              </a>
              <ul className={classes.menuChildren}>
                <li className={clsx(classes.menuItem)}>
                  <a href="#" className={classes.menuLink}>
                    {' '}
                    HTML{' '}
                  </a>
                </li>
                <li className={clsx(classes.menuItem)}>
                  <a href="#" className={classes.menuLink}>
                    {' '}
                    CSS{' '}
                  </a>
                </li>
                <li className={clsx(classes.menuItem)}>
                  <a href="#" className={classes.menuLink}>
                    {' '}
                    JavaScript{' '}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li
          className={clsx(
            classes.menuItem,
            classes.menuHasChildren,
            classes.menuAllowHover
          )}
        >
          <a href="#" className={classes.menuLink}>
            {' '}
            Students{' '}
          </a>

          <ul className={classes.menuChildren}>
            <li className={clsx(classes.menuItem)}>
              <a href="#" className={classes.menuLink}>
                {' '}
                Competitive Programming{' '}
              </a>
            </li>
            <li className={clsx(classes.menuItem)}>
              <a href="#" className={classes.menuLink}>
                {' '}
                Geeks of the Month{' '}
              </a>
            </li>
            <li className={clsx(classes.menuItem)}>
              <a href="#" className={classes.menuLink}>
                {' '}
                Placement Courses{' '}
              </a>
            </li>
            <li className={clsx(classes.menuItem)}>
              <a href="#" className={classes.menuLink}>
                {' '}
                Internship{' '}
              </a>
            </li>
          </ul>
        </li>

        <li
          className={clsx(
            classes.menuItem,
            classes.menuHasChildren,
            classes.menuAllowHover
          )}
        >
          <a href="#" className={classes.menuLink}>
            {' '}
            Jobs{' '}
          </a>
          <ul className={classes.menuChildren}>
            <li className={clsx(classes.menuItem)}>
              <a href="#" className={classes.menuLink}>
                {' '}
                Apply for Jobs{' '}
              </a>
            </li>
            <li className={clsx(classes.menuItem)}>
              <a href="#" className={classes.menuLink}>
                {' '}
                Post a Jobs{' '}
              </a>
            </li>
          </ul>
        </li>

        <li className={clsx(classes.menuItem)}>
          <a href="#" className={classes.menuLink}>
            {' '}
            Courses{' '}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MegaMenu;
