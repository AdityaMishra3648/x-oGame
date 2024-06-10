import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [nums,setNums] = useState([[0,0,0],[0,0,0],[0,0,0]]);
  const [turn,setTurn] = useState(false);
  const [arr,setArr] = useState([]);
  const [audio] = useState(new Audio('../mixkit-arcade-game-jump-coin-216.wav'));

  const reset = () =>{
    setNums([[0,0,0],[0,0,0],[0,0,0]]);
    setArr([]);
    setTurn(false);
  }

  const chechWinner = () =>{
    for(let i=0;i<3;i++){
      let row = 0;
      let col = 0;
      let dig = 0;
      for(let j=0;j<3;j++){
        dig += nums[j][j];
        row += nums[i][j];
        col += nums[j][i];
      } 
      if(row==3)return 1;
      if(row==-3)return -1;
      if(col==3)return 1;
      if(col==-3)return -1;
      if(dig==3)return 1;
      if(dig==-3)return -1;
    }
    let t = nums[2][0] + nums[1][1] + nums[0][2];
    if(t==3)return 1;
    if(t==-3)return 1;
    return 0;
  }

  const newInput = (a,b) =>{
    audio.play();
    if(nums[a][b]!=0)return;
    let tnums = [...nums];
    tnums[a][b] = (turn?1:-1);
    setNums(tnums);
    let tarr = [...arr];
    tarr.push([a,b]);
    if(tarr.length>8){
      let t = tarr.shift();
      nums[t[0]][t[1]] = 0;
      }
      setArr(tarr);
      let val = chechWinner();
      
    if(val!=0){
      if(val==1)alert("zero is winner");
      else alert("cross is winner");
      reset();
    }

    setTurn(!turn);
  }

  return (
    <>
      <div className="mainDiv">
          <div className='row1'>
          {
            nums[0].map((item, index) => (
              <div onClick={()=>newInput(0,index)} className="row1Divs" key={index}>
                {item === 0 ? (
                  <div></div>
                ) : item === 1 ? (
                  <img src="https://pbs.twimg.com/profile_images/1649815714872832000/Y-mBoggS_400x400.jpg" alt="loading image" className="image" />
                ) : (
                  <img src="https://thumbs.dreamstime.com/b/red-black-grunge-brush-stroke-cross-no-decline-aggressive-vector-vintage-sign-curved-isolated-check-mark-object-dark-background-95414900.jpg" alt="loading image" className="image" />
                )}
              </div>
            ))
          }
          </div>
          <div  className='row2'>
            {
              nums[1].map((item,index)=>(
                <div onClick={()=>newInput(1,index)} className="row1Divs" key={index}>
                {item === 0 ? (
                  <div></div>
                ) : item === 1 ? (
                  <img src="https://pbs.twimg.com/profile_images/1649815714872832000/Y-mBoggS_400x400.jpg" alt="loading image" className="image" />
                ) : (
                  <img src="https://thumbs.dreamstime.com/b/red-black-grunge-brush-stroke-cross-no-decline-aggressive-vector-vintage-sign-curved-isolated-check-mark-object-dark-background-95414900.jpg" alt="loading image" className="image" />
                )}
              </div>
              ))
            }
          </div>
          <div className='row3'>
            {
              nums[2].map((item,index)=>(
                <div onClick={()=>newInput(2,index)} className="row1Divs" key={index}>
                {item === 0 ? (
                  <div></div>
                ) : item === 1 ? (
                  <img src="https://pbs.twimg.com/profile_images/1649815714872832000/Y-mBoggS_400x400.jpg" alt="loading image" className="image" />
                ) : (
                  <img src="https://thumbs.dreamstime.com/b/red-black-grunge-brush-stroke-cross-no-decline-aggressive-vector-vintage-sign-curved-isolated-check-mark-object-dark-background-95414900.jpg" alt="loading image" className="image" />
                )}
              </div>
              ))
            }
          </div> 
      </div>
    </>
  )
}

export default App
