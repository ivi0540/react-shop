import React from "react";
import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

const Alert = () => {
  const { alertName = "", closeAlert } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 1000 * 3);
    return () => {
      clearTimeout(timerId);
    };
  }, [alertName]);
  return (
    <div id="toast-container">
      <div className="toast">{alertName} добавлен в корзину </div>
    </div>
  );
};

export { Alert };
