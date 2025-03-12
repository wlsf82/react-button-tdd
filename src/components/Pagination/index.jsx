import './Pagination.css'

import Button from '../Button'

const Pagination = ({ currentPage }) => {
  return (
    <div className='pagination'>
      <Button label='Prev' disabled={currentPage === 1} />
      <span>{`Page ${currentPage} of 2`}</span>
      <Button label='Next' />
    </div>
  )
}

export default Pagination
