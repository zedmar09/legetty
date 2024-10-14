import toast from 'react-hot-toast';

export const showToast = (message: string) => {
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } z-50 max-w-md w-full bg-black px-10 py-4 text-white shadow-lg rounded pointer-events-auto flex align-center justify-between`}>
        <div className=" text-lightest3">{message}</div>
        <button onClick={() => toast.dismiss(t.id)} className="text-sm font-medium uppercase">
          Dismiss
        </button>
      </div>
    ),
    {
      duration: 1500,
    }
  );
};
