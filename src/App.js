import React from 'react';
import './App.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import FAB from '@material-ui/core/Fab';
import ReactRough, { Circle, Line } from 'react-rough';
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
  polus: [
    {
      id: "Security",
      position: ["17%", "48%"],
    },
    {
      id: "O2",
      position: ["15%", "65%"],
    },
    {
      id: "Oxygen Storage",
      position: ["13%", "74%"],
    },
    {
      id: "Pump Room",
      position: ["15%", "89%"],
    },
    {
      id: "Electrical",
      position: ["28%", "50%"],
    },
    {
      id: "Communications",
      position: ["33%", "64%"],
    },
    {
      id: "Weapons",
      position: ["33%", "88%"],
    },
    {
      id: "Office",
      position: ["48%", "65%"],
    },
    {
      id: "Vitals",
      position: ["60%", "65%"],
    },
    {
      id: "Storage",
      position: ["50%", "47%"],
    },
    {
      id: "Dropship",
      position: ["43%", "20%"],
    },
    {
      id: "Admin",
      position: ["55%", "82%"],
    },
    {
      id: "Laboratory",
      position: ["75%", "33%"],
    },
    {
      id: "Bathroom",
      position: ["75%", "42%"],
    },
    {
      id: "Specimen Room",
      position: ["80%", "77%"],
    },
    {
      id: "Decontamination South",
      position: ["56%", "91%"],
    },
    {
      id: "Decontamination North East",
      position: ["86%", "42%"],
    },
    {
      id: "Seismic Stabilizer West",
      position: ["19%", "22%"],
    },
    {
      id: "Seismic Stabilizer East",
      position: ["57%", "19%"],
    },
  ],
  mira: [
    {
      id: "Greenhouse",
      position: ["66%", "11%"],
    },
    {
      id: "Office",
      position: ["60%", "25%"],
    },
    {
      id: "Admin",
      position: ["72%", "25%"],
    },
    {
      id: "Storage",
      position: ["69%", "72%"],
    },
    {
      id: "Balcony",
      position: ["69%", "90%"],
    },
    {
      id: "Cafeteria",
      position: ["76%", "75%"],
    },
    {
      id: "Communications",
      position: ["61%", "71%"],
    },
    {
      id: "MedBay",
      position: ["61%", "85%"],
    },
    {
      id: "Locker Room",
      position: ["52%", "75%"],
    },
    {
      id: "Decontamination",
      position: ["45.5%", "65%"],
    },
    {
      id: "Laboratory",
      position: ["52%", "45%"],
    },
    {
      id: "Reactor",
      position: ["39%", "43%"],
    },
    {
      id: "Launchpad",
      position: ["27%", "78%"],
    },
  ]
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
  "orange",
  "yellow",
  "limegreen",
  "aqua",
  "blue",
  "hotpink",
  "white",
]

const randomMessages = [
  "I saw yellow jump in a vent",
  "Blue is very susp",
  "VOTE RED OUT",
  "IT WASN'T ME!"
]

function App() {
  var [map, setMap] = React.useState("mira");
  var [list, setList] = React.useState([]);
  const [ref, x] = useDimensions();
  const [rng, setRng] = React.useState(Math.floor(Math.random() * 1000))
  const { width, height } = x;
  var mapTypes = types[map];
  return (
    <div className="App">
      <main style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "80%", alignSelf: "flex-start" }}>
          <Tabs centered style={{ width: "100%" }} value={map} aria-label="map selector">
            {maps.map(i => <Tab style={{ color: "white" }} onClick={() => { setMap(i.id); setList([]) }} label={i.name} value={i.id} />)}
          </Tabs>
          {mapTypes ? <div style={{ width: "100%", position: "relative" }}>
            <img src={`${map}.jpg`} style={{ width: "100%" }} alt={map + " map"} />
            {map === "skeld" ? <svg ref={ref} xmlns="http://www.w3.org/2000/svg" style={{ isolation: "isolate", position: "absolute", left: 0, top: 0, bottom: 0, right: 0, opacity: 0 }} viewBox="0 0 400 225" width="100%">
              <defs>
                <clipPath id="_clipPath_ZPZFAUOW6cfyjH1olzk1mUrLvko6XLRq">
                  <rect width="400" height="225" />
                </clipPath>
              </defs>
              <g clipPath="url(#_clipPath_ZPZFAUOW6cfyjH1olzk1mUrLvko6XLRq)">
                <g>
                  <path onClick={() => setList([...list, "Cafeteria"])} d=" M 165.946 26.005 L 165.672 82.943 L 186.944 104.171 L 239.313 104.15 L 259.989 82.945 L 260.889 33.821 L 235.688 9.229 L 182.893 9.237 L 165.946 26.005 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                  <path onClick={() => setList([...list, "Weapons"])} d=" M 279.922 29.508 L 279.854 64.638 L 288.82 73.289 L 317.964 72.921 L 318.3 47.383 L 300.061 29.488 L 279.922 29.508 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                  <path onClick={() => setList([...list, "Upper Engine"])} d=" M 52.328 44.737 L 52.194 78.821 L 52.411 79.392 L 91.277 79.347 L 91.277 35.903 L 62.422 35.787 L 52.328 44.737 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                  <path onClick={() => setList([...list, "MedBay"])} d=" M 123.917 69.218 L 123.802 107.197 L 130.443 115.754 L 174.114 115.813 L 174.234 105.422 L 159.37 90.921 L 159.201 69.256 L 123.917 69.218 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                  <path onClick={() => setList([...list, "Reactor"])} d=" M 32.752 75.671 L 18.307 84.82 L 19.328 135.037 L 32.752 143.259 L 40.569 143.163 L 41.043 129.238 L 54.136 128.869 L 53.957 89.886 L 41.066 89.577 L 40.606 75.764 L 32.752 75.671 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                  <path onClick={() => setList([...list, "O2"])} d=" M 272.597 80.81 L 254.474 97.356 L 254.883 109.439 L 270.174 109.437 L 284.975 109.347 L 284.693 80.924 L 272.597 80.81 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                  <path onClick={() => setList([...list, "Security"])} d=" M 103.52 84.187 L 94.992 91.458 L 95.108 128.537 L 116.368 128.321 L 116.601 90.21 L 111.023 84.234 L 103.52 84.187 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                  <path onClick={() => setList([...list, "Navigation"])} d=" M 352.842 84.299 L 352.964 122.779 L 367.961 122.922 L 381.785 111.663 L 381.799 96.05 L 368.519 84.493 L 352.842 84.299 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                  <path onClick={() => setList([...list, "Admin"])} d=" M 236.241 116.939 Q 236.429 154.331 236.456 154.362 Q 236.483 154.393 270.879 154.447 L 278.109 147.181 Q 278.133 117.254 278.027 117.089 Q 277.827 116.778 236.241 116.939 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                  <path onClick={() => setList([...list, "Electrical"])} d=" M 131.504 126.324 L 131.429 172.386 L 154.846 172.511 L 163.421 164.299 L 163.421 146.659 L 174.234 136.314 L 174.114 126.168 L 131.504 126.324 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                  <path onClick={() => setList([...list, "Storage"])} d=" M 188.419 138.323 L 175.61 150.703 L 175.464 198.069 L 193.37 215.982 L 226.449 215.877 L 226.547 138.444 L 188.419 138.323 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                  <path onClick={() => setList([...list, "Lower Engine"])} d=" M 52.167 142.055 L 51.773 177.346 L 62.288 185.447 L 91.135 185.706 L 91.299 185.2 L 91.177 142.164 L 52.167 142.055 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                  <path onClick={() => setList([...list, "Shields"])} d=" M 288.313 149.803 L 280.112 158.391 L 279.922 193.779 L 299.843 193.754 L 318.309 175.626 L 317.895 149.946 L 288.313 149.803 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                  <path onClick={() => setList([...list, "Communications"])} d=" M 232.189 184.018 L 232.04 207.475 L 240.619 215.644 L 266.031 215.176 L 274.395 207.485 L 274.168 184.017 L 232.189 184.018 Z " fillRule="evenodd" fill="transparent" stroke="rgb(23,55,236)" />
                </g>
              </g>
            </svg> : (map === "polus" ? <svg ref={ref} xmlns="http://www.w3.org/2000/svg" style={{ isolation: "isolate", position: "absolute", left: 0, top: 0, bottom: 0, right: 0, opacity: 0 }} viewBox="0 0 400 224.89" width="100%">
              <defs>
                <clipPath id="_clipPath_1REak42DzZxd2ypKjS0hpszuv1YvrkCk"><rect width="400" height="224.89" /></clipPath>
              </defs>
              <g clipPath="url(#_clipPath_1REak42DzZxd2ypKjS0hpszuv1YvrkCk)">
                <circle onClick={() => setList([...list, "Seismic Stabilizer East"])} vectorEffect="non-scaling-stroke" cx="226.35937499999997" cy="42.515625" r="6.046875" fill="transparent" stroke="rgb(35,60,201)" />
                <circle onClick={() => setList([...list, "Seismic Stabilizer West"])} vectorEffect="non-scaling-stroke" cx="77.07812499999997" cy="49.73437499999999" r="6.046875" fill="transparent" stroke="rgb(35,60,201)" />
                <g>
                  <path onClick={() => setList([...list, "Laboratory"])} d=" M 290.439 63.39 L 290.439 66.22 L 261.305 66.254 L 261.187 83.69 L 354.126 83.69 L 354.556 66.145 L 323.397 66.029 L 323.273 58.943 L 313.624 58.943 L 313.498 64.679 L 307.628 58.943 L 294.826 58.945 L 290.439 63.39 Z " fillRule="evenodd" fill="transparent" stroke="rgb(35,60,201)" />
                  <path onClick={() => setList([...list, "Bathroom"])} d=" M 290.742 85.148 L 290.429 103.037 L 311.361 103.037 L 311.361 85.264 L 290.742 85.148 Z " fillRule="evenodd" fill="transparent" stroke="rgb(35,60,201)" />
                  <path onClick={() => setList([...list, "Decontamination South"])} d=" M 216.181 195.19 L 215.887 213.875 L 235.5 213.875 L 235.5 195.311 L 216.181 195.19 Z " fillRule="evenodd" fill="transparent" stroke="rgb(35,60,201)" />
                  <path onClick={() => setList([...list, "Decontamination North East"])} d=" M 331.564 85.055 L 331.21 102.943 L 354.844 102.943 L 354.844 85.17 L 331.564 85.055 Z " fillRule="evenodd" fill="transparent" stroke="rgb(35,60,201)" />
                  <path onClick={() => setList([...list, "Storage"])} d=" M 174.409 96.436 L 174.128 106.862 L 184.22 107.16 L 184.589 116.873 L 215.186 116.873 L 215.25 96.5 L 174.409 96.436 Z " fillRule="evenodd" fill="transparent" stroke="rgb(35,60,201)" />
                  <path onClick={() => setList([...list, "Security"])} d=" M 55.75 98.313 L 55.875 116.625 L 76.946 116.535 L 76.938 98.375 L 55.75 98.313 Z " fillRule="evenodd" fill="transparent" stroke="rgb(35,60,201)" />
                  <path onClick={() => setList([...list, "Electrical"])} d=" M 93.25 97.875 L 93 123.5 L 128.25 123.375 L 128.125 98.25 L 93.25 97.875 Z " fillRule="evenodd" fill="transparent" stroke="rgb(35,60,201)" />
                  <path onClick={() => setList([...list, "O2"])} d=" M 45.669 155.231 L 74.691 155.231 L 74.712 136.022 L 67.078 128.719 L 45.669 128.684 L 45.669 155.231 Z " fillRule="evenodd" fill="transparent" stroke="rgb(35,60,201)" />
                  <path onClick={() => setList([...list, "Office"])} d=" M 163.406 137.719 L 162.844 155.531 L 220.135 154.893 L 220.253 137.458 L 163.406 137.719 Z " fillRule="evenodd" fill="transparent" stroke="rgb(35,60,201)" />
                  <path onClick={() => setList([...list, "Vitals"])} d=" M 221.578 155.414 L 260.067 155.006 L 260.062 137.156 L 221.592 137.458 L 221.578 155.414 Z " fillRule="evenodd" fill="transparent" stroke="rgb(35,60,201)" />
                  <path onClick={() => setList([...list, "Communications"])} d=" M 120.727 132.82 L 120.697 167.492 L 130.934 167.612 L 131.204 153.701 L 143.082 153.206 L 143.297 133.102 L 120.727 132.82 Z " fillRule="evenodd" fill="transparent" stroke="rgb(35,60,201)" />
                  <path onClick={() => setList([...list, "Oxygen Storage"])} d=" M 45.656 176.031 L 53.768 176.153 L 53.768 172.778 L 61.192 172.778 L 61.192 156.805 L 45.669 156.805 L 45.656 176.031 Z " fillRule="evenodd" fill="transparent" stroke="rgb(35,60,201)" />
                  <path onClick={() => setList([...list, "Specimen Room"])} d=" M 298.125 166.5 L 298.313 179.078 L 308.359 189.663 L 332.057 189.539 L 340.822 180.765 L 340.864 164.12 L 331.524 157.03 L 307.64 157.03 L 298.125 166.5 Z " fillRule="evenodd" fill="transparent" stroke="rgb(35,60,201)" />
                  <path onClick={() => setList([...list, "Admin"])} d=" M 192.023 170.332 L 192.482 207.561 L 200.327 207.771 L 200.787 213.499 L 214.848 213.498 L 215.081 194.361 L 235.409 193.57 L 235.404 171.26 L 192.023 170.332 Z " fillRule="evenodd" fill="transparent" stroke="rgb(35,60,201)" />
                  <path onClick={() => setList([...list, "Weapons"])} d=" M 138.229 184.573 L 118.022 185.283 L 118.163 210.124 L 142.084 210.124 L 151.406 200.787 L 151.453 184.734 L 148.547 184.875 L 148.345 173.584 L 138.583 173.228 L 138.229 184.573 Z " fillRule="evenodd" fill="transparent" stroke="rgb(35,60,201)" />
                  <path onClick={() => setList([...list, "Pump Room"])} d=" M 45.824 190.471 L 45.669 208.549 L 76.49 208.549 L 76.563 190 L 45.824 190.471 Z " fillRule="evenodd" fill="transparent" stroke="rgb(35,60,201)" />
                  <path onClick={() => setList([...list, "Dropship"])} d=" M 163.105 13.045 C 162.409 13.272 152.612 17.117 151.8 17.398 Q 151.43 17.525 151.406 46.392 L 152.531 47.729 L 152.859 81.844 L 186.676 82.115 L 186.727 47.981 L 188.076 46.282 Q 188.015 17.781 187.795 17.615 C 187.641 17.497 176.188 13.537 176.188 12.875 C 176.188 12.5 164.213 12.684 163.105 13.045 Z " fillRule="evenodd" fill="transparent" stroke="rgb(35,60,201)" />
                </g>
              </g>
            </svg> : <svg ref={ref} xmlns="http://www.w3.org/2000/svg" style={{ isolation: "isolate", position: "absolute", left: 0, top: 0, bottom: 0, right: 0, opacity: 0 }} viewBox="0 0 400 224.89" width="100%">
              <defs>
                <clipPath id="_clipPath_8IoIiwFCNLd1RwuQoFajOTEAs1yG7bdu">
                  <rect width="400" height="224.89" />
                </clipPath>
              </defs>
              <g clipPath="url(#_clipPath_8IoIiwFCNLd1RwuQoFajOTEAs1yG7bdu)">
                <path onClick={() => setList([...list,"Greenhouse"])} d=" M 227.897 30.481 L 227.897 36.67 L 297.188 36.67 L 297.188 30.472 Q 279.375 10.875 262.875 11.25 Q 246.375 11.625 227.897 30.481 Z " fillRule="evenodd" fill="transparent" stroke="rgb(36,60,202)" />
                <path onClick={() => setList([...list,"Office"])} d=" M 227.897 38.02 L 227.897 71.991 L 253.768 71.991 L 253.313 38.039 L 227.897 38.02 Z " fillRule="evenodd" fill="transparent" stroke="rgb(36,60,202)" />
                <path onClick={() => setList([...list,"Admin"])} d=" M 271.541 38.026 L 271.591 71.991 L 297.168 71.861 L 297.138 38.132 L 271.541 38.026 Z " fillRule="evenodd" fill="transparent" stroke="rgb(36,60,202)" />
                <path onClick={() => setList([...list,"Reactor"])} d=" M 139.17 120.626 L 172.385 120.497 L 172.103 73.341 L 139.033 73.341 L 139.17 120.626 Z " fillRule="evenodd" fill="transparent" stroke="rgb(36,60,202)" />
                <path onClick={() => setList([...list,"Decontamination"])} d=" M 173.454 168.891 L 188.789 168.762 L 188.659 121.781 L 173.391 121.781 L 173.454 168.891 Z " fillRule="evenodd" fill="transparent" stroke="rgb(36,60,202)" />
                <path onClick={() => setList([...list,"Laboratory"])} d=" M 189.764 82.902 L 189.764 120.922 L 222.46 121.025 L 222.462 82.79 L 189.764 82.902 Z " fillRule="evenodd" fill="transparent" stroke="rgb(36,60,202)" />
                <path onClick={() => setList([...list,"Communications"])} d=" M 233.769 147.162 L 233.746 172.328 L 257.522 172.328 L 257.906 146.988 L 233.769 147.162 Z " fillRule="evenodd" fill="transparent" stroke="rgb(36,60,202)" />
                <path onClick={() => setList([...list,"Cafeteria"])} d=" M 286.389 147.132 L 286.052 187.739 L 341.05 187.846 L 341.172 187.343 L 341.17 147.244 L 286.389 147.132 Z " fillRule="evenodd" fill="transparent" stroke="rgb(36,60,202)" />
                <path onClick={() => setList([...list,"Locker Room"])} d=" M 196.288 187.964 L 216.198 188.081 L 216.198 147.132 L 197.075 147.132 L 196.288 187.964 Z " fillRule="evenodd" fill="transparent" stroke="rgb(36,60,202)" />
                <path onClick={() => setList([...list,"Storage"])} d=" M 263.89 177.758 L 284.927 178.065 L 285.042 147.132 L 263.892 147.132 L 263.89 177.758 Z " fillRule="evenodd" fill="transparent" stroke="rgb(36,60,202)" />
                <path onClick={() => setList([...list,"Launchpad"])} d=" M 89.938 159.313 L 90.225 188.301 L 123.481 188.301 L 123.194 159.452 L 89.938 159.313 Z " fillRule="evenodd" fill="transparent" stroke="rgb(36,60,202)" />
                <path onClick={() => setList([...list,"MedBay"])} d=" M 233.746 204.274 L 257.539 204.274 L 257.593 173.678 L 233.746 173.678 L 233.746 204.274 Z " fillRule="evenodd" fill="transparent" stroke="rgb(36,60,202)" />
                <path onClick={() => setList([...list,"Balcony"])} d=" M 263.923 194.151 L 263.908 215.298 L 279.64 215.298 L 279.873 207.859 L 341.146 207.068 L 341.146 194.507 L 263.923 194.151 Z " fillRule="evenodd" fill="transparent" stroke="rgb(36,60,202)" />
              </g>
            </svg>)}
          <FAB onClick={() => { setList([]); setRng(Math.floor(Math.random() * 1000)) }} size="medium" style={{ backgroundColor: "red", color: "white", fontSize: 12, position: "absolute", marginTop: -24, marginLeft: -24, bottom: 24, right: 24 }}>
            Reset
          </FAB>
          <div className="line" style={{ position: "absolute", left: 0, top: 0, bottom: 0, right: 0 }}>
            <ReactRough config={{ options: { roughness: 3, seed: rng } }} width={width || 10} height={height || 10}>
              {list.length === 0 && <Circle
                x={0}
                y={0}
                diameter={0}
              />}
              {list.slice(0, -1).map((i, index) => <Line
                render={list.length}
                x1={Number(mapTypes.find(x => x.id === i).position[0].slice(0, -1)) / 100 * width}
                x2={Number(mapTypes.find(x => x.id === list[index + 1]).position[0].slice(0, -1)) / 100 * width}
                y1={Number(mapTypes.find(x => x.id === i).position[1].slice(0, -1)) / 100 * height}
                y2={Number(mapTypes.find(x => x.id === list[index + 1]).position[1].slice(0, -1)) / 100 * height}
                stroke={colors[index % colors.length]}
                strokeWidth={4}
              />)}
              {list.map((i, index) => <Circle
                render={list.length}
                x={Number(mapTypes.find(x => x.id === i).position[0].slice(0, -1)) / 100 * width}
                y={Number(mapTypes.find(x => x.id === i).position[1].slice(0, -1)) / 100 * height}
                diameter={40}
                stroke={colors[index % colors.length]}
                strokeWidth={4}
              />)}
            </ReactRough>
          </div>
        </div> : <div style={{ color: "white" }}>Coming soon</div>}
        </div>
      <List style={{ flexGrow: 1 }} dense={true}>
        {list.map(i => <ListItem>
          <ListItemText style={{ color: "white" }} primary={i} />
        </ListItem>)}
      </List>
      </main>
      <footer style={{padding:8}}>
        <div style={{color:"white",fontSize:"1.8vh"}}>Site created by <a href="https://sohcah.dev/" style={{color:"lightblue"}}>Sam Hindess</a> - {randomMessages[rng%randomMessages.length]}</div>
      </footer>
    </div>
  );
}

export default App;
