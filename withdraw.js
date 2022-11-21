function Withdraw(){
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [atmMode, setAtmMode] = React.useState('');
  const [validTransaction, setValidTransaction] = React.useState(false);
  const ctx = React.useContext(UserContext);

  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  
  const handleChange = (event) => {
    console.log(Number(event.target.value));
    if (Number(event.target.value) <= 0) {
      return setValidTransaction(false);
    }
    if (atmMode === 'Cash Back' && Number(event.target.value) > totalState) {
      setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
    setDeposit(Number(event.target.value));
  };
  const handleSubmit = (event) => {
    let newTotal = totalState - deposit;
    setTotalState(newTotal);
    setValidTransaction(false);
    event.preventDefault();
    ctx.users.push({newTotal});
    setValue([newTotal]);

  };


  return (
        <Card
        bgcolor="warning"
        txtcolor="black"
        header="Withdraw"
        title={status}
        body={(
        <form onSubmit={handleSubmit}>
            Set Withdraw Amount Here:
            <input type="number" className="form-control" id="btn btn-dark" onChange={e => setDeposit(e.currentTarget.value)}></input>
            <input type="submit" id="deposit" onClick={handleSubmit}></input>
           
        </form>
        )}
    />
    )
}
