const skills = [
    {id: 10001, skill: "Javascript", learned: true},
    {id: 10002, skill: "Css", learned: true},
    {id: 10003, skill: "HTML", learned: true},
    {id: 10004, skill: "Python", learned: false}
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}