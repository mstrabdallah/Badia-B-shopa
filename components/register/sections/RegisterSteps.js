import { Steps } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Step1 from '../steps/step1'
import Step2 from '../steps/step2'
import Step3 from '../steps/step3'

function RegisterSteps() {

    const { current } = useSelector(({ register }) => register)
    const { Step } = Steps;


    return (
        <>
            <Steps current={current}>
                <Step key={0} />

                <Step key={2} />
                <Step key={3} />
            </Steps>

            <div className={current !== 0 ? 'hide' : null}>
                <Step1 />
            </div>


            <div className={current !== 1 ? 'hide' : null}>
                <Step2 />
            </div>


            <div className={current !== 2 ? 'hide' : null}>
                <Step3 />
            </div>



        </>
    )
}

export default RegisterSteps;