import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { read , listRelated} from './apiCore';
import Card from './Card';

const Product = (props) => {


    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);


    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                // fetch related products
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error);
                    } else {
                        setRelatedProduct(data);
                    }
                });
            }
        });
    };


    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, [props]);

   return (
    <Layout title={product && product.name} description={product && product.description && product.description.substring(0,100)} className="container-fluid">

       <div className="row">
          <div className="">

          {
               product &&
               product.description && 
               <Card product={product}
               showViewProductButton={false}
               />
           }

          </div>
          <div className="vertical-center more-top">
            <h2>Related product</h2>
            <hr/>
            {relatedProduct.map((p,i)=>(
                <div className="mb-3">
                <Card key={i} product={p} />    
                 </div>            
            ))}
          </div>
       </div>
   </Layout>
   );
};

export default Product;