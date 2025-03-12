import Button from '../Button'

const Pagination = ({ currentPage }) => {
  return (
    <>
      <Button label='Prev' disabled={currentPage === 1} />
      <span>{`Page ${currentPage} of 2`}</span>
      <Button label='Next' />
    </>
  )
}

export default Pagination
