


const rearrange = id =>{
    //take in element ID and use it to select the element
    const element = document.getElementById(id),
    text = element.innerText.split(""); //split text into array

    //clear out existing text
    element.innerText = "";
    //iterate over array of text
    text.forEach(letter=>{
        const span = document.createElement("span");//creates  span for each letter

        span.className = "letter"; //give each span a classname called "letter"

        span.innerText = letter; //puts a letter inside each span container

        element.appendChild(span); //add the whole thing inside the original element
    });
}

rearrange("insta");
rearrange("A");
rearrange("first");
rearrange("second");
rearrange("third");
rearrange("fourth");