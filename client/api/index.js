import request from 'superagent'

export function savePerson(person) {
    console.log('saving person - api function')
    return request.post('/')
        .send({name:person})
        .then(res => {
            return res.body
        })
}