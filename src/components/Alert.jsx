import { useEffect } from "react";

const Alert = (props) => {
  const { name = "", closeAlert } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 1000 * 3);
    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [name]);
  return (
    <div id="toast-container">
      <div className="toast">{name} добавлен в корзину </div>
    </div>
  );
};

export { Alert };
