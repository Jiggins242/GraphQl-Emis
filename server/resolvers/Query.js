
function patientInfo(parent, args, context, info) {
    return context.db.query.patients({}, info)
}

module.exports = {
    patientInfo
}