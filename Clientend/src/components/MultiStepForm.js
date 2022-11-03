import React, { useState } from "react";
import { useForm, useStep } from "react-hooks-helper";
import NavComp from "./NavComp"
import "../App.css"
import { Stepper, Step, StepLabel } from '@material-ui/core'
import { FirstPage } from "./FirstPage/FirstPage";
import { SecondPage } from "./SecondPage/SecondPage";
import { ThirdPage } from "./ThirdPage/ThirdPage";
import { FinalPage } from "./FinalPage/FinalPage";
const defaultData = {
    num: '',
    country: '',
    region: '',
    selectedAirline: '',
    FlyerNumber: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    postalCode: '',
    confirmationNum: '',
    ticketNum: '',
    comment: '',
    fileName: '',
    group1: '',
};
export const MultiStepForm = () => {
    const [formData, setForm] = useState(defaultData);
    let [num1, setNum] = useState('')
    let [country1, setCountry] = useState('')
    let [region1, setRegion] = useState('')
    const [currentStep, setCurrentStep] = useState(1);
    const props = { formData, setForm,setCurrentStep,num1,country1,region1,setNum,setCountry,setRegion };
    const showStep = (step) => {
        switch (step) {
            case 1:
                return <FirstPage {...props}></FirstPage>
            case 2:
                return <SecondPage  {...props}></SecondPage>
            case 3:
                return <ThirdPage  {...props}></ThirdPage>
            case 4:
                return <FinalPage  {...props}></FinalPage>
        }
    }
    return (
        <div>
            <NavComp></NavComp>
            <br />
            <div className="center-stepper">
                <Stepper activeStep={currentStep - 1} orientation="horizontal">
                    <Step>
                        <StepLabel>
                        </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>
                        </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>
                        </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>
                        </StepLabel>
                    </Step>
                </Stepper>
            </div>
            {showStep(currentStep)}
        </div>
    );
}