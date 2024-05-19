
import "../Header/Header.css";
import { useDispatch } from "react-redux";
import { searchTodos } from "../../Redux-Toolkit/Slice";
import { useState } from "react";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();


  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    dispatch(searchTodos(query));
  };


  return (
    <div className="Header">
      <p className="Logo">
        Keeps<span>Home</span>
      </p>

      <input
        type="text"
        className="Search"
        placeholder="Search For Title"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Header;
