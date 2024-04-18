import React from 'react'
import './Body.css'

const Body = () => {
  return (
    <main>

      <div className='img'>
        <img src="https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F772367%2Ftwo-older-people-sitting-outside-drinking-coffee-and-smiling.jpg&w=700"/>
      </div>

      <div className='contact-details'>
        <h2>Think Health. Think Massage</h2>
        <p>We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appointment with us, please call us at 987-654-3210 today!</p>
        <div>
          <button className='btn'>LEARN MORE ABOUT US</button>
          <button className='btn'>CONTACT US TODAY</button>
        </div>
      </div>

      <div className='content-part'>
                <p>Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage</p>

                <p>We are committed to your ling term health and well-being.Our multi-disciplinary clinic provides a balanced approach to a health lifestyle. Enhance your health and improve your performance with out treatments.</p>

                <p>We welcome you to come explore all the benefits you will enjoy as one of out balued guests. Our professional staff is committed to offering the best massage therapy in Mainland</p>
            </div>

            <div className='address-part'>
                <h3>Family Wellness Massage Therapy</h3>

                <p>9876 Main Street, Suite 123, Mainland, ML12345 Phone:987.654.3210</p>
            </div>
      
    </main>
  )
}

export default Body