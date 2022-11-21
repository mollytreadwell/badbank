function NavBar(){
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ margin: 10 }}>
          <a className="navbar-brand" href="#">
          <img src="/pigbank.jpg" width="30" height="30" className="d-inline-block align-top" alt=""/>
          </a>

            <a className="navbar-brand" href="#">Bad Bank</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse"  id="navbarNav">
                <ul className="navbar-nav">
                <li className="link">
                    <a className="link" href="#/createaccount"> Create Account <span className="sr-only"></span></a>
                </li>
                <li className="link">
                    <a className="link" href="#/login"> Login </a>
                </li>
                <li className="link">
                    <a className="link" href="#/deposit"> Deposit </a>
                </li>
                <li className="link">
                    <a className="link" href="#/withdraw">Withdraw</a>
                </li>
                <li className="link">
                    <a className="link" href="#/alldata">All Data</a>
                </li>
                </ul>
            </div>
        </nav>
        </>
    );
}