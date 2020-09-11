import '../css/index.css';
import search from './search'
import render from './render'

const id = prompt('Que pokemon sos, fiera? (1-50)');

search(id)
    .then((data) => {
        render(data)
    })
    .catch(() => {
        alert('No hubo pokemon');
        console.log(err)
    })