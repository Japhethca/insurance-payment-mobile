import React from "react";

import styles from "../styles/Dashboard.module.css";

import Navbar from "../components/Navbar";
import ListCard from "../components/ListItem";
import TabNav from "../components/TabNav";

import { getPaymentHistory, getUsers } from "../api";

export default class Dashboard extends React.Component {
  state = {
    paymentHistory: [],
    users: [],
  };

  componentDidMount() {
    const users = getUsers();
    const paymentHistory = getPaymentHistory();

    this.setState({ paymentHistory, users });
    window.addEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);      
  }

  render() {
    const { paymentHistory, users } = this.state;
    return (
      <div className={styles.root}>
        <Navbar users={users} currency={{name:'US Dollar'}} totalPayment="1965.69" />
        <ListCard data={paymentHistory} />
        <TabNav />
      </div>
    );
  }
}
