const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 !== 0;
const minLength = num => num?.length > 11
const isFileSizeError_1mb = event => { // 1mb 보다 작은 것만 허용
    const file = event.target.files[0];
    const maxSizeInBytes = 1024 * 1024; // 1MB // * 35  <--- 35mb

    return file.size < maxSizeInBytes
}

export { isEven, isOdd, minLength, isFileSizeError_1mb };