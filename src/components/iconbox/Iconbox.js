import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Iconbox.scss';

const Iconbox = (props) => {
  return (
    <Link className={'iconbox ' + props.type} to={props.link}>
      <img className="iconbox__icon" src={props.icon} alt=""/>
      <div className="info">
        <h4 className="iconbox__title">{props.title}</h4>
        <p className="iconbox__desc">{props.desc}</p>
      </div>
    </Link>
  );
};

Iconbox.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Iconbox;