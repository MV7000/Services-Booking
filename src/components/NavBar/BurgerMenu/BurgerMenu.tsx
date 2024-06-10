'use client';

import React, { useState } from 'react';
import DropDownMenu from './DropDownMenu';

const BurgerMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className='burgerSpan inline-block sm:hidden relative'
        onClick={() => setOpen(prev => !prev)}
      >
        <span className={open ? 'open' : ''} />
      </div>
      {open && <DropDownMenu setOpen={setOpen} />}
    </>
  );
};

export default BurgerMenu;
