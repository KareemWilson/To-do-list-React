import React, { Component } from 'react';
import styles from '../styles/Header.module.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <h1 className={styles.header}>todos</h1>
    );
  }
}

export default Header;
