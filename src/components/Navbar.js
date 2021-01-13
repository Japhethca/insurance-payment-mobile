import React from "react";
import CurrencyFormat from "react-currency-format";

import styles from "../styles/NavBar.module.css";

import UserList from "./UserList.js";

import Icon from "./Icon";

export default class Navbar extends React.Component {
  state = {
    isMaximized: false,
  };

  toggleMinMax = () => {
    this.setState({ isMaximized: !this.state.isMaximized });
  };

  renderMax() {
    const {  currency, totalPayment, users } = this.props;
    return (
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Icon name="us-flag" style={{ paddingRight: "10px", maxWidth: '30px' }} />
            <span style={{fontWeight: 'bold'}}>{currency.name}</span>
          </div>
          <span style={{ display: "flex", alignItems: "center" }}>
            <Icon name="notification-new" style={{marginRight: '30px'}}/>
            <Icon name="two-dots" className={styles.twodotsIcon} />
          </span>
        </header>
        <div className={styles.amount}>
          <CurrencyFormat
            displayType="text"
            value={totalPayment}
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>
        <div className={styles.addBtnWrapper}>
          <span className={styles.addBtn}>
            <Icon name="add" style={{backgroundColor: '#a4de02', borderRadius: '10px', marginRight: '3px'}} /> <span>ADD MONEY</span>
          </span>
        </div>
        {users.length > 0 && (
          <div style={{ display: "flex", margin: "30px 15px", justifyContent: "center" }}>
            <span>
              <Icon name="arrow-foward" style={{backgroundColor: '#a4de02', borderRadius: '20px',  padding: '10px', marginRight: '15px'}} />
            </span>
            <UserList users={users} />
          </div>
        )}
        <div className={styles.maximizeWrapper}>
          <Icon name="maximize" onClick={this.toggleMinMax} />
        </div>
      </div>
    );
  }

  renderMin() {
    const { totalPayment } = this.props;
    return (
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <span style={{ fontSize: "2em", fontWeight: "bold" }}>
            <CurrencyFormat
              displayType="text"
              value={totalPayment}
              thousandSeparator={true}
              prefix={"$"}
            />
          </span>
          <span>
            <Icon name="notification-new" style={{marginRight: '30px'}} />
            <Icon name="two-dots" className={styles.twodotsIcon} />
          </span>
        </header>
        <div className={styles.maximizeWrapper}>
          <Icon name="maximize" onClick={this.toggleMinMax} />
        </div>
      </div>
    );
  }

  render() {
    if (this.state.isMaximized) {
      return this.renderMax();
    }
    return this.renderMin();
  }
}
