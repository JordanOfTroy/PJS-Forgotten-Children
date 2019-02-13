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
       
       <section className="home_section volunteer"></section>
       <section className="home_section break_image"></section>
       <section className="home_section blog"></section>
       <section className="home_section  thank_you"></section>
      </div>
    )
  }
}

export default Home