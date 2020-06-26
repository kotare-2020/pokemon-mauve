import request from 'superagent'

export function savePerson(person) {
    console.log('saving person - api function')
    return request.post('/')
        .send({ name: person })
        .then(res => {
            return res.body
        })
}

export function saveResult(name, result) {
    console.log('saving result')
    const data = {
        name: name,
        won: result
    }

    return request.post('/result')
        .send(data)
        .then(res => {
            return res.body
        })
}