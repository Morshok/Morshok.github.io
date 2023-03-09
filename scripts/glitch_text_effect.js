const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const interval_time_ms = 30;

document.querySelector("#glitch_text").onmouseover = event => {
    let iteration = 0;
    
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
            if(index < iteration) {
                return event.target.dataset.value[index];
            }
            return alphabet[Math.floor(Math.random() * alphabet.length)];
        })
        .join("");
        
        if(iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }
    
        iteration += 1;
        
    }, interval_time_ms);
}