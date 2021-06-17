import api from "../../asset/common/http_base";
import { getItem } from "./AuthServices";
const config = getItem();
const getAllProductByPage = (payload?: { size: number; page: number }) => {
  if (config && config !== "") {
    const pageConfig =
      payload?.size && payload?.page
        ? `?size=${payload.size}&page=${payload.page}`
        : "";
    return api
      .get(
        "/getAll/product" + pageConfig,
        {},
        { headers: { Authorization: "Bearer " + config } }
      )
      .then((res) => res);
  }
  return;
};

const createProduct = (payload: any) => {
  api
    .post("/admin/save/product", payload, {
      headers: { Authorization: "Bearer " + config },
    })
    .then((res) => res);
};

const getAllProductType = () => {
  if (config && config !== "") {
    return api
      .get(
        "/admin/getAll/product-type",
        {},
        { headers: { Authorization: "Bearer " + config } }
      )
      .then((res) => res);
  }
  return;
};

export default { getAllProductByPage, createProduct, getAllProductType };
