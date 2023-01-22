import Spotify from "./Component/Spotify";
import Hotstar from "./Component/Hotstar";
import Tcs from "./Component/Tcs";
import Flipkart from "./Component/Flipkart";


const App=()=>{
  return(      
    <div className="App">
      <Hotstar/>
      <Tcs/>
      <Flipkart/>
      <Spotify/>
    </div>
  )
}

export default App