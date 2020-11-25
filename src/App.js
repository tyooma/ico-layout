import backgroundFirst from './img/section-bg.png'
import backgroundSecond from './img/section-bg-2.png'

const { Header } = require("./sections/Header")
const { Solutions } = require("./sections/Solutions")
const { Team } = require("./sections/Team")
const { Token } = require("./sections/Token")
const { Platform } = require("./sections/Platform")
const { Roadmap } = require("./sections/Roadmap")
const { Blog } = require("./sections/Blog")

function App() {
  return (
    <div className="app">
      <Header />
      <Team />
      <img
        src={backgroundFirst}
        alt="section background"
        className="app__background_first"
      />
      <Solutions />
      <Token />
      <img
        src={backgroundSecond}
        alt="section background"
        className="app__background_second"
      />
      <Platform />
      <Roadmap />
      <Blog />
    </div>
  )
}

export default App
