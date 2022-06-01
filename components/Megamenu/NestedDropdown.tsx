import React, { useState, SetStateAction } from 'react';
import { NestedMenuItem } from 'mui-nested-menu';
import { option } from '../../config/menu-list';
import { MenuItem, Menu, CssBaseline } from '@mui/material';
import MuiButton from '@mui/material/Button';
import { func } from 'prop-types';
import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Button = styled(MuiButton)(() => ({
  margin: '2px 2px',
  color: '#fff',
  backgroundColor: '#000',
  border: 0,
  '&:hover': {
    color: '#fff',
  },
}));

const Link = styled.a`
  text-decoration: none;
  &:hover {
    color: #000;
  }
`;

const NestedDropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState<SetStateAction<any>>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: React.MouseEvent) => setAnchorEl(e.currentTarget);
  const handleClose = (e: React.MouseEvent) => {
    setAnchorEl(null);
  };

  function showMenu(list: any) {
    if (Array.isArray(list)) {
      return (
        <React.Fragment>
          <CssBaseline />
          {list.map((itm, index) => (
            <NestedMenuItem key={index} label={itm.title} parentMenuOpen={open}>
              {!itm.children || itm.children.length === 0 ? (
                <MenuItem onClick={handleClose}>
                  <Link href={itm.link}>{itm.title}</Link>
                </MenuItem>
              ) : (
                Array.isArray(itm.children) && showMenu(itm.children)
              )}
            </NestedMenuItem>
          ))}
        </React.Fragment>
      );
    }
  }

  return (
    <div>
      <Button
        ref={anchorEl}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onMouseOver={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Category
      </Button>
      <Menu
        className="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {showMenu(option)}
      </Menu>
    </div>
  );
};

NestedDropdownMenu.propTypes = {
  setValue: func,
};

export default NestedDropdownMenu;
