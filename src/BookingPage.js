import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



export default function BookingPage() {
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [numberOfChildren, setNumberOfChildren] = useState(1);
  const [bookingDate, setBookingDate] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [offerForDay, setOfferForDay] = useState('$0.0');
  const [rateForDay, setRateForDay] = useState('$186.86');
  const agencystoredId = localStorage.getItem('selectedAgencyId');
  const userstoredId = localStorage.getItem('userId');

  useEffect(() => {
    // Fetch offer_For_Day and rate_for_day from the API
    
    fetch(`https://localhost:7125/api/Agency/${agencystoredId}`)
      .then((response) => response.json())
      .then((data) => {
        setOfferForDay(data.offer_For_Day);
        setRateForDay(data.rate_for_day);
      })
      .catch((error) => console.error('Error while fetching agency data:', error));
  }, []);

  const handleNumberOfPersonsChange = (event) => {
    const value = Number(event.target.value);
    setNumberOfPersons(value > 4 ? 4 : value);
  };

  const handleNumberOfChildrenChange = (event) => {
    const value = Number(event.target.value);
    setNumberOfChildren(value > 4 ? 4 : value);
  };

  const handleBookingDateChange = (date) => {
    setBookingDate(date);
  };

  const handleProceedToPayment = async () => {
    try {
      const response = await fetch('https://localhost:7125/api/Bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer_Date_Of_Booking: bookingDate,
          no_of_perons: numberOfPersons,
          no_of_childer: numberOfChildren,
          user: {
            user_Id: userstoredId, // Replace with the actual user ID
          },
          agency: {
            agency_Id: agencystoredId, // Replace with the actual agency ID
          },
        }),
      });
      const data = await response.json();
      console.log('Payment Details:', data); // Log the payment details to the console
      setPaymentDetails(data);
    } catch (error) {
      console.error('Error while making API request:', error);
    }
  };

  return (
    <div>
      <section>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div className="d-flex flex-row align-items-center">
            <h4 className="text-uppercase mt-1">Eligible</h4>
            <span className="ms-2 me-3">Pay</span>
          </div>
          <a href="#!">Cancel and return to the website</a>
        </div>

        <div className="row">
          <div className="col-md-7 col-lg-7 col-xl-6 mb-4 mb-md-0">
            <h5 className="mb-0 text-success">{rateForDay}</h5>
            <h5 className="mb-3">Diabetes Pump & Supplies</h5>
            <div className="d-flex justify-content-between">
              <div className="flex-fill me-2">
                <label htmlFor="numberOfPersons" className="form-label">Number of Persons (Max 4):</label>
                <input
                  type="number"
                  className="form-control"
                  id="numberOfPersons"
                  min="1"
                  max="4"
                  value={numberOfPersons}
                  onChange={handleNumberOfPersonsChange}
                />
              </div>
              <div className="flex-fill ms-2">
                <label htmlFor="numberOfPersonsRight" className="form-label">Number of children (Max 4):</label>
                <input
                  type="number"
                  className="form-control"
                  id="numberOfPersonsRight"
                  min="1"
                  max="4"
                  value={numberOfChildren}
                  onChange={handleNumberOfChildrenChange}
                />
              </div>
            </div>
            <div className="p-2 d-flex justify-content-between align-items-center" style={{ backgroundColor: '#eee' }}>
              <span>Aetna - Open Access</span>
              <DatePicker
                selected={bookingDate}
                onChange={handleBookingDateChange}
                placeholderText="Select booking date"
                className="form-control"
              />
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-row mt-1">
                <h6>Patient Balance</h6>
                <h6 className="fw-bold text-success ms-1">$13.24</h6>
              </div>
              <div className="d-flex flex-row align-items-center text-primary">
                <span className="ms-1">Add Payment card</span>
              </div>
            </div>
            <p>
              Insurance claim and all necessary dependencies will be submitted to your
              insurer for the covered portion of this order.
            </p>
            <div className="d-flex flex-column mb-3">
              <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" />
                <label className="btn btn-outline-primary btn-lg" htmlFor="option1">
                  <div className="d-flex justify-content-between">
                    <span>VISA</span>
                    <span>** 5436</span>
                  </div>
                </label>

                <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" checked />
                <label className="btn btn-outline-primary btn-lg" htmlFor="option2">
                  <div className="d-flex justify-content-between">
                    <span>MASTER CARD</span>
                    <span>** 5038</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="btn btn-success btn-lg btn-block" onClick={handleProceedToPayment}>
              Proceed to payment
            </div>
          </div>
          <div className="col-md-5 col-lg-4 col-xl-4 offset-lg-1 offset-xl-2">
            <div className="p-3" style={{ backgroundColor: '#eee' }}>
              <span className="fw-bold">Order Recap</span>
              <div className="d-flex justify-content-between mt-2">
                <span>Contracted Price</span> <span>{rateForDay}</span>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span>Amount Deductible</span> <span>{offerForDay}</span>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span>Coinsurance(0%)</span> <span>{paymentDetails?.no_of_perons || '$0.0'}</span>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span>Copayment</span> <span>{paymentDetails?.no_of_childer || '$40.00'}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mt-2">
                <span className="lh-sm">Total Deductible,<br />Coinsurance and copay</span>
                <span>{paymentDetails?.amount_for_person || '$40.00'}</span>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span className="lh-sm">Maximum out-of-pocket <br />on insurance policy</span>
                <span>{paymentDetails?.amount_for_childer || '$40.00'}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mt-2">
                <span>Insurance Responsibility</span> <span>{paymentDetails?.customer_Date_Of_Booking || 'N/A'}</span>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span>Patient Balance</span> <span>$13.24</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mt-2">
                <span>Total</span> <span className="text-success">{paymentDetails?.booking_amount || '$85.00'}</span>
              </div>
            </div>
            <div className="btn btn-success btn-lg btn-block" onClick={handleProceedToPayment}>
              Pay the payment
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}