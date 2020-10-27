const analyze = (array) => {
    const average = array.reduce((prev,curr) => Math.round(prev+curr/array.length));
    const min = Math.min(...array);
    const max = Math.max(...array);
    const length = array.length

    const object = {
        average,
        min,
        max,
        length
    }

    return object;
}

export default analyze;