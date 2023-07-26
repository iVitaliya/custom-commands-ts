const string = {
    Unknown: "unknown"
};

/**
 * @type {<T>(value?: T, fallback_value: T) => T}
 * @param value - The value to check null for.
 * @param fallback_value - The value to fallback to if specified the nullable value is faulty.
 */
const HandleIsNull = (value, fallback_value) => {
    /** @type {typeof fallback_value} */
    let result;

    if (!value) result = fallback_value;
    else result = value;

    return result;
};

/**
 * @param {object} value - The value to handle if it's empty. 
 */
const HandleIsEmptyObject = (value) => {
    const objInst = value instanceof Object,
        numbInst = value instanceof Number,
        strInst = value instanceof String;
    let res;
    
    switch (true) {
        case objInst:
            res = (Object.keys(value).length < 1)
                ? true : false;
            break;
        
        case numbInst:
            res = (value < 1) ? true : false;
            break;
        
        case strInst:
            res = (value.length < 1) ? true : false;
    }

    if (
        () && 
    ) return true;
    else if (
        (value instanceof Number) && 
    ) return true;
    else if (
        (value instanceof String) && (value.length < 1)
    ) return true;
    else return false;
};