const PaginationButtons = ({ currentPage, totalPages, onPageChange }) => {

  console.log('🚀 ~ PaginationButtons ~ totalPages:', totalPages)

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className='d-flex justify-content-center gap-2 mt-5'> 
      <button
      className='btn btn-primary'
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {/* Render page number buttons */}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
          className='btn btn-primary'
            key={page}
            onClick={() => handlePageClick(page)}
            disabled={currentPage === page}
          >
            {page}
          </button>
        )
      )}
      <button className='btn btn-primary' onClick={() => handlePageClick(currentPage + 1)}>Next</button>
    </div>
  );
};

export default PaginationButtons