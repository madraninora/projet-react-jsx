const image = ({ image, name }) => {
    return (
      <div className="w-full h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    );
  };
  
  export default image;