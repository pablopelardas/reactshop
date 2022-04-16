// @ts-nocheck
import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import { useGetProducts } from '@hooks/useGetProducts.js';
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);
	return (
		<section className='main-container'>
			<div className='ProductList'>
				{/* EL VALOR KEY NOS PERMITE IDENTIFICAR QUE ELEMENTO DEL VIRUTAL DOM SE ESTA CREANDO DE FORMA DINAMICA, ES PARA QUE REACT CONOZCA COMO ESTA REPRESENTADO DENTRO DEL VIRTUAL DOM. */}
				{products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};

export default ProductList;
