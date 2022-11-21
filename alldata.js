function AllData(){
    const ctx = React.useContext(UserContext);

    return (
        <Card 
            txtcolor="black"
            header="User Data"
            title="User Data"
            text={JSON.stringify(ctx)}
            body={(
            <>
            <img src="/pigbank.jpg" className="img-fluid" alt="Responsive image" width="250"/><br/>
            </>
            )}
        />
    );
}
