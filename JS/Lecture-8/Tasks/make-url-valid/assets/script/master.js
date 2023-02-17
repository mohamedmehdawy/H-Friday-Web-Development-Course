/**
 * this function make url valid
 * @param {url} - target url
 * @return {validUrl} - valid url
 */
function makeUrlValid(url) {
    // the good piece of url
    let goodPiece = "";

    // not valid characters
    const notValidCharacters = ["!", "$", "<script></script>"];
    const notValidCharactersIndexes = [];

    // index of not valid characters
    let index = -1;

    // set indexes
    for(let i = 0; i < notValidCharacters.length; i++) {
        notValidCharactersIndexes.push(-1);
    }
    // check for not valid characters
    for (let i = 0; i < notValidCharacters.length; i++) {
        const current_index = url.indexOf(notValidCharacters[i]);
        if (current_index != -1) {
            notValidCharactersIndexes[i] = current_index;
        }
    }
    // get first not valid
    let small = notValidCharactersIndexes[0];
    let pos = 0;
    for (let i = 0; i < notValidCharactersIndexes.length; i++) {
        if (
            notValidCharactersIndexes[i] < small &&
            notValidCharactersIndexes[i] != -1
        ) {
            small = notValidCharactersIndexes[i];
            pos = i;
        }
    }
    index = small;
    if (index != -1) {
        goodPiece = url.slice(0, index);
        return (
            goodPiece +
            makeUrlValid(url.slice(index + notValidCharacters[pos].length))
        );
    } else {
        return url;
    }
}

console.log(
    makeUrlValid(
        "https://$www.!google!.com/search?q=javascript+<script></script>call+stack&client=firefox-<Error>b-d&sxsrf=!!AJOqlzWfGkxZ1eRCAYIlibIdMN387lSQXw:1676044481612&$$source=$$lnms&tbm=isch&sa=(444)X&ved=2ahUKEwj70dCfqIv9AhUxTKQEHe_0AVIQ_AUoAXoECA_|E|_QAw&biw=1920&bih=966&dpr=1#imgrc=ttQhggGNsUomkM"
    )
);
