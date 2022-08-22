
import React from 'react'
import styled from 'styled-components'
import { faEnvelope, faLocationDot, faPhone, faVoicemail} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact (){


function sendEmail(e){
  e.preventDefault();

  emailjs.sendForm('service_iu96l9e', 'template_m443axh', e.target, 'qWtMglBucjfWqIi3r' ).then(res=>{
    console.log(res);
  }).catch(err=> console.log(err));
  e.target.reset()
}

const notify = () => toast("Wow so easy!");


  return (
  <>
   <Contactcss>
  

  <div className='my-4'></div>
  <div className='container'>
  <div className='row'>
    <div className='col-12 '>
    <h1 className='heading'>Gujranwala</h1> <br/>  

    </div>
  </div>

  </div>

  <div className='my-5'></div>

  <div className='container'>
    <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
           <img src='img/11.jpg' alt='img' className='img-fluid img1' />
        </div>

        <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
        <iframe className="gmap_iframe map" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=381-B, Near Billa Pan Chowk, Satellite Town, Gujranwala, PAKISTAN&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>

            <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
            <div className='card card1'>
            <div className='my-3'></div>
                <h5 className='head'>Gujranwala Office</h5>

                <div className='my-1'></div>
                <p className='location'>
                <FontAwesomeIcon icon={faLocationDot } className='dot' ></FontAwesomeIcon>
              381-B, Near Billa Pan Chowk, Satellite Town, Gujranwala, PAKISTAN
                </p>

                <div className='my-1'></div>

                <p className='phone'>
                <FontAwesomeIcon icon={faPhone }  className='phoneicon'></FontAwesomeIcon>
                 03074606997 
                 03254975812
                </p>

                <div className='my-1'></div>

                <p className='email'>
                <FontAwesomeIcon icon={faEnvelope }  className='envelop' ></FontAwesomeIcon>
                linguisticscomplex@gmail.com
                </p>
            </div>
            </div>
    </div>
  </div>

<div className='container-fluid part my-5 '>
<div className='container '>
  <div className='row'>
    <div className='col-12 text-center'>
    <form onSubmit={sendEmail}>
      <h1 className='my-5'>Leave A Message</h1>
      <ul className='section1 my-5'>
        <li className='list1'><label>Enter Name</label></li>
        <li ><input type='text'  placeholder=" Tuba Yaseen" name='username' className='list2' required/></li>
      </ul>

      <ul className='section1 my-3'>
        <li className='list1'><label>Enter Email</label></li>
        <li ><input type='email'  placeholder="toobayaseen@gmail.com" name='user_email' className='list2' required/></li>
      </ul>

      <ul className='section1 my-5'>
        <li className='list1 list3 '><label className='text-center'>Message</label></li>
        <li ><input type='textarea'  placeholder="Hello Sir" name='usermessage' className='list4' required/></li>
      </ul>

      <input type='submit' value='Send' className='submit' onClick={notify} />
    </form>

    </div>
    </div>
  </div>
</div>


   </Contactcss>

   <ToastContainer />
  </>
  )
}
const Contactcss= styled.div`
.border{height:100px; background-color:yellow;}
.heading{font-size:3.4rem; font-weight:700; margin-top:3rem; }
.head{padding-left:2.9rem; font-size:1.7rem; font-weight:700; }
.location , .phone , .email{ padding-left:2.7rem; padding-top:1rem; font-size:1.2rem; font-weight:500 }
.dot , .phoneicon , .envelop{margin-right:.9rem}
.card1{color:white; background-color:#070754; height:320px}
.map{height:320px}
.section1{display:flex; margin:auto; width:60%; color:white}
.section1 li{list-style:none;}
.list1{font-size:1.5rem; font-weight:700; margin-right:1.5rem}
.list2{width:500px; height:60px; border:none}
.list2:hover{border:6px solid #070754; border-radius: }

.list3{font-size:1.5rem; font-weight:700; margin-right:3.3rem; padding-top:1.3rem }

.list4{ height:150px; width:500px; border:none}
.submit{width:20%; height:60px; margin-left:19rem}
.part{background-image: url('img/8.jpeg'); background-size: cover; background-repeat: no-repeat; background-position: center; background-attachment: fixed; margin-top: 1.5rem; color:white; height:700px }

 
@media (max-width:1140px){
  .img1{width:414px; margin-bottom:1rem}
  .card1{margin-top:1rem; height:370px; }
  .dot , .phoneicon , .envelop{margin-right:.7rem}
  .location , .phone , .email{ padding-left:2rem; padding-top:1rem; font-size:1.2rem; font-weight:500 }
  .section1{display:flex; margin:auto; width:100%; color:white; margin:0px}

  .list1{font-size:1rem; font-weight:500; margin-right:1rem; margin-left:-1.5rem}
.list2{width:200px; height:50px; border:none}

.list3{font-size:1rem; font-weight:500; margin-right:2rem; padding-top:1.3rem; margin-left:-1.5rem} }
.list4{width:200px; height:150px; border:none}
.submit{width:100%; height:60px; margin-left:0rem}
  






`

export default Contact
