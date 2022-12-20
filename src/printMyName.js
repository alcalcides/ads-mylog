/**
 * Concatenate names from a vector of names
 */
function getFullName(names) {
    let fullName = '';
    names.forEach(name => {
        fullName += name + ' ';
    });
    return fullName;
}

function printFullName(fullname) {
    console.log(fullname)
}

module.exports = {
    getFullName,
    printFullName
}