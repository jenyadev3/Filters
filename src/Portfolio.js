function Portfolio({projects, selectedFilter}) {
  const filteredImages = selectedFilter === 'All' ? projects : projects.filter(projects => projects.category === selectedFilter);
    return (
          <ul className='portfolio'>
              {filteredImages.map((item, index) => 
              <li className='project' key={index}><img src={item.img}></img></li>
              )}
          </ul>
    )
  }
  
  export default Portfolio;