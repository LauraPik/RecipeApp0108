

const Search = ({onSearch,...props}) =>{


    return(
    <>
    
    <div className="container">
    <div className="input-group mb-3">
        <input type="text" 
        onChange={onSearch}
        className="form-control" placeholder="Find recipes" aria-label="Recipient's username" aria-describedby="button-addon2"/>
    </div>

    </div>
    </>
         
    )
}

export default Search