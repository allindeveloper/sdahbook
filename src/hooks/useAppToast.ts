import { Toast, toast } from "@backpackapp-io/react-native-toast";

type ToastDispatchPayload = {
  message: string;
  position?: Toast["position"];
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
