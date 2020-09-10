import '../css/index.css';
import search from './search'
import render from './render'

const id = prompt('Que pokemon sos, fiera?');

search(id)
    .then((data) => {
        render(data)
    })
    .catch(() => {
        prompt('No hubo pokemon');
        console.log(err)
    })