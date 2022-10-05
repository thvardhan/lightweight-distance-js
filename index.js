
const validateArrayType = (list) => {
    if (!Array.isArray(list)) {
        throw 'Distance parameter must be an array';
    }
}

const validateArrayLength = (list_a, list_b) => {
    if (list_a.length !== list_b.length) {
        throw 'Both vectors must be of same length';
    }
}

const validateParams = (list_a, list_b) => {
    validateArrayType(list_a)
    validateArrayType(list_b)
    validateArrayLength(list_a, list_b)
}

/**
 * @param vector_a
 * @param vector_b
 * @returns vector containing euclidean distance
 */
const euclideanDistance = (vector_a, vector_b) => {
    validateParams(vector_a, vector_b)
    const result = vector_a.map((i, index) => {

        return Math.pow(i - vector_b[index], 2)

    }).reduce((a, b) => {
        return a + b
    })
    return Math.sqrt(result)
}

const sqeuclideanDistance = (vector_a, vector_b) => {
    validateParams(vector_a, vector_b)
    const result = vector_a.map((i, index) => {

        return Math.pow(i - vector_b[index], 2)

    }).reduce((a, b) => {
        return a + b
    })
    return result;
}

module.exports = { euclideanDistance, sqeuclideanDistance };
