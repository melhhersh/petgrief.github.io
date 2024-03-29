import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RegisterPage = () => (
  <Layout>
    <SEO title="Registration Page" />
    <h1>Please fill out the following</h1>
    
<form action="mailto:jyl@pawsshelter.org?subject=
Heart of Texas Pet Loss Grief Support Group" method="post" enctype="text/plain" target="_blank" style={{border: '5px double black', padding: '10px'}}>
      <div>
      <br/>
        <label for="firstName">First Name:
          <div>
            <input type="text" name="First_Name" id="firstName" required/>
          </div>
        </label>
        <label for="lastName">Last Name:
          <div>
            <input type="text" name="Last_Name" id="lastName" required/>
          </div>
        </label>
        <label for="email">Email:
          <div>
            <input type="text" name="Email" id="email" required/>
          </div>
        </label>
        <label for="meeting">Meeting: <br/>
          <input type="checkbox" name="In_Person" id="InPerson" />
          <label for="InPerson"> In Person</label><br/>
          <input type="checkbox" name="Zoom" id="Zoom" />
          <label for="Zoom"> Zoom</label><br/>
          <input type="checkbox" name="More_Information" id="MoreInformation" />
          <label for="MoreInformation"> I'd like more information</label><br/>
        </label>
        <br />
        <label for="howDidYouFindOutAboutTheGroup">How did you find out about this group?
          <div>
            <input type="text" name="How_did_you_find_out_about_the_group" id="howDidYouFindOutAboutTheGroup" required/>
          </div>
        </label>
      </div>
      <div>
      <br/>
        <input type="submit" name="submit" value="Send" style={{marginRight: '10px'}}/>
        <input type="reset" name="reset" value="Clear Form" />
      </div>
    </form>
  </Layout>
)

export default RegisterPage
