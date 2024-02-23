import React from 'react'
import ProductOverview from '../../Components/ProductView/ProductOverview'
import SimilarProducts from '../../Components/ProductView/SimilarProducts'
import Navbar from '../../Components/Layout/Navbar'
function ProductOview() {
  return (
    <>
      <Navbar/>
      <ProductOverview/>
      <SimilarProducts/>
    </>
  )
}

export default ProductOview