const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = function (e) {
    const acceptedColors = [
        'blue',
        'green',
        'pink',
        'white',
        'yellow',
        'wheat',
        'brown',
        'purple',
        'black',
        'orange'
    ]

    for(let i = e.resultIndex; i < e.results.length ; i++){
        const script = e.results[i][0].transcript.toLowerCase().trim();
        if(acceptedColors.includes(script)){
            document.body.style.backgroundColor = script;
        } else{
            alert('please say a appropriate color')
        }
    }
}

rec.start();

