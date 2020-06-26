import request from 'superagent'

export function savePerson(person) {
    console.log('saving person')
    return request.post('/')
        .send(person)
        .then(res => {
            return res.body
        })
}