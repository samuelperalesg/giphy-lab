function GifDisplay (props) {
  console.log(props.gif)

  
  return(
    <div>
      {
      props.gif ? 
      
      <img src={props.gif.data.images.original.url} alt='' /> : <h1>Loading...</h1>
      }
    </div>
  )

}


export default GifDisplay