import React from 'react';
import './App.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import FAB from '@material-ui/core/FAB';
import LineTo from 'react-lineto';
import ReactRough, { Circle, Line, Path } from 'react-rough';
import useDimensions from 'react-use-dimensions';

const types = {
  skeld: [
    {
      id: "Reactor",
      position: ["8%", "50%"],
      tasks: [
        "Start Reactor",
        "Unlock Manifolds"
      ]
    },
    {
      id: "Upper Engine",
      position: ["18%", "25%"],
      tasks: [
        "Align Engine Output",
        "Fuel Engines"
      ]
    },
    {
      id: "Lower Engine",
      position: ["18%", "75%"],
      tasks: [
        "Fuel Engines"
      ]
    },
    {
      id: "Security",
      position: ["27%", "50%"],
      tasks: []
    },
    {
      id: "MedBay",
      position: ["35%", "40%"],
      tasks: [
        "Inspect Sample",
        "Submit Scan"
      ]
    },
    {
      id: "Electrical",
      short: "Elect-rical",
      position: ["37%", "65%"],
      tasks: [
        "Divert Power to <X>",
        "Fix Wiring",
        "Calibrate Distributor",
        "Download Data"
      ]
    },
    {
      id: "Cafeteria",
      short: "Cafe",
      position: ["53%", "27%"],
      tasks: [
        "Empty Garbage"
      ]
    },
    {
      id: "Storage",
      position: ["50%", "80%"]
    },
    {
      id: "Admin",
      position: ["65%", "60%"]
    },
    {
      id: "Communications",
      short: "Comms",
      position: ["63%", "88%"]
    },
    {
      id: "Weapons",
      position: ["75%", "22%"]
    },
    {
      id: "O2",
      position: ["68%", "43%"]
    },
    {
      id: "Shields",
      position: ["75%", "75%"]
    },
    {
      id: "Navigation",
      short: "Navig-ation",
      position: ["90%", "46%"]
    },
  ],
  // polus: [
  //   "Security",
  //   "O2",
  //   "Electrical",
  //   "Communications",
  //   "Weapons",
  //   "Office",
  //   "Storage",
  //   "Launchpad",
  //   "Admin",
  //   "Laboratory",
  //   "Specimen Room"
  // ],
  // mira: [
  //   "Greenhouse",
  //   "Office",
  //   "Admin",
  //   "Storage",
  //   "Balcony",
  //   "Cafeteria",
  //   "Communications",
  //   "MedBay",
  //   "Locker Room",
  //   "Decontamination",
  //   "Laboratory",
  //   "Reactor",
  //   "Launchpad"
  // ]
};

const maps = [
  {
    id: "skeld",
    name: "The Skeld"
  },
  {
    id: "polus",
    name: "Polus"
  },
  {
    id: "mira",
    name: "MIRA HQ"
  }
]

const colors = [
  "red",
  "goldenrod",
  "yellow",
  "limegreen",
  "aqua",
  "blue",
  "purple",
  "white",
]

function App() {
  var [map, setMap] = React.useState("skeld");
  var [list, setList] = React.useState([]);
  const [ref, x] = useDimensions();
  const [rng, setRng] = React.useState(Math.floor(Math.random()*1000))
  const { width, height } = x;
  console.log(x);
  var mapTypes = types[map];
  return (
    <div className="App">
      <header className="App-header">
        <Tabs centered style={{ width: "100%" }} value={map} aria-label="map selector">
          {maps.map(i => <Tab style={{ color: "white" }} onClick={() => setMap(i.id)} label={i.name} value={i.id} />)}
        </Tabs>
      </header>
      {mapTypes ? <main style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "80%", position: "relative", alignSelf: "flex-start" }}>
          <img src={`${map}.jpg`} style={{ width: "100%" }} />
          <svg ref={ref} xmlns="http://www.w3.org/2000/svg" style={{isolation:"isolate", position: "absolute", left: 0, top: 0, bottom: 0, right: 0}} viewBox="0 0 400 225" width="100%">
            <defs>
              <clipPath id="_clipPath_ZPZFAUOW6cfyjH1olzk1mUrLvko6XLRq">
                <rect width="400" height="225" />
              </clipPath>
            </defs>
            <g clipPath="url(#_clipPath_ZPZFAUOW6cfyjH1olzk1mUrLvko6XLRq)">
              <g>
                <path onClick={()=>setList([...list,"Cafeteria"])} d=" M 165.946 26.005 L 165.672 82.943 L 186.944 104.171 L 239.313 104.15 L 259.989 82.945 L 260.889 33.821 L 235.688 9.229 L 182.893 9.237 L 165.946 26.005 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                <path onClick={()=>setList([...list,"Weapons"])} d=" M 279.922 29.508 L 279.854 64.638 L 288.82 73.289 L 317.964 72.921 L 318.3 47.383 L 300.061 29.488 L 279.922 29.508 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                <path onClick={()=>setList([...list,"Upper Engine"])} d=" M 52.328 44.737 L 52.194 78.821 L 52.411 79.392 L 91.277 79.347 L 91.277 35.903 L 62.422 35.787 L 52.328 44.737 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                <path onClick={()=>setList([...list,"MedBay"])} d=" M 123.917 69.218 L 123.802 107.197 L 130.443 115.754 L 174.114 115.813 L 174.234 105.422 L 159.37 90.921 L 159.201 69.256 L 123.917 69.218 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                <path onClick={()=>setList([...list,"Reactor"])} d=" M 32.752 75.671 L 18.307 84.82 L 19.328 135.037 L 32.752 143.259 L 40.569 143.163 L 41.043 129.238 L 54.136 128.869 L 53.957 89.886 L 41.066 89.577 L 40.606 75.764 L 32.752 75.671 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                <path onClick={()=>setList([...list,"O2"])} d=" M 272.597 80.81 L 254.474 97.356 L 254.883 109.439 L 270.174 109.437 L 284.975 109.347 L 284.693 80.924 L 272.597 80.81 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                <path onClick={()=>setList([...list,"Security"])} d=" M 103.52 84.187 L 94.992 91.458 L 95.108 128.537 L 116.368 128.321 L 116.601 90.21 L 111.023 84.234 L 103.52 84.187 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                <path onClick={()=>setList([...list,"Navigation"])} d=" M 352.842 84.299 L 352.964 122.779 L 367.961 122.922 L 381.785 111.663 L 381.799 96.05 L 368.519 84.493 L 352.842 84.299 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                <path onClick={()=>setList([...list,"Admin"])} d=" M 236.241 116.939 Q 236.429 154.331 236.456 154.362 Q 236.483 154.393 270.879 154.447 L 278.109 147.181 Q 278.133 117.254 278.027 117.089 Q 277.827 116.778 236.241 116.939 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                <path onClick={()=>setList([...list,"Electrical"])} d=" M 131.504 126.324 L 131.429 172.386 L 154.846 172.511 L 163.421 164.299 L 163.421 146.659 L 174.234 136.314 L 174.114 126.168 L 131.504 126.324 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                <path onClick={()=>setList([...list,"Storage"])} d=" M 188.419 138.323 L 175.61 150.703 L 175.464 198.069 L 193.37 215.982 L 226.449 215.877 L 226.547 138.444 L 188.419 138.323 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                <path onClick={()=>setList([...list,"Lower Engine"])} d=" M 52.167 142.055 L 51.773 177.346 L 62.288 185.447 L 91.135 185.706 L 91.299 185.2 L 91.177 142.164 L 52.167 142.055 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                <path onClick={()=>setList([...list,"Shields"])} d=" M 288.313 149.803 L 280.112 158.391 L 279.922 193.779 L 299.843 193.754 L 318.309 175.626 L 317.895 149.946 L 288.313 149.803 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                <path onClick={()=>setList([...list,"Communications"])} d=" M 232.189 184.018 L 232.04 207.475 L 240.619 215.644 L 266.031 215.176 L 274.395 207.485 L 274.168 184.017 L 232.189 184.018 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                {/* <path onClick={()=>console.log(4)} d=" M 85.537 47.815 C 85.537 48.515 85.83 48.846 86.449 48.846 C 87.389 48.846 87.461 48.465 86.618 47.95 C 85.736 47.413 85.537 47.388 85.537 47.815 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" /> */}
              </g>
            </g>
          </svg>
          {mapTypes.map(i => <FAB className={i.id} onClick={() => setList([...list, i.id])} size="medium" style={{ opacity: 0, backgroundColor: ["#ffffff", "#aaffff", "#77ffff", "#33ccff", "#0099ff"][list.filter(x => x === i.id).length], color: "black", fontSize: 9, position: "absolute", marginTop: -24, marginLeft: -24, top: i.position[1], left: i.position[0] }}>
            {i.short || i.id}
          </FAB>)}
          <FAB onClick={() => {setList([]);setRng(Math.floor(Math.random()*1000))}} size="medium" style={{ backgroundColor: "red", color: "white", fontSize: 12, position: "absolute", marginTop: -24, marginLeft: -24, bottom: 24, right: 24 }}>
            Reset
          </FAB>
          <div className="line" style={{position: "absolute", left: 0, top: 0, bottom: 0, right: 0}}>
            <ReactRough config={{options:{roughness:3,seed:rng}}} width={width||10} height={height||10}>
              {list.length === 0 && <Circle
                x={0}
                y={0}
                diameter={0}
              />}
              {list.slice(0, -1).map((i, index) => <Line
                render={list.length}
                x1={Number(mapTypes.find(x=>x.id===i).position[0].slice(0,-1)) / 100 * width}
                x2={Number(mapTypes.find(x=>x.id===list[index+1]).position[0].slice(0,-1)) / 100 * width}
                y1={Number(mapTypes.find(x=>x.id===i).position[1].slice(0,-1)) / 100 * height}
                y2={Number(mapTypes.find(x=>x.id===list[index+1]).position[1].slice(0,-1)) / 100 * height}
                stroke={colors[index % colors.length]}
                strokeWidth={4}
              />)}
              {list.map((i,index)=><Circle
                render={list.length}
                x={Number(mapTypes.find(x=>x.id===i).position[0].slice(0,-1)) / 100 * width}
                y={Number(mapTypes.find(x=>x.id===i).position[1].slice(0,-1)) / 100 * height}
                diameter={40}
                stroke={colors[index % colors.length]}
                strokeWidth={4}
              />)}
            </ReactRough>
          </div>
          {/* {list.slice(0, -1).map((i, index) => <LineTo className="line" borderColor={colors[index % colors.length]} borderWidth={10} from={i} to={list[index + 1]} />)} */}
        </div>
        <List style={{ flexGrow: 1 }} dense={true}>
          {list.map(i => <ListItem>
            <ListItemText style={{ color: "white" }} primary={i} />
          </ListItem>)}
        </List>
        {/* <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Typography color="textPrimary">{i}</Typography>)}
        </Breadcrumbs> */}
      </main> : <div style={{ color: "white" }}>Coming soon</div>}
      {/* <div style={{height:500}}/> */}
    </div >
  );
}

export default App;
