import {} from "react";
import useNotification from "./hooks/use-notification";
import "./style.css";
function App() {
  const { NotificationComponent, triggerNotification } = useNotification({
    position: "top-right", // Position of the stack
  });
  return (
    <>
      <h1>Notification Queue</h1>
      <button
        onClick={() =>
          triggerNotification({
            type: "success",
            message: "Success Notification",
            duration: 3000,
            animation: "fade",
            onClose: function (): void {
              throw new Error("Function not implemented.");
            },
          })
        }
      >
        Trigger Success
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "error",
            message: "Error Notification",
            duration: 5000,
            animation: "slide",
            onClose: function (): void {
              throw new Error("Function not implemented.");
            },
          })
        }
      >
        Trigger Error
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "info",
            message: "Info Notification",
            duration: 4000,
            animation: "pop",
            onClose: function (): void {
              throw new Error("Function not implemented.");
            },
          })
        }
      >
        Trigger Info
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "warning",
            message: "Warning Notification",
            duration: 4000,
            animation: "pop",
            onClose: function (): void {
              throw new Error("Function not implemented.");
            },
          })
        }
      >
        Trigger Warning
      </button>
      {NotificationComponent}
    </>
  );
}
export default App;
