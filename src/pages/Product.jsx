import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./../components/Modal";
import Button from "../components/Button";
import Input from "../components/Input";
import { modalFunc } from "../redux/modalSlice";
import { createDataFunc, updateDataFunc } from "../redux/dataSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.modal);
  const { data, keyword } = useSelector((state) => state.data);
  const navigate = useNavigate();
  const location = useLocation();
  const [productInfo, setProductInfo] = useState({ name: "", price: "", url: "" });

  const onChangeFunc = (e, type) => {
    if (type == "file") {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: URL.createObjectURL(e.target.files[0]) }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  let loc = location?.search.split("=")[1];

  useEffect(() => {
    if (loc) {
      setProductInfo(data.find((dt) => dt.id == loc));
    }
  }, [loc]);

  const buttonFunc = () => {
    dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }));
    dispatch(modalFunc());
  };

  const buttonUpdateFunc = () => {
    dispatch(updateDataFunc({ ...productInfo, id: loc }));
    dispatch(modalFunc());
    navigate(`/`);
  };

  const contentModal = (
    <>
      <Input
        value={productInfo.name}
        type={"text"}
        placeholder={"Ürün Ekle"}
        name={"name"}
        id={"name"}
        onChange={(e) => onChangeFunc(e, "name")}
      />
      <Input
        value={productInfo.price}
        type={"text"}
        placeholder={"Fiyat Ekle"}
        name={"price"}
        id={"price"}
        onChange={(e) => onChangeFunc(e, "price")}
      />
      <Input
        type={"file"}
        placeholder={"Resim Seç"}
        name={"url"}
        id={"url"}
        onChange={(e) => onChangeFunc(e, "file")}
      />
      <Button btnText={loc ? "Ürün Güncelle" : "Ürün Oluştur"} onClick={loc ? buttonUpdateFunc : buttonFunc} />
    </>
  );

  const filtredItems = data.filter((dt) => dt.name.toLowerCase("tr-TR").includes(keyword));

  return (
    <div>
      <div className="flex items-center flex-wrap">
        {filtredItems?.map((dt, i) => (
          <ProductCard key={i} dt={dt} />
        ))}
      </div>

      {modal && <Modal content={contentModal} title={loc ? "Ürün Güncelle" : "Ürün Oluştur"} />}
    </div>
  );
};

export default Product;
