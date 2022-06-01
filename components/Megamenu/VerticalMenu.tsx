import * as React from 'react';
import clsx from 'clsx';
import classes from './styles.module.css';
import { CssBaseline } from '@mui/material';

export const menu_list = [
  {
    title: 'menu1',
    link: null,
    parent: true,
    children: [
      {
        title: 'submenu 1',
        link: '#',
        children: [
          {
            title: 'submenu child 1',
            link: '#',
          },
          {
            title: 'submenu child 2',
            link: '#',
            children: [
              {
                link: '#',
                title: 'Hello world',
              },
            ],
          },
        ],
      },
      {
        title: 'submenu 2',
        link: '#',
        children: [],
      },
    ],
  },

  {
    title: 'menu2',
    link: null,
    parent: true,
    children: [
      {
        title: 'submenu 1',
        link: '#',
        children: [
          {
            title: 'submenu child 1',
            link: '#',
          },
          {
            title: 'submenu child 2',
            link: '#',
          },
        ],
      },
      {
        title: 'submenu 2',
        link: '#',
        children: [],
      },
    ],
  },

  {
    title: 'menu2',
    link: null,
    parent: true,
    children: [
      {
        title: 'submenu 1',
        link: '#',
        children: [],
      },
      {
        title: 'submenu 2',
        link: '#',
        children: [],
      },
    ],
  },
];

function showMenu(list: any) {
  if (Array.isArray(list)) {
    return (
      <React.Fragment>
        <CssBaseline />
        {list.map((itm, index) => (
          <li
            key={index}
            className={clsx(
              classes.menuItem,
              classes.menuHasChildren,
              classes.menuAllowHover
            )}
          >
            <a
              href="#"
              className={itm.children?.length > 0 ? classes.menuLink : ''}
            >
              {itm.title}
            </a>

            {Array.isArray(itm.children) && (
              <ul className={classes.menuChildren}>{showMenu(itm.children)}</ul>
            )}
          </li>
        ))}
      </React.Fragment>
    );
  }
}

export default function MegaMenu() {
  return <ul className={clsx(classes.menuList)}>{showMenu(menu_list)}</ul>;
}
