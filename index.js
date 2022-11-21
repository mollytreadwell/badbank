
function Spa(){

    return (
        <HashRouter>
            <NavBar />
           <UserContext.Provider value={{users:[]}}>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/createaccount' component={CreateAccount} />
                <Route path='/deposit' component={Deposit} />
                <Route path='/withdraw' component={Withdraw} />
                <Route path='/alldata' component={AllData} />
            </UserContext.Provider>
        </HashRouter>
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)