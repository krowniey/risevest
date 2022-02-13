

export default function Header() {
  return( 

  <nav className="navbar navbar-expand-lg navbar navbar-expand-lg navbar-light   ">
    <a href="/ricevest" className="navbar-brand">rise<sup>.</sup></a>
    {/* <!-- togglar is used to watch the movement of the nav bar and when it get to 
                         smaller screen t creste an handburger which when it is clicked it will show all the itemes on the narvbar  --> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className=" text-color nav-link active" href='/boarding' > Home</a>
        </li>
        <li className="nav-item">
          <a className="  nav-link" href="/daycare" target="_blank" rel="noopener noreferrer">
            Products</a>
        </li>

        <li className="nav-item">
          <a className=" nav-link" href="/kljbn" target="_blank" rel="noopener noreferrer"> Investement Club</a>
        </li>

        <li className="nav-item">

          <a className=" nav-link" href="/hgch" target="_blank" rel="noopener noreferrer"> Blog</a>
        </li>
        <li className="nav-item">
          <a className=" nav-link" href="/hgch" target="_blank" rel="noopener noreferrer"> About Us</a>
        </li>
        <li className="nav-item">
          <a className=" nav-link" href="/hgch" target="_blank" rel="noopener noreferrer"> FAQs</a>
        </li>

      </ul>
    </div>
  </nav>
  )
}
