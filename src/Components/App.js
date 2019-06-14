import React, { Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Form from "./Layouts/Forms";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Form />
        <Footer />
      </Fragment>
    );
  }
}
