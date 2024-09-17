interface Props{
    query: string,
    setquery: React.Dispatch<React.SetStateAction<string>>
}

const Search: React.FC<Props> = ({query, setquery}) => {

   
    return ( 
        <div className="max-w-[1400px] mx-auto pt-[20px] ">
            <div className=" border-[3px] border-blue-950 w-[400px]">
                <input className="w-[100%] outline-none font-bold p-3 text-lg" type="text" value={query} onChange={(e)=> setquery(e.target.value)} placeholder="What food would you love to know" />
            </div>
           
        </div>
     );
};
 
export default Search;