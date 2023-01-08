function Home(){

    return (
        <Card 
            txtcolor="black"
            header="Bad Bank Home Page"
            title="Welcome to the Bank"
            text="Baddest Bank Around"
            body={(
            <>
            <img src="/pigbank.jpg" className="img-fluid" alt="Responsive image" width="350"/><br/>
            <Link to="./createaccount"><button type="submit" className="btn btn-dark">Create Account</button></Link>
            <Link to="./login"><button type="submit" className="btn btn-dark">Login</button></Link>
            </>
            )}
        />
    )
}
