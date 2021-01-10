import StatusesVi from "./StatusesVi";

export default {
  ACTIVE: "active",
  STOP: "stop",
  COMPLETE: "complete",
  //   đặt hàng và đã thanh toán
  PREPARINGANDUNPAID: "preparingandunpaid",
  CREATEBillANDUNPAID: "createbillandunpaid",
  TRANSPORTANDUNPAID: "transportandunpaid",
  TRANSPORTINGANDUNPAID: "transportingandunpaid",
  ORDERANDUNPAID: "orderandunpaid",
  //    đặt hàng nhưng chưa thanh toán
  ORDER: "order",
  PREPARING: "preparing",
  CREATEBill: "createbill",
  TRANSPORT: "transport",
  TRANSPORTING: "transporting",
  //    trạng thái kiểm tra
  EXCEPTION: "exception",
  YES: "yes",
  NO: "no",
  EXISTS: "exists",
};
