/**
 * input: the input will take from user
 * cleared: the input after cleared from (  >  < ! @ script ) chars
 * topDomain: the top doamins of links
 * pureLinks: the links with out search part
 * userSearch: the search of user in links
 */
let input = `https://www.producthunt.com/product<script>s/links-list/a!lternatives,
https://www.pro@ducthunt.com/products/voblet,
https://www.facebook.com/MahmoudAdelSec/,
https://www.facebook.com/frie<script>nds/requests/?profile_id=100009433921149,
https://www.carrefouregypt.com/mafegy/@ar/soft-cheese-cottage/karish-cheese/p/327038,
https://www.google.com/search?client=firefox-b-d&q=%D8%AC%D8%A8%D9%86%D8%A9+%D9%82%D8%B1%D9%8A%D8%B4,
https://www.youm7.com/story/2022/8/20/%D8%A7%D9%84%D8%AC%D8%A8%D9%86-%D8%A7%D9%84%D9%82%D8%B1%D9%8A%D8%B4-%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A1-%D8%A7%D9%84%D9%85%D8%AB%D8%A7%D9%84%D9!%89-%D9%84%D8%A5%D9%86%D9%82%D8%A7%D8%B5-%D8%A7%D9%84%D9%88%D8%B2%D9%86-%D9%88%D9%85%D8%AF-%D8%AC%D8%B3%D9%85%D9<script>%83-%D8%A8%D8%A7%D9%84%D9%83%D8%A7%D9%84%D8%B3%D9%8A%D9%88%D9%85-%D9%88%D8%A7%D9%84%D8%A8%D8%B1%D9%88%D8%AA%D9%!8A%D9%86/5876837,
https://teachinghub.as.ua.edu/faculty-blog/large-courses/how-to-get-away-with-murder-or-how-to-kill-student-par@ticipation/,
https://www.jstor.org/stable/30185754,
https://www.deviantart.com/catastrophefire13/art/101-Ways-To-Kill-yo<script>ur-teachers-127050592,
https://www.amazon.com/How-K!ill-8th-Grade-Teache!r/dp/0615640931,
https://www<.amazon.com/dp/1!473323851/ref=syn_sd_onsite_desktop_20?ie=UTF8&psc=1&pd_rd_plhdr=t,!
https://www.google.com/search?q=%D8%AE%D9%8A%D8%A7%D8%B1+%D9%85%D8%AE%D9%84%D9%84&client=firefox-b-d&sxsrf=ALiCzsZPl8ZGlh7iOuMCSiZ6H1AEdwR2oA%3A1671809573511&ei=JcqlY7PpHoiDkdUP59eTgAI&!ved=0ahUKEwjzj4v-h5D8AhWIQaQEHefrBCAQ4dUDCA4&uact=5&oq=%D8%AE%D9%8A%D8%A7%D8%B1+%D9%85%D8<>%AE%D9%84%D9%84&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICC4QgAQQywEyCAgAEIAEEMsBMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBMggIABCABBD!LATIICAAQgAQQywE6CAgAEIAEELADOggIABCGAxCwAzoECCMQJzoGCCMQJxATOgUIABCABDoLCAAQgAQQsQMQgwE6CwguEIAEEMcBEK8BOgUILhCABDoPCAAQgAQQywEQRhD_ARgBSgQIQRgBSgQIRhgBUP4EWLgNYKsOaAFwAHgAgAHpAogB2gySAQcwLjYuMS4xmAEAoAEByAEFwAEB2gEGCAEQARgT&sclient=gws-wiz-serp,
https://www.google.com/search?q=%D9<script>%85%D8%B9%D9%84%D8%B4+%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D9%83+%D8%B5%D8%B9%D8%A8+%D8%A8%D8%B3+%D8%A7%D9%86%D8%AA+%D9%82%D8%AF%D9%87%D8%A7&client=firefox-b-d&sxsrf=ALiCzsZPl8ZGlh7iOuMCSiZ6H1AEdwR2oA%3A1671809573511&e!!i=JcqlY7PpHoiDkdUP59e!TgAI&ved=0ahUKEwjzj4<v-h5D8AhWIQaQEHefrBCAQ4dUDCA4&uact=5&oq=%D9%85%D!8%B9%D9%84%D8%B4+%D8%A7%D9%84%D8%AA%D8%A7%D8%B3%D9%83+%D8%B5%D8%B9%D8%A8+%D8%A8%D8%B3+%D8%A7%D9%86%D8%AA+%D9%82%D8%AF%D9%87%D8%A7&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzoICAAQgAQQsAM6CAgAEIYDELADOgQIIxAnOgsIABCABBC><xAxCDAToICAAQsQMQgwE6CAguELEDEIMBOgsILhCABBCxAxCDAToLCC4QgAQQxwEQrwE6BQgAEIAEOgUILhCABDoICC4QgAQQywE6CAgAEIAEEMsBOgsILhCABBDUAhDLAToKCAAQgAQQChDLAToICAAQHhAPEA06CggAEBYQHhAPEAo6BggAEBYQHjoICAAQFhAeEA86CggAEAgQHhAPEA06CAgAEAgQHhANOgUIIRCgAToHCCEQoAEQCkoECEEYAUoECEYYAFC7BlijIGD9IWgBcAB4AIABwwGIAeIhkgEEMC4yN5gBAKABAcgBBcABAQ&sclient=gws-wiz-serp,
https://www.google.com/search?q=%D9%85%D8%B7%D9%84%D8%B9%D8%AA%D8%B4+%D9%82%D8%AF%D9%87%D8%A7+%D8%9F+%D8%A7%D9%86%D9%8A+%D8%A7%D8%B3%D9%81&client=firefox-b-d&sxsrf=ALiCzsa-ULfaCd2TLevOsjFKjO5cpWHm7g%3A1671809643968&ei=a8qlY5PMOoylkdUPpM29gAI&ved=0ahUKEwjTrdefiJD8AhWMUqQEHaRmDyAQ4dUDCA4&uact=5&!oq=%D9%85%D8%B7%D9%84%D8%B9%D8%AA%D8%B4+%D9%82%D8%AF%D9%87%D8%A7+%D8%9F+%D8%A7%D9%8!6%D9%8A+%D8%A7%D8%B3%D9%81&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzoKCAAQRxDWBBCwAzoECCMQJzoLCAAQgAQQsQMQgwE6CAgAELEDEIMBOggILhCxAxCDAToLCC4QgAQQsQMQgwE6Cw!guEIAEEMcBEK8BOgUIABCABDoFCC4QgAQ6CAgAEIAEEMsBOgoIABCABBAKEMsBOgsIABAeEA8Q8QQQCjoECAAQHjoGCAAQHhAPOggIABAeEA8QCjoICAAQBRAeEAo6BggAEB4QEzoKCAAQHhAPEAoQEzoFCCEQoAE6BwghEKABEAo6BQgAEKIEOgQIIRAVSgQIQRgASgQIRhgAUNADWJodYJQnaAFwAXgAgAGsAYgBrBqSAQQwLjIymAEAoAEByAEDwAEB&sclient=gws-wiz-serp,
`;
let cleared = "";
let topDomain = "";
let pureLinks = "";
let userSearch = "";

// remove (  >  < ! @ script ) chars
cleared = input.replace(/>|<|!|@|script/g, '');

/**
 * -- or i can use chain of replace methods like this, because each replace method will return string
 * cleared = input.replace('>', '').replace('<', '') etc
 */

// top level domain
/**
 * pattern explain:
 *  get any chars is between . and /
 */
topDomain = cleared.match(/(?<=\.)\w+(?=\/)/g)

// links with out search part
/**
 * pattern explain:
 *  get any chars start with www.one or more char.one or more char
 */
pureLinks = cleared.match(/www.\w+.\w+/g);

// get user search from cleared data
/**
 * pattern explain:
 *  get any chars after search? and not inpude , char
 */
userSearch = cleared.match(/(?<=search\?)[^,]+/g)


// output
// -- cleared
console.log(`cleared:\n${cleared}`)
console.log("".padEnd(50, '#'))

// -- top domain
console.log(`top domain:\n`, topDomain)
console.log("".padEnd(50, '#'))

// -- pure links
console.log(`pure links:\n`, pureLinks)
console.log("".padEnd(50, '#'))

// -- user search
console.log(`user search:\n`, userSearch)
console.log("".padEnd(50, '#'))
