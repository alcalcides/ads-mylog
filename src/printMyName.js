const logger = require('../logger')

/**
 * Concatenate names from a vector of names
 */
function getFullName(names) {
    let fullName = '';
    names.forEach(name => {
        fullName += name + 'X';
    });
    return fullName;
}

function printFullName(fullname) {
    console.log(fullname.replaceAll('X', ' '))
    logger.debug('logging debug')
    logger.info('logging info')
    logger.warn('logging warn')
    logger.error('logging error')
}

module.exports = {
    getFullName,
    printFullName
}

printFullName("alcides augusto bezerra neto")