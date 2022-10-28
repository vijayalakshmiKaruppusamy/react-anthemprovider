import {
    Button, Hydrocodone, Hydro,Generic,HydroHeader, AlertMessages, Img, HydroContent,
    Alerts, Inputs, AlertText, InputLabel, Note, Count, Select, Buttons, ButtonContent,
    GenericLink,Information,TherapyInfo,Heading
} from "./HydrocoStyle"
import { images } from "../../../Resources/images"
import { hydro } from "../../../Resources/string"

export default function Hydroco() {
    return (
        <>
        <Hydrocodone>
            <Hydro>
                <HydroHeader>
                <Heading>{hydro.hydroTitle}</Heading>
                <Generic>GENERIC</Generic>
                </HydroHeader>
                <HydroContent>
                    <Alerts>
                        <Heading>{hydro.alerts}</Heading>
                        <AlertMessages>
                            <Img src={images.coin} alt="money" />
                            <AlertText>{hydro.costSaving} <GenericLink>{hydro.link}</GenericLink></AlertText>
                        </AlertMessages>
                        <AlertMessages>
                            <Img src={images.file} alt="tool" />
                            <AlertText>{hydro.therapy}</AlertText>
                        </AlertMessages>
                    </Alerts>

                    <Inputs>
                        <div>
                            <InputLabel>{hydro.quantity}</InputLabel>
                            <Count type="number" />
                        </div>
                        <div>
                            <InputLabel>{hydro.type}</InputLabel>
                            <ButtonContent>
                                <Buttons>Retail</Buttons>
                                <Buttons>Mail Order</Buttons>
                            </ButtonContent>
                        </div>
                        <div>
                            <InputLabel>{hydro.refill}</InputLabel>
                            <Select>
                                <option>Every 1 month</option>
                                <option>Every 3 month</option>
                                <option>Every 6 month</option>
                                <option>Every 1 year</option>
                            </Select>
                        </div>
                        <div>
                            <Note>{hydro.note}</Note>
                            <Note>{hydro.availability}</Note>
                            <Note>{hydro.date}</Note>
                        </div>
                        <Button>Add Drug to List</Button>
                    </Inputs>

                </HydroContent>
            </Hydro>
        </Hydrocodone>
        <Information>
        <h3>Important Information</h3>
        <TherapyInfo>{hydro.therapy}</TherapyInfo>
        </Information>
        </>
     
    )
}




        