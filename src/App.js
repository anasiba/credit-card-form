import React, { Component } from "react";
import Card from "./Card";
// import Card from "./Card";
import { Form, Button, Row, Col } from "react-bootstrap";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardNum: "1234 1234 6789 2345",
      cardHolder: "Anass IBARKI",
      cardMonth: "12",
      cardYear: "2020",
      ccv: "070"
    };

    this.update = this.update.bind(this);
  }

  GenerateMonthes = () => {
    let monthes = [];
    for (let i = 1; i < 13; i++) {
      monthes.push(i < 10 ? "0" + i.toLocaleString() : i);
    }

    return monthes;
  };

  GenerateYears = () => {
    const currentYear = new Date().getFullYear();
    const maxYear = currentYear + 10;

    let years = [];
    for (let i = currentYear; i < maxYear; i++) {
      years.push(i.toString());
    }

    return years;
  };

  update() {
    const cardNb = this.refs.cardNb.value;
    const cardHolder = this.refs.cardHolder.value;
    const ccv = this.refs.ccv.value;
    const selectedMonth = this.refs.month.value;
    const selectedYear = this.refs.year.value;
    console.log(selectedYear);
    this.setState({
      cardNum: cardNb,
      cardHolder,
      ccv,
      cardMonth: selectedMonth,
      cardYear: selectedYear
    });
  }

  submitForm(e) {
    e.preventDefault();
  }
  render() {
    const monthes = this.GenerateMonthes();
    const years = this.GenerateYears();

    return (
      <div className="app">
        <Card
          cardNum={this.state.cardNum}
          cardHolder={this.state.cardHolder}
          ccv={this.state.ccv}
          cardMonth={this.state.cardMonth}
          cardYear={this.state.cardYear}
        />

        <Form id="form" onSubmit={this.submitForm}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label className="label">Card number</Form.Label>
            <Form.Control
              className="input"
              type="text"
              ref="cardNb"
              onChange={this.update}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="label">Card Holders</Form.Label>
            <Form.Control
              className="input"
              type="text"
              ref="cardHolder"
              onChange={this.update}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label className="label">Experation Date</Form.Label>
              <Form.Control
                className="input"
                as="select"
                ref="month"
                onChange={this.update}
                defaultValue=""
              >
                <option value="" disabled>
                  Month
                </option>

                {monthes.map(month => (
                  <option value={month} key={month}>
                    {month}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label className="label"></Form.Label>
              <Form.Control
                className="input"
                as="select"
                ref="year"
                id=""
                defaultValue=""
                onChange={this.update}
              >
                <option value="" disabled>
                  Year
                </option>

                {years.map(year => (
                  <option value={year} key={year}>
                    {year}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label className="label" style={{ marginBottom: "1px" }}>
                CCV
              </Form.Label>
              <Form.Control
                className="input"
                type="text"
                maxLength="4"
                ref="ccv"
                onChange={this.update}
              />
            </Form.Group>
          </Form.Row>

          <Button type="submit" className="button">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
