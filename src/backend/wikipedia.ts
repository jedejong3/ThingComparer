
export class Wikipedia{

  constructor(){
    const Http = new XMLHttpRequest();
    const url='https://en.wikipedia.org/w/api.php';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange=(e)=> {
    console.log(Http.responseText)
}
}
}
