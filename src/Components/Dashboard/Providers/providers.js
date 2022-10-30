import { images } from "../../../Resources/images"
import { provider } from "../../../Resources/string"
import Footer from "../../Common/common"
import { hydro } from "../../../Resources/string"
import { ErrorMsg, TherapyInfo } from "../Drugs/HydrocoStyle"
import {Home,About,Zipcode,Img,Input,Button,ButtonTag,Purpose,Query,Information,ProviderPage,InfoHead} from './providersStyle'
import { useState,useRef } from "react"

export default function Provider()
{
  const zipcode = useRef();
  const [errors,isError] = useState({});

 const HandleSubmit = () => {
    isError(Validation(zipcode.current.value));
 }

    
  const Validation = (value) => {
    const error = {};
    if(!value)
       error.zipcode= "Please enter Zip Code!";
    else if(/^[a-zA-Z]*$/.test(value))
       error.zipcode = "Please enter correct zipcode"
    else if(value.length !== 6)
      error.zipcode = "Zip Code must be 6 Characters";
    else
      error.zipcode = "";
    return error;
  }
    return(
        <ProviderPage>
            <Home>
              <Img src={images.home} alt="home" />
              <h4>{provider.providerHeader}</h4>
            </Home>
            <About>
              <Purpose>{provider.purpose}</Purpose>
              <Query>{provider.providerQuery}</Query>
              <Zipcode>
                  <Input>
                    <label htmlFor="zip">{provider.zipCode}</label>
                    <input type="text" name="zipcode" id="zip" placeholder="Enter ZIP Code & Country" ref={zipcode} />
                    <ErrorMsg>{errors.zipcode}</ErrorMsg>
                  </Input>
                  <ButtonTag>
                     <Button onClick={HandleSubmit}>Continue</Button>
                  </ButtonTag>
              </Zipcode>
            </About>

            <Information>
             <InfoHead>Important Information</InfoHead>
             <TherapyInfo>{hydro.therapy}</TherapyInfo>
        </Information>
        <Footer />
         
        </ProviderPage>
    )
}