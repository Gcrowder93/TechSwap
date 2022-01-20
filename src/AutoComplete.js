// import React, { useState } from 'react';

// const Autocomplete = (props) => {
//   const products = props.Title; // This could be a GET request to whatever

//   const [state, setState] = useState({
//     activeProduct: 0,
//     filteredProducts: [],
//     displayProducts: false,
//     inputValue: '',
//   });

//   const handleChange = (e) => {
//     const inputValue = e.currentTarget.value;
//     const filteredProducts = products.filter(
//       (productTitle) => productTitle.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
//     );

//     setState({
//       activeProduct: 0,
//       filteredProducts,
//       displayProducts: true,
//       inputValue: e.currentTarget.value,
//     });
//   };

//   const handleClick = (e) => {
//     setState({
//       activeProduct: 0,
//       filteredProducts: [],
//       displayProducts: false,
//       inputValue: e.currentTarget.innerText,
//     });
//   };

//   const handleKeyDown = (e) => {
//     const { activeProduct, filteredProducts } = state;

//     if (e.keyCode === 13) {
//       setState({
//         activeProduct: 0,
//         filteredProducts: [],
//         displayProducts: false,
//         inputValue: filteredProducts[activeProduct],
//       });
//     } else if (e.keyCode === 38) {
//       e.preventDefault();
//       if (activeProduct === 0) {
//         return;
//       }
//       setState({
//         activeProduct: activeProduct - 1,
//         filteredProducts,
//         displayProducts: true,
//         inputValue: e.currentTarget.value,
//       });
//     } else if (e.keyCode === 40) {
//       e.preventDefault();
//       if (
//         (filteredProducts && activeProduct === filteredProducts.length - 1) ||
//         activeProduct >= 9
//       ) {
//         return;
//       }
//       setState({
//         activeProduct: activeProduct + 1,
//         filteredProducts,
//         displayProducts: true,
//         inputValue: e.currentTarget.value,
//       });
//     }
//   };

//   return (
//     <>
//       <div className="searchbarsearch">
//         <span className="searching" />
//         <input
//           label="Products"
//           placeholder="Search For Items"
//           className="productsearch"
//           onChange={handleChange}
//           onKeyDown={handleKeyDown}
//           value={state.inputValue}
//           autoComplete="off"
//           autoCapitalize="off"
//           autoCorrect="off"
//         />

//         {state.displayProducts && state.inputValue.length && state.filteredProducts ? (
//           <div className="barsearch">
//             <ul className="productlisting">
//               {state.filteredProducts
//                 .map((productTitle, index) => {
//                   return (
//                     <li
//                       className={`${
//                         state.activeProduct === index ? 'active-product' : 'default-product'
//                       }`}
//                       key={productTitle}
//                       onClick={handleClick}
//                     >
//                       {productTitle}
//                     </li>
//                   );
//                 })
//                 .slice(0, 10)}
//             </ul>
//           </div>
//         ) : null}
//       </div>
//     </>
//   );
// };

// export default Autocomplete;
