  // Function to recursively convert BigInts to strings
  const convertBigIntToString = (value) => {
    if (typeof value === 'bigint') {
        return value.toString();
    }
    if (Array.isArray(value)) {
        return value.map(convertBigIntToString);
    }
    return value;
};
module.exports={convertBigIntToString}