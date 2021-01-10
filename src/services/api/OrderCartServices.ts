import api from "../../asset/common/http_base";
import Statuses from "../../asset/common/Statuses";
import { getItem } from "./AuthServices";
const config = getItem();
const getAllCart = () => {
  if (config && config !== "") {
    return api
      .get(
        "/getAll/admin/order/cart",
        {},
        { headers: { Authorization: "Bearer " + config } }
      )
      .then((res) => res);
  }
  return;
};

const updateStatus = (id: number, status: string) => {
  let statusNew;
  if (status.indexOf("unpaid") !== -1) {
    switch (status) {
      case Statuses.ORDERANDUNPAID:
        statusNew = Statuses.PREPARINGANDUNPAID;
        break;
      case Statuses.PREPARINGANDUNPAID:
        statusNew = Statuses.CREATEBillANDUNPAID;
        break;
      case Statuses.CREATEBillANDUNPAID:
        statusNew = Statuses.TRANSPORTANDUNPAID;
        break;
    }
  } else if (status.indexOf("unpaid") === -1) {
    switch (status) {
      case Statuses.ORDER:
        statusNew = Statuses.PREPARING;
        break;
      case Statuses.PREPARINGANDUNPAID:
        statusNew = Statuses.CREATEBill;
        break;
      case Statuses.CREATEBillANDUNPAID:
        statusNew = Statuses.TRANSPORT;
        break;
    }
  } else if (status.indexOf("transport") !== -1) statusNew = Statuses.COMPLETE;
  return api
    .put(
      `/update/order/cart/${id}?status=${statusNew}`,
      {},
      { headers: { Authorization: "Bearer " + config } }
    )
    .then((res) => res);
};

const createBill = (data: any) => {
  api
    .post("/bill/order", data, {
      headers: { Authorization: "Bearer " + config },
    })
    .then((res) => res);
};
export default { getAllCart, updateStatus, createBill };
