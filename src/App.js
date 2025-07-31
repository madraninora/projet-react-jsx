import product from './Components/Product';
import Name from './Components/Name';
import Price from './Components/Price';
import Description from './Components/Description';
import Image from './Components/image';


const App = () => {
  const firstName = "Norah";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-pink-100 p-6">
      <div className="max-w-md mx-auto">
        {/* Product Card */}
        <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
          {/* afficher l'image uniquement si le nom du produit est présent*/}
          {product.name && (
            <Image image={product.image} name={product.name} />
          )}
          
          <div className="p-6">
            <Name name={product.name} />
            <Price price={product.price} />
            <Description description={product.description} />
          </div>
        </div>

        {/* Message */}
        <div className="mt-6 text-center">
          <p className="text-lg text-foreground">
            Hello, {firstName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
