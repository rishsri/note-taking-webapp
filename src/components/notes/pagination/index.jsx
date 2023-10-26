const Pagination = ({ currentPage, setCurrentPage, noOfPAgesss,firstIndex }) => {

  const handleClick = (id) => {
    setCurrentPage(id);
  };

  const handlePrev = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  

  return (
    <div className="flex justify-center my-8">
      <button
        className="mx-1 px-3 py-2 bg-gray-300 hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentPage === firstIndex +1}
        onClick={handlePrev}
      >
        Prev
      </button>

      {noOfPAgesss.map((page) => (
        <button
        
          className={`mx-1 px-3 py-2 ${
            page === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="mx-1 px-3 py-2 bg-gray-300 hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentPage === noOfPAgesss.length}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
