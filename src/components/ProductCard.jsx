import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateFunc = () => {
    dispatch(modalFunc());
    setOpenEdit(false);
    navigate(`/?update=${dt?.id}`);
  };

  return (
    <div className="w-[300px] h-[300px] relative m-2 rounded-md border border-amber-600">
      <img className="w-full h-full object-cover" src={dt?.url} alt="" />
      <div className="absolute left-0 bottom-0 bg-green-900 text-white w-full px-2">
        <div className="text-lg font-bold">{dt?.name} </div>
        <div className="text-lg">{dt?.price} £ </div>
      </div>
      <div onClick={() => setOpenEdit(!openEdit)} className="absolute top-0 right-2">
        <BsThreeDots className="cursor-pointer" size={24} />
      </div>
      {openEdit && (
        <div className="bg-green-700 border-white rounded-md text-white absolute top-5 right-2 p-2 text-sm">
          <div onClick={() => dispatch(deleteDataFunc(dt?.id))} className="font-bold cursor-pointer">
            Sil
          </div>
          <div onClick={updateFunc} className="font-bold cursor-pointer">
            Güncelle
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
