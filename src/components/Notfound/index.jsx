import React from "react";
import PropTypes from "prop-types";

Notfound.propTypes = {};

function Notfound(props) {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 bg-white flex items-center justify-center z-0'>
      <h1 className=''>Page not found</h1>
    </div>
  );
}

export default Notfound;
