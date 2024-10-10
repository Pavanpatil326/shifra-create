let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=0.8
    text_speak.pitch=0.1
    text_speak.volume=100
    text_speak.lang="hi-GB"
   window.speechSynthesis.speak(text_speak)
} 

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Pavan  Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good Afternoon Pavan Sir");
    }else if(hours>=16 && hours <8){
        speak("Good Evening Pavan Sir")
    }
    else{
        speak("good Night Sir ")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition= window.speechRecognition || window.webkitSpeechRecognition 
let recogintion =new speechRecognition()
recogintion.onresult=(event)=>{
   let currentIndex= event.resultTndex
   let transcript=event.results[currentIndex][0].transcript
   content.innerText=transcript
    takeCommand(transcript.toLowerCase())

}

btn.addEventListener("click", ()=>{
    recogintion.start()
    btn.style.display="none"
    voice.style.display="block"
})

function tekeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
   if(message.includes("hello Shifra")||message.includes("Hey Shifra")){
    speak("Hello Sir What Can I Help You")
   }
   else if(message.includes("who are you")){
    speak("i am virtual assistant ,created by Pavan Sir")
   }else if(message.includes("hello shifra please open the youtube")){
    speak("Thank you for respecting OPENING YOUTUBE")
     window.open("https://www.youtube.com/","_blank")
   }else if(message.includes("Good Morning Shifra")){
    speak("Good Morning Sir Have A nice Day Sir")
   }else if(message.includes("Good Afternon Shifra")){
    speak("Good Afternon  Sir ")
   }else if(message.includes("Good evening Shifra")){
    speak("Good evening  Sir ")
   }else if(message.includes("Good night Shifra")){
    speak("Good night  Sir what was your day ")
   }else if(message.includes("hello shifra please open the whatsapp")){
    speak("Thank you for respecting OPENING WHATSAPP")
    window.open("whatsapp://","_blank")
   }else if(message.includes("time")){
    let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time)
  }
  else if(message.includes("date")){
      let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
      speak(date)
    }
   
   else{
    let finalText="This Is What I Found On Internet Regarding"+message.replace("shipra","")|| message.replace("shifra","")
    speak(finalText )
    window.open(`https://www.google.com/search?q=${message.replace("shipra")}`,"_blank")
   }
}

