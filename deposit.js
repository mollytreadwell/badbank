function Deposit(){
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [atmMode, setAtmMode] = React.useState('');
  const [validTransaction, setValidTransaction] = React.useState(false);
  const ctx = React.useContext(UserContext);

  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);

  const handleSubmit = (event) => {
    let newTotal = +totalState + +deposit ;
    setTotalState(newTotal);
    setValidTransaction(false);
    event.preventDefault();
    ctx.users.push({newTotal});
    setShow(false);
    setValue([{newTotal}])

  };


  return (
        <Card
        bgcolor="danger"
        txtcolor="black"
        header="Deposit"
        title={status}
        body={(
        <form onSubmit={handleSubmit}>
            Deposit Here:
            <input type="number" className="form-control" id="btn btn-dark" onChange={e => setDeposit(e.currentTarget.value)}></input>
            <input type="submit" id="deposit" onClick={handleSubmit}></input>
           
        </form>
        )}
    />
    )
}

