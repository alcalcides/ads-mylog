const myNames = require('./myNames.json')
const { getFullName, printFullName } = require('./printMyName')

const myFullname = getFullName(myNames)

module.exports = {
    myNames,
    myFullname,
    prinfFullName: function () { printFullName(myFullname)}
}