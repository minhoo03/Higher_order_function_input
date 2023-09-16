const validate = (validators, errMsg) => (value) => {
    const isValid = validators.map(fn => fn(value)).every(Boolean); // 모든 조건을 만족해야 함

    return { 
        succeed: isValid,
        error: isValid ? '' : errMsg
    }

    // if (isValid) {
    //     return { succeed: true, error: '' }
    // } else {
    //     return { succeed: false, error: errMsg }
    // }
}

export default validate
