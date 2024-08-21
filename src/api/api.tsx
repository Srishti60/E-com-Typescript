import axios from 'axios';



const ProductApi =  async () => {

    try {
        const response = await axios.get("https://66c59aaf134eb8f43494db71.mockapi.io/api/v1/product-name");
    
        
        console.log("API Response:", response);
        const products = response.data.map((product: any) => ({
          ...product,
          price: parseFloat(product.price)
        }));
    
        return products;
    
      }
    catch(error){
       console.error("error",error);
    }
}
export default ProductApi ;

