
function patientInfo(parent, args, context, info) {
    return context.db.query.patients({}, info)
}

function userInfo(parent, args, context, info) {
    return context.db.query.users({}, info)
}

module.exports = {
    patientInfo,
    userInfo
}