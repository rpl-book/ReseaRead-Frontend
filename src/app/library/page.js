
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { MdOutlineSort } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import ReadingListMenu from '../../components/ReadingListMenu'; 
import LibraryTable from '../../components/LibraryTable'; 
import "./library.css";

const library = () => {
  return (
    <div className="container mx-auto max-w-screen-lg  mt-20">
     
      <div class="flex flex-row gap-10">
        <div class="basis-3/4 header-lib">
          <h3>LIBRARY</h3>
        </div>
        <div class="basis-1/4 library-tools">
          <a href="#"><CiSearch /></a>
          <a href="#"><CiFilter /></a>
          <a href="#"><MdOutlineSort /></a>
          <a href="#"><CiCirclePlus /></a> 
        </div>
      </div>
      
      <div class="flex">
      <div class="mt-10">
          <ReadingListMenu/>
      </div>

      <div class="mt-10 ml-10">        
        <LibraryTable/>     
      </div>
</div>



    </div>


  )
};

export default library;
