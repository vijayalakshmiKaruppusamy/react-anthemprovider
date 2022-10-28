import { Input, InputType, Inputs, Select, Choose, Cost, Button, Box, Heading, PharmacyCount, Invalid } from "./inputStyle"
import { pharmacy } from "../../../Resources/string"
import { useState, useRef } from "react"
import { Availablility } from "./pharmacyName"
import { HeaderPart } from "./pharmacy"

export default function PharmacyInput() {
    const hours = useRef();
    const all = useRef();
    const standard = useRef();
    const prefer = useRef();
    const [shown, isShown] = useState(false);
    const [inValid, isINvalid] = useState(false);

    const handleClick = event => {
        if (hours.current.checked === true && (all.current.checked === true || standard.current.checked === true ||
            prefer.current.checked === true)) {
            isShown(true);
            isINvalid(false);
        }
        else {
            isShown(false);
            isINvalid(true);
        }


    }


    return (
        <div>
            <Heading>
                <HeaderPart />
                <Input>
                    <InputType>
                        <label htmlFor="pharmacyName">{pharmacy.name}</label>
                        <Inputs type="text" name="name" id="pharmacyName" />
                    </InputType>
                    <InputType>
                        <label htmlFor="radius">{pharmacy.radius}</label>
                        <Select id="radius"  >
                            <option value="1">1 Mile</option>
                            <option value="2">2 Mile</option>
                            <option value="3">3 Mile</option>
                            <option value="4">4 Mile</option>
                            <option value="5">5 Mile</option>
                        </Select>
                    </InputType>
                    <InputType>
                        <label htmlFor="type">{pharmacy.pharmtype}</label>
                        <Select id="type">
                            <option value="all">All</option>
                            <option value="hospital">Hospital</option>
                            <option value="clinical">Clinical</option>
                            <option value="consulting">Consulting</option>
                            <option value="industrial">Industrial</option>
                        </Select>
                    </InputType>

                    <InputType>
                        <label>{pharmacy.hours}</label>
                        <Choose>
                            <input ref={hours} type="checkbox" name="hours" id="hours" value="24 hours" />
                            <label htmlFor="hours">24-Hour Pharmacy</label>
                        </Choose>
                    </InputType>
                    <InputType>
                        <label>{pharmacy.cost}</label>
                        <Cost>
                            <Choose>
                                <input ref={all} type="radio" name="cost" id="all" value="all" />
                                <label htmlFor="all">All</label>
                            </Choose>

                            <Choose>
                                <input ref={standard} type="radio" name="cost" id="standard" value="standard" />
                                <label htmlFor="standard">Standard Cost Share</label>
                            </Choose>

                            <Choose>
                                <input ref={prefer} type="radio" name="cost" id="preferred" value="preferred" />
                                <label htmlFor="preferred">Preferred Cost Share</label>
                            </Choose>
                        </Cost>
                    </InputType>

                    <Button onClick={handleClick}>{pharmacy.buttontext}</Button>
                </Input>
                <PharmacyCount>{pharmacy.pharmacyCount}</PharmacyCount>
            </Heading>

            <Box>{shown && <Availablility />}</Box>
            {inValid && <Invalid>Select Your Preference</Invalid>}

        </div>

    )
}





