
// import './registerForm.css';

// export default function RegisterForm() {

//   return (
//     <div className="form-container">
//       <h2 className="heading-secondary">Lets Meet Up!</h2>
//       <p className="cta-text">
//         This was only a glimpse into the life of Omege Delta Phi's Mu
//         Line. If you would like to join or just hang out with us, let us
//         know!
//       </p>

//       <form className="cta-form" action="#">
//         <div>
//           <label htmlFor="full-name">Full Name</label>
//           <input
//           id="full-name"
//           type="text"
//           placeholder="John Smith"
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="email">Email address</label>
//         <input
//           id="email"
//           type="email"
//           placeholder="me@uic.edu"
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="select-where">How did you find us?</label>
//         <select id="select-where" required>
//           <option value="">Please choose one option:</option>
//           <option value="member">Member</option>
//           <option value="social">Social Media</option>
//           <option value="campus">On Campus</option>
//           <option value="fair">Involvement Fair</option>
//           <option value="others">Others</option>
//         </select>
//       </div>

//       <button className="btn btn--form">Link</button>
//     </form>
//     </div>
//   )
// //   return (
// //     <section id="cta form" className="section-cta">
// //         <div className="container">
// //           <div className="cta">
// //             <div className="cta-text-box">
// //               <h2 className="heading-secondary">Lets Meet Up!</h2>
// //               <p className="cta-text">
// //                 This was only a glimpse into the life of Omege Delta Phi's Mu
// //                 Line. If you would like to join or just hang out with us, let us
// //                 know!
// //               </p>

// //               <form className="cta-form" action="#">
// //                 <div>
// //                   <label htmlFor="full-name">Full Name</label>
// //                   <input
// //                     id="full-name"
// //                     type="text"
// //                     placeholder="John Smith"
// //                     required
// //                   />
// //                 </div>

// //                 <div>
// //                   <label htmlFor="email">Email address</label>
// //                   <input
// //                     id="email"
// //                     type="email"
// //                     placeholder="me@uic.edu"
// //                     required
// //                   />
// //                 </div>

// //                 <div>
// //                   <label htmlFor="select-where">How did you find us?</label>
// //                   <select id="select-where" required>
// //                     <option value="">Please choose one option:</option>
// //                     <option value="member">Member</option>
// //                     <option value="social">Social Media</option>
// //                     <option value="campus">On Campus</option>
// //                     <option value="fair">Involvement Fair</option>
// //                     <option value="others">Others</option>
// //                   </select>
// //                 </div>

// //                 <button className="btn btn--form">Link</button>
// //               </form>
// //             </div>
// //             <div className="cta-img-box" role="img" aria-label="the mu line"></div>
// //           </div>
// //         </div>
// //       </section>
// //   )
// }

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function registerForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}