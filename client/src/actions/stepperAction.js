export const INC_STEPPER = "INC_STEPPER";
export const DEC_STEPPER = "DEC_STEPPER";
export const INC_STEPPER_SUCCESS= "INC_STEPPER_SUCCESS";
export const incStepper= () => ({
  "type": INC_STEPPER
});

export const decStepper = () => ({
    "type": DEC_STEPPER,
});
export const incStepperSuccess = () => ({
  "type": INC_STEPPER_SUCCESS,
});