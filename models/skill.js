const skills = [
    {id: 10001, skill: "Javascript", learned: true},
    {id: 10002, skill: "Css", learned: true},
    {id: 10003, skill: "HTML", learned: true},
    {id: 10004, skill: "Python", learned: false}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skill.done = false;
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    console.log(idx + "THIS IS THE DELETE INDEX")
    skills.splice(idx, 1)
}