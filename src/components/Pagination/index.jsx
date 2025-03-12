import './Pagination.css'

import Button from '../Button'

const Pagination = ({
  currentPage,
  totalPages,
}) => {
  return (
    <div className='pagination'>
      <Button label='Prev' disabled={currentPage === 1} />
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <Button label='Next' disabled={currentPage === totalPages} />
    </div>
  )
}

export default Pagination
