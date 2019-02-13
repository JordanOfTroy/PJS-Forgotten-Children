import React, {Component} from 'react'

class Home extends Component {
  render () {
    return(
      <div>
       <section className="home_section hero_img">

        <div className="call_to_action">

          <div className="text_section">
            <h1 className="call">Call To Action!</h1>
            <p className="call_description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem beatae similique eveniet iusto quae doloribus expedita sapiente at laudantium veniam, asperiores sunt aliquid ratione recusandae, laboriosam enim alias rem quia!</p>
          </div>
          
          <div className="button_section">
            <button className="c2a_button">Button One</button>
            <button className="c2a_button">Button Two</button>
          </div>

        </div>

       </section>

       <section className="home_section volunteer">
       
          <h2 className="volunteer_title">how can I make a difference?</h2>

          <section className="volunteer_opps">

            <div className="volunteer_opp">
              <img src="#" alt="volunteering Opportunity" className="opp_img"/>
              <h3 className="opp_title">back to school</h3>
              <p className="opp_description">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              <button className="opp_button">CLICK ME!!!</button>
            </div>

            <div className="volunteer_opp">
              <img src="#" alt="volunteering Opportunity" className="opp_img"/>
              <h3 className="opp_title">Christmas</h3>
              <p className="opp_description">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              <button className="opp_button">CLICK ME!!!</button>
            </div>

            <div className="volunteer_opp">
              <img src="#" alt="volunteering Opportunity" className="opp_img"/>
              <h3 className="opp_title">Donate</h3>
              <p className="opp_description">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              <button className="opp_button">CLICK ME!!!</button>
            </div>

            <div className="volunteer_opp">
              <img src="#" alt="volunteering Opportunity" className="opp_img"/>
              <h3 className="opp_title">Give your time</h3>
              <p className="opp_description">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              <button className="opp_button">CLICK ME!!!</button>
            </div>


          </section>

       </section>

       <section className="home_section break_image">

        <img src="#" alt="Break Image" className="b_image"/>
        <h2 className="quote">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, nulla?</h2>
        <button>Click Me!!!</button>

       </section>

       <section className="home_section blog">

        

       </section>

       <section className="home_section  thank_you"></section>

      </div>
    )
  }
}

export default Home