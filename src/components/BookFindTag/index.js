import Image from "next/image"

const BookTagFind = () => {
    const tags=["Bookclub","Slice of Life","Series","Humor","Developement","Romance","Litrature","Action","Biography","Fiction"]
    return (
        <div className="w-full">
            <form className="search-bar w-full m-0">
                <input type="text" placeholder="Search for tags... " />
                <button type="submit">
                    <Image src="/icon-search.png" alt="icon-search" width={20} height={20} />
                </button>
            </form>
            <div className="grid grid-cols-2 gap-2 text-customColorOrange text-base">
                {tags.map((dt,index)=>(
                    <div key={dt+index} className="m-2">
                        {dt}
                    </div>
                ))}
            </div>
        </div>
    )
} 

export default BookTagFind