import { Input, InputType, Inputs, Select, Choose, Cost, Button, Box, Heading, PharmacyCount, Invalid ,Label} from "./inputStyle"
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
                        <Label htmlFor="pharmacyName">{pharmacy.name}</Label>
                        <Inputs type="text" name="name" id="pharmacyName" />
                    </InputType>
                    <InputType>
                        <Label htmlFor="radius">{pharmacy.radius}</Label>
                        <Select id="radius"  >
                            <option value="1">1 Mile</option>
                            <option value="2">2 Mile</option>
                            <option value="3">3 Mile</option>
                            <option value="4">4 Mile</option>
                            <option value="5">5 Mile</option>
                        </Select>
                    </InputType>
                    <InputType>
                        <Label htmlFor="type">{pharmacy.pharmtype}</Label>
                        <Select id="type">
                            <option value="all">All</option>
                            <option value="hospital">Hospital</option>
                            <option value="clinical">Clinical</option>
                            <option value="consulting">Consulting</option>
                            <option value="industrial">Industrial</option>
                        </Select>
                    </InputType>

                    <InputType>
                        <Label>{pharmacy.hours}</Label>
                        <Choose>
                            <input ref={hours} type="checkbox" name="hours" id="hours" value="24 hours" />
                            <Label htmlFor="hours">24-Hour Pharmacy</Label>
                        </Choose>
                    </InputType>
                    <InputType>
                        <Label>{pharmacy.cost}</Label>
                        <Cost>
                            <Choose>
                                <input ref={all} type="radio" name="cost" id="all" value="all" />
                                <Label htmlFor="all">All</Label>
                            </Choose>

                            <Choose>
                                <input ref={standard} type="radio" name="cost" id="standard" value="standard" />
                                <Label htmlFor="standard">Standard Cost Share</Label>
                            </Choose>

                            <Choose>
                                <input ref={prefer} type="radio" name="cost" id="preferred" value="preferred" />
                                <Label htmlFor="preferred">Preferred Cost Share</Label>
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





