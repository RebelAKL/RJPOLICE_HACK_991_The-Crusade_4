// import React from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


// function Voicesearch() {
//     const startListening =()=>{
//         SpeechRecognition.startListening({continuous: true,language:'en-IN'});
  
//       }
        
  
//       const { transcript, listening,resetTranscript,browserSupportsSpeechRecognition}= useSpeechRecognition();
  
//       if (!browserSupportsSpeechRecognition) {
//         return <span>Browser do not support</span>
//       }
  
//   return (
//     <div className="container">
//         <h2>Tap to Speak</h2>
//         <p><i class="fa fa-microphone">Microphone:{listening ?'on':'off'}</i></p>
//         <div className="main-content">
//         <p>{transcript}</p>
//         </div>
        
//         <div className="btn-style">
//           <button onClick={startListening}>Start Listening</button>
//           <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
//           <button onClick={resetTranscript}>Reset</button>
//           <button>Copy</button>
//         </div>
        
//       </div>
//   )
// }

// export default Voicesearch;