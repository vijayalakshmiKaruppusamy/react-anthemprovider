import { drugPageHeader, drugSearch } from "../../../Resources/string"
import Hydroco from "./Hydro"
import Footer from "../../Common/common"
import { DrugHeader, Search, AreaPlan, Plan, Query, Input, SearchBar, Button, YearPlan, Invalid, SearchItems } from "./drugPageStyle"
import { useState, useRef } from 'react'
import { images } from "../../../Resources/images"
import { Modal, Overlay, ModalContent, Popuphead, ButtonTag, Close, Buttons, PopupContent } from './popupStyle'
import {data} from '../../../../src/data'

export default function Drug() {
    const yearplan = useRef();
    const [value, setValue] = useState("");
    const [shown, isShown] = useState(false);
    const [modal, setModal] = useState(false);
    const [empty, isEmpty] = useState(false);

    const toggleModal = () => {
        if (yearplan.current.value === 'Next Year')
            setModal(!modal);
    };
    const handleClick = event => {
        if (value === 'Hydrocodone') {
            isShown(true);
            isEmpty(false);
        }
        else {
            isEmpty(true);
            isShown(false);
        }
     }
    const handleSubmit = event => {
        yearplan.current.value = 'Current Year';
        setModal(!modal);
    }
    const onChange = (event) => {
        setValue(event.target.value);
    };
    const onSearch = (searchTerm) => {
        setValue(searchTerm);
    };
    return (
        <>
            <DrugHeader>{drugPageHeader}</DrugHeader>
            <Search>
                <AreaPlan>
                    <div>{drugSearch.area}</div>
                    <Plan>
                        <label htmlFor="yearplan">{drugSearch.plan}</label>
                        <YearPlan ref={yearplan} name="yearplan" id="yearplan" onChange={toggleModal}>
                            <option>Current Year</option>
                            <option >Next Year</option>
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
                                            <h4>Do you want to Continue?</h4>
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
                <div>{drugSearch.initialText}</div>
                <Query>{drugSearch.drugBarQuery}</Query>
                <SearchBar >
                    <Input type="text" value={value} 
                    onChange={onChange}
                     />
                    <Button  onClick={handleClick} >Search</Button>
                </SearchBar>
            </Search>
            <SearchItems >
                {data
                    .filter((item) => {
                        const searchTerm = value.toLowerCase();
                        const searchValue = item.search_value.toLowerCase();
                        
                        return (
                            searchTerm &&
                            searchValue.startsWith(searchTerm) &&
                            searchValue !== searchTerm
                        );
                    })
                    .map((item) => (
                        <div onClick={() => onSearch(item.search_value)}
                            key={item.search_value} >
                            {item.search_value}
                        </div>
                    ))}
            </SearchItems>
           {shown &&  <Hydroco />}
            {empty && (<Invalid>Not Found</Invalid>)}
            <Footer />
        </>
    )
}


