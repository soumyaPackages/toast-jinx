// Initialize the type for the Notification Props
export interface NotificationProps {
    type?: "success" | "info" | "warning" | "error";
    message: string;
    onClose: () => void;
    animation?: "fade" | "slide" | "pop";
}

// Defines the allowed positions for the Toast
export type PositionType =
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center";

// Define the properties of a Notification
// Assuming these are in a file like types.ts
export interface NotificationProps {
    id?: string;
    message: string;
    duration: number;
    onClose: () => void; // Make sure this is correctly typed
    type?: "success" | "info" | "warning" | "error";
    animation?: "fade" | "slide" | "pop";
};


// Define the return type of the hook
export interface useNotification {
    NotificationComponent: JSX.Element;
    triggerNotification: (notificationProps: NotificationProps) => void;
}

export interface useNotificationProps {
    position?: string; // Position of the notification stack
    maxQueueLength?: number; // Maximum number of notifications in the queue
};
