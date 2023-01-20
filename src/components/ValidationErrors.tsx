const ValidationErrors = ({errors}:any):JSX.Element => {

 console.log(errors)
 return (<div>
    <h1>There is a problem</h1>
    <h3>Please fix the errors listed below</h3>
    <hr />
      {Object.values(errors).map((value:any, index) => {
        return (
          <div key={index}>
            <h4>{value.message}</h4>
            <a href={`#${value.ref.id}`} >Click to correct this issue</a>
            <hr />
          </div>
        );
      })}
 </div>)
}

export default ValidationErrors