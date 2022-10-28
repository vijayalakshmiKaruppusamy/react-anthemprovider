import { PageHeader,drugSearch } from "../../../Resources/string"
import { Header,AreaPlan,Plan,YearPlan,SearchBar,Query } from "./pharmacyStyle"
import { pharmacy } from "../../../Resources/string"
import PharmacyInput from "./input"
import Footer from "../../Common/common"
import { useRef, useState } from "react"
import { Modal, Overlay, ModalContent, Popuphead, ButtonTag, Close, Buttons, PopupContent } from '../Drugs/popupStyle'
import { images } from "../../../Resources/images"


export default function Pharmacy()
{
    return(
        <>
        <PharmacyInput />
        <Footer />
        </>
    )
}

export const HeaderPart = () =>{
    const yearplan = useRef();
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        if (yearplan.current.value === 'Next Year')
            setModal(!modal);
    };
    const handleSubmit = event => {
        yearplan.current.value = 'Current Year';
        setModal(!modal);
    }
    return(
        <>
        <Header>{PageHeader}</Header>
        <SearchBar>
        <AreaPlan>
             <div>{drugSearch.area}</div>
             <Plan>
                 <div>{drugSearch.plan}</div>
                 <YearPlan ref={yearplan} name="yearplan" id="yearplan" onChange={toggleModal}>
                     <option>Current Year</option>
                     <option>Next Year</option>
                 </YearPlan>
                 <>
                            {modal && (
                                <Modal>
                                    <Overlay onClick={toggleModal} ></Overlay>
                                    <ModalContent>
                                        <Close>
                                            <Popuphead>You are Choosing Next Year as Plan Coverage </Popuphead>
                                            <img src={images.close} onClick={toggleModal} alt="close" />
                                        </Close>
                                        <PopupContent>
                                            <p>By continuing this, You may Loose already added details of drugslist. </p>
                                            <h5>Do you want to Continue?</h5>
                                        </PopupContent>
                                        <ButtonTag>
                                            <Buttons onClick={toggleModal}>Yes</Buttons>
                                            <Buttons className="buttons" onClick={handleSubmit}>No</Buttons>
                                        </ButtonTag>
                                    </ModalContent>
                                </Modal>
                            )}
                        </>
             </Plan>
         </AreaPlan>
         <Query>{pharmacy.query}</Query>
     </SearchBar>
         </>
    )
}