import { useState, useEffect } from 'react'
import validate from '../highFunctions/index'

const useInputValid = (initValue, validators, errMsg) => {
    const [value, setValue] = useState(initValue)
    const [result, setResult] = useState(null); // 결과 상태 추가

    // const validatePositiveEven = validate(validators, errMsg);
    // const validationResult = validatePositiveEven(value);
    useEffect(() => {
        if (value) {
            const validationResult = validate(validators, errMsg)(value);
            setResult(validationResult);
        }
    }, [value]);


    return [value, setValue, result]
}

export default useInputValid
