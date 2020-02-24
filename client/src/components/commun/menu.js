import React from 'react';
import Menu from '@material-ui/core/Menu';

const MyMenu = (props) => {
  const {handleClose, state, children} = props;
  return (
    <>
      <Menu
        id="custom-menu"
        anchorEl={state.anchor}
        keepMounted
        open={state.open}
        onClose={handleClose}
        elevation={10}
        PaperProps={{
          style: {
            maxHeight: 520,
            width: 360,
            marginTop: 50,
          },
        }}
      >
        <div>
            {children}
        </div>
      </Menu>
    </>
  );
};
export default MyMenu;