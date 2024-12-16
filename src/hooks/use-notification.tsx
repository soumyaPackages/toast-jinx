import { useCallback, useState } from "react";
import { useNotificationProps, NotificationProps } from "../types";
import type { useNotification } from "../types";
import Notification from "../components/Notification";

import { v4 as uuidv4 } from "uuid";

const useNotification = ({
  position = "bottom-right",
  maxQueueLength = 5,
}: useNotificationProps): useNotification => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const removeNotification = useCallback((id: string) => {
    setNotifications((current) =>
      current.filter((notification) => notification.id !== id)
    );
  }, []);

  const triggerNotification = useCallback(
    (
      notificationProps: Omit<NotificationProps, "id" | "onClose"> & {
        type?: NotificationProps["type"];
      }
    ) => {
      const id = uuidv4(); // Generates a string, satisfying the { id: string } requirement
      const onClose = () => removeNotification(id);

      // Set timeout to automatically remove the notification
      setTimeout(onClose, notificationProps.duration || 5000);

      const newNotification: NotificationProps = {
        id,
        type: notificationProps.type || "info",
        ...notificationProps,
        onClose,
      };

      setNotifications((prevNotifications) => [
        ...prevNotifications.slice(
          Math.max(prevNotifications.length - maxQueueLength + 1, 0)
        ),
        newNotification,
      ]);
    },
    [maxQueueLength, removeNotification]
  );

  const NotificationComponent = (
    <div className={`notification-container ${position}`}>
      {notifications.map((notification) => (
        <Notification key={notification.id} {...notification} />
      ))}
    </div>
  );

  return { NotificationComponent, triggerNotification };
};

export default useNotification;
