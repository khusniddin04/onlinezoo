import React from 'react'
import "../style/donate.css"
import x_img from "../images/feedback_img.png"
import lock from "../images/lock.png"
import methods from "../images/Payment Methods.svg"
import CreditCardForm from '../components/CreditCardForm'
import { NavLink } from 'react-router-dom'
function DonatePage() {
  return (
    <main>
      <section className='donate'>
        <div className="container">
          <div className="donate__card">
            <div className="donate_card_top">
              <h4>Donate to volunteers</h4>
              <NavLink to="/"><img src={x_img} alt="" /></NavLink>
            </div>
            <p>Support your favourite animals. It is as simple as buying a cup of coffee.</p>
            <div className="choose__animal">
              <label htmlFor="animal">Choose an animal</label>
              <br />
              <input type="text" />
            </div>
            <label>Payments</label>
            <div className="payments">
              <button>Monthly</button>
              <button>One-time</button>
            </div>
            <div className="price">
              <button>$3</button>
              <button>$5</button>
              <button>$10</button>
              <button>$25</button>
            </div>
            <form>
              <label htmlFor="name">Your name</label>
              <br />
              <input type="text" />
              <br />
              <label htmlFor="name">Your Email</label>
              <br />
              <input type="text" />
            </form>
            <div className="credit_card">
              <div className="methods">
              <img src={methods} alt="" />
              </div>
              <CreditCardForm/>
            </div>
            <div className="donate_card_bottom">
              <button>Send</button>
              <br />
              <span><img src={lock} alt="" /> <span>Your payment is protected</span> </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DonatePage