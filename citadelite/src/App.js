import './Navigation/navbar.js'

import './App.css';
import { WorldIDWidget } from '@worldcoin/id'
import Navbar from './Navigation/navbar';

function App() {
  return (
    <>
<Navbar/>
    <div class="App bg-black w">   
       <div class="text-center mx-auto ">
      <h1 class="text-white">Citadelite</h1>
      <p class="text-white">The only place in the internet where only, real humans live</p>
      <WorldIDWidget
  actionId="wid_BPZsRJANxct2cZxVRyh80SFG" // obtain this from developer.worldcoin.org
  signal="my_signal"
  enableTelemetry
  onSuccess={(verificationResponse) => console.log(verificationResponse)} // pass the proof to the API or your smart contract
  onError={(error) => console.error(error)}
  debug={true} // to aid with debugging, remove in production
/>
       </div>
    
<iframe src="https://embed.lottiefiles.com/animation/94789" ></iframe>

    </div>
    </>
  );
}

export default App;
