const NotFound = () => {
  return (
    <div className="mt-16 md:mt-24 mb-6 flex flex-col items-center">
      <div className="flex justify-center">
        <img
          className="h-[300px] md:h-[600px]"
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000"
          alt="404 Not Found"
        />
      </div>
      <p className="text-center my-2 font-semibold uppercase text-blue-600">
        The page you are looking for does not exist
      </p>
    </div>
  );
};

export default NotFound;
