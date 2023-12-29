import { ToastPosition, toast } from "@backpackapp-io/react-native-toast";

type ToastDispatchPayload = {
  message: string;
  position?: ToastPosition;
};
const useToast = () => {
  const dispatchToast = ({ message, position }: ToastDispatchPayload) => {
    toast(message, {
      position,
    });
  };

  return {
    dispatchToast,
  };
};

export default useToast;
