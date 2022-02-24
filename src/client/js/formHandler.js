import {checkUrl} from "./urlCheck";
const handleSubmit = (event) => {
    event.preventDefault();
    let inputEle = document.querySelector('#website-url');
    let userInput = inputEle.value;
    //if url is invalid, notify user and clear input field
    console.log(userInput)
    if(checkUrl(userInput) === false){
        inputEle.value = ""
        alert("Please enter a valid url!!!")
        return;
    }
    //if url is valid...
    let data = {
        apiUrl: 'https://api.meaningcloud.com/sentiment-2.1?',
        url: userInput
    }
    postData("http://localhost:8081/fetchApi", data)
    .then((data) =>{
        updateUI(data)
    })
    .catch(err => {
        console.log("error occurred:", err);
    })
}

const postData = async(url = "", data = {}) => {
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try{
        const postRes = await response.json();
        return postRes;
    }catch(err){
        console.log('error occurred in postData: ', err);
    }
}

const updateUI = (data) => {
    let score = document.querySelector('#score');
    let agreement = document.querySelector('#agreement');
    let subjectivity = document.querySelector('#subjectivity');
    let confidence = document.querySelector('#confidence');
    let irony = document.querySelector('#irony');
    score.innerHTML = `Score: ${data.score_tag}`;
    agreement.innerHTML = `Agreement: ${data.agreement}`;
    subjectivity.innerHTML = `Subjectivity: ${data.subjectivity}`;
    confidence.innerHTML = `Confidence: ${data.confidence}`;
    irony.innerHTML = `Irony: ${data.irony}`
}

export {handleSubmit, postData, updateUI}