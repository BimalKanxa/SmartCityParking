import '../../../css/AddLocation.css'
import Sidebar1 from '../Sidebar1';

const buttonStyles = {
    fontSize: '1.5rem',
    width: '100%',
    marginTop: '2%',
    padding: '13px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    background: '#15A0D7',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
  };

const CreateCategory = () => {
  return (
   <>
   <Sidebar1/>
   <div className="form-container">
  <h2 className="reg-head">Add Location Form</h2>

  <form>
      <label htmlFor="name">Bike</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Address</label>
      <input type="text" id="email" name="email" required/>

      <label htmlFor="phone">Pincode: </label>
      <input type="number" id="phone" name="phone" required/>

      <label htmlFor="message">Google Map Link</label>
      <input type="text" id="name" name="name" required />
      {/* <textarea id="message" name="message" rows="4"></textarea> */}

      <input type="submit" value="Send" style={buttonStyles} />


  </form>
</div>
   </>
  )
}

export default CreateCategory