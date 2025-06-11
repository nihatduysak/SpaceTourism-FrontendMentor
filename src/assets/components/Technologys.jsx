import Header from "./Header";

export default function Technology() {

  return (
    <>
      {/* Launch Vehicle */}
      <div className="technologyPage">
        <Header />
        <div className="technologyHero">
          <div className="technologyMainTitle">
            <h4>03</h4>
            <h3>SPACE LAUNCH 101</h3>
          </div>
          <div className="technologyDescriptions">
            <div className="technologyDescription">
              <div className="technologyNavBar">
                <button>1</button>
                <button>2</button>
                <button>3</button>
              </div>
              <div className="technologyInfo">
                <div className="technologyTitle">
                  <h4>THE TERMINOLOGY…</h4>
                </div>
                <div className="technologyName">
                  <h4>LAUNCH VEHICLE</h4>
                </div>
                <div className="technologyInfo">
                  <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                </div>
              </div>
            </div>
            <div className="technologyImg">
              <img src="/public/img/launch-vehicle-img.png" alt="Launch Vehicle Image" />
            </div>
          </div>
        </div>
      </div>
      {/* Launch Vehicle End */}
      {/* Space Port */}
      <div className="technologyPage">
        <Header />
        <div className="technologyHero">
          <div className="technologyMainTitle">
            <h4>03</h4>
            <h3>SPACE LAUNCH 101</h3>
          </div>
          <div className="technologyDescriptions">
            <div className="technologyDescription">
              <div className="technologyNavBar">
                <button>1</button>
                <button>2</button>
                <button>3</button>
              </div>
              <div className="technologyInfo">
                <div className="technologyTitle">
                  <h4>THE TERMINOLOGY…</h4>
                </div>
                <div className="technologyName">
                  <h4>SPACEPORT</h4>
                </div>
                <div className="technologyInfo">
                  <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
                </div>
              </div>
            </div>
            <div className="technologyImg">
              <img src="/public/img/spaceport-img.png" alt="Launch Vehicle Image" />
            </div>
          </div>
        </div>
      </div>
      {/* Space Port End */}
      {/* Space Capsule */}
      <div className="technologyPage">
        <Header />
        <div className="technologyHero">
          <div className="technologyMainTitle">
            <h4>03</h4>
            <h3>SPACE LAUNCH 101</h3>
          </div>
          <div className="technologyDescriptions">
            <div className="technologyDescription">
              <div className="technologyNavBar">
                <button>1</button>
                <button>2</button>
                <button>3</button>
              </div>
              <div className="technologyInfo">
                <div className="technologyTitle">
                  <h4>THE TERMINOLOGY…</h4>
                </div>
                <div className="technologyName">
                  <h4>SPACE CAPSULE</h4>
                </div>
                <div className="technologyInfo">
                  <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
                </div>
              </div>
            </div>
            <div className="technologyImg">
              <img src="/public/img/space-capsule-img.png" alt="Launch Vehicle Image" />
            </div>
          </div>
        </div>
      </div>
      {/* Space Capsule End */}
    </>
  )
}