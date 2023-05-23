import React from "react";



const Form =() => {
    return (
        <div>
          <h2 className="giver"> Complete this form to become our caregiver</h2>
          <form className="join-form">
           <label>Full name</label>
            <input type="text" placeholder="full name"/>
            <label>Age</label>
            <input type="number" placeholder="age"/>
            <label for="state">State of origin</label>
     <select name="state" id="state">
             <option value="">Select state</option>
             <option value="Abia">Abia</option>
             <option value="Adamawa">Adamawa</option>
             <option value="Akwa Ibom">Akwa Ibom</option>
             <option value="Anambra">Anambra</option>
             <option value="Bauchi">Bauchi</option>
             <option value="Bayelsa">Bayelsa</option>
             <option value="Benue">Benue</option>
             <option value="Borno">Borno</option>
             <option value="Cross River">Cross River</option>
             <option value="Delta">Delta</option>
             <option value="Ebonyi">Ebonyi</option>
             <option value="Edo">Edo</option>
             <option value="Ekiti">Ekiti</option>
             <option value="Enugu">Enugu</option>
             <option value="FCT">Federal Capital Territory</option>
             <option value="Gombe">Gombe</option>
             <option value="Imo">Imo</option>
             <option value="Jigawa">Jigawa</option>
             <option value="Kaduna">Kaduna</option>
             <option value="Kano">Kano</option>
             <option value="Katsina">Katsina</option>
             <option value="Kebbi">Kebbi</option>
             <option value="Kogi">Kogi</option>
             <option value="Kwara">Kwara</option>
             <option value="Lagos">Lagos</option>
             <option value="Nasarawa">Nasarawa</option>
             <option value="Niger">Niger</option>
             <option value="Ogun">Ogun</option>
             <option value="Ondo">Ondo</option>
             <option value="Osun">Osun</option>
             <option value="Oyo">Oyo</option>
             <option value="Plateau">Plateau</option>
             <option value="Rivers">Rivers</option>
             <option value="Sokoto">Sokoto</option>
             <option value="Taraba">Taraba</option>
             <option value="Yobe">Yobe</option>
             <option value="Zamfara">Zamfara</option>
</select>
            <label>Address</label>
            <input type="text" placeholder="address" />
            <label>Phone number</label>
            <input type="number" placeholder="phone number"/>
            <label htmlFor="experiencedMother">Are you an experienced mother?</label>
      <div className="radio-container">
           <input type="radio" id="yes" name="experiencedMother" value="yes" />
           <label htmlFor="yes">Yes</label>
           <input type="radio" id="no" name="experiencedMother" value="no" />
          <label htmlFor="no">No</label>
     </div>

            <button  className="" type="submit">submit</button> 
            <h3 className="giver1">By clicking "submit" I accept the Terms  of <br>
            </br>Service,the Anti-Spam Policy and the Privacy Policy.</h3>






          </form>
        </div>
    )
}

export default Form;