import { drugPageHeader, drugSearch, } from "../../../Resources/string"
import Hydroco from "./Hydro"
import Footer from "../../Common/common"
import { DrugHeader, Search, AreaPlan, Plan, Query, Input, SearchBar, Button, YearPlan,SearchItems } from "./drugPageStyle"
import { useState, useRef } from 'react'
import { images } from "../../../Resources/images"
import { Modal, Overlay, ModalContent, Popuphead, ButtonTag, Close, Buttons, PopupContent,H4 } from './popupStyle'
import {data} from '../../../../src/data'
import { pharmacyName } from "../../../Resources/string"
import React from "react"
import { useNavigate } from "react-router-dom"

export const Searching = React.createContext();

export default function Drug() {
    const navigate = useNavigate();
    const yearplan = useRef();
    const [value, setValue] = useState("");
    const [shown, isShown] = useState(false);
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        if (yearplan.current.value === 'Next Year')
            setModal(!modal);
    };
    const handleClick = event => {
        if (pharmacyName.includes(value) ) {
            isShown(true);
        }
        else {
           navigate('/error')
        }
     }
    const handleSubmit = event => {
        yearplan.current.value = 'Current Year';
        setModal(!modal);
    }
    const onChange = (event) => {
        setValue(event.target.value);
        isShown(false);
    };
    const onSearch = (searchTerm) => {
        setValue(searchTerm);
    };
    return (
        <>
        <Searching.Provider value={value}>
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
                                            <H4>Do you want to Continue?</H4>
                                        </PopupContent>
                                        <ButtonTag>
                                            <Buttons onClick={toggleModal}>Yes</Buttons>
                                            <Buttons onClick={handleSubmit}>No</Buttons>
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
                    <Input type="text" 
                    value={value} 
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
           <Footer />
                    </Searching.Provider>
        </>
    )
}


