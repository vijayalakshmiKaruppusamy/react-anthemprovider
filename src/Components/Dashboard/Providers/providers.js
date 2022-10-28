import { images } from "../../../Resources/images"
import { provider } from "../../../Resources/string"
import Footer from "../../Common/common"
import { hydro } from "../../../Resources/string"
import { TherapyInfo } from "../Drugs/HydrocoStyle"
import {Home,About,Zipcode,Img,Input,Button,ButtonTag,Purpose,Query,Information,ProviderPage,InfoHead} from './providersStyle'
export default function Provider()
{
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
                    <input type="text" name="zipcode" id="zip" placeholder="Enter ZIP Code & Country" />
                  </Input>
                  <ButtonTag>
                     <Button>Continue</Button>
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