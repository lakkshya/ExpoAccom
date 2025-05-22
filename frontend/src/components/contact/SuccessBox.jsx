const SuccessBox = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-9/10 sm:w-5/10 lg:w-4/10 bg-white !p-6 text-center rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-600 !mb-4">Success!</h2>
        <p className="text-gray-700">{message}</p>
        <button
          onClick={onClose}
          className="!mt-6 !px-4 !py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessBox;
