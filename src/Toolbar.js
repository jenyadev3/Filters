function Toolbar({filters, onSelectFilter, selectedFilter}) {
    return (
      <div className='toolbar'>
        {filters.map((filter, index) => 
          <button key={index} className={selectedFilter === filter ? 'filter-selected' : 'filter'} onClick={() => onSelectFilter(filter)}>{filter}</button>
       )}
      </div>
    )
  }
  
  export default Toolbar;