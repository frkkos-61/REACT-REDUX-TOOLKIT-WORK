import React from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalFunc } from "../redux/modalSlice";
import { searchDataFunc, sortingDataFunc } from "../redux/dataSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-green-900 text-white px-3  py-4 font-bold">
      <div className="text-2xl">REACT UYGULAMA</div>
      <div className="flex items-center gap-5">
        <div>
          <select
            onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
            className="h-10 rounded-lg bg-white text-black"
            name=""
            id=""
          >
            <option value="asc">ARTAN</option>
            <option value="desc">AZALAN</option>
          </select>
        </div>
        <div>
          <input
            onChange={(e) => dispatch(searchDataFunc(e.target.value))}
            type="text"
            placeholder="Arama Yapiniz..."
            className="bg-white text-black rounded-xl placeholder-gray-500 px-3"
          />
        </div>
        <div
          onClick={() => dispatch(modalFunc())}
          className="bg-gray-500 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        >
          <MdPostAdd size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
