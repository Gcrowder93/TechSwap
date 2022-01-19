// import React, { useState } from 'react';

// const Autocomplete = (props) => {
//   const items = props.Products; // This could be a GET request to whatever

//   const [state, setState] = useState({
//     activeItem: 0,
//     filteredItems: [],
//     displayItems: false,
//     inputValue: '',
//   });

//   const handleChange = (e) => {
//     const inputValue = e.currentTarget.value;
//     const filteredItems = items.filter(
//       (optionName) => optionName.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
//     );

//     setState({
//       activeItem: 0,
//       filteredItems,
//       displayItems: true,
//       inputValue: e.currentTarget.value,
//     });
//   };

//   const handleClick = (e) => {
//     setState({
//       activeItem: 0,
//       filteredItems: [],
//       displayItems: false,
//       inputValue: e.currentTarget.innerText,
//     });
//   };

//   const handleKeyDown = (e) => {
//     const { activeItem, filteredItems } = state;

//     if (e.keyCode === 13) {
//       setState({
//         activeItem: 0,
//         filteredItems: [],
//         displayItems: false,
//         inputValue: filteredItems[activeItem],
//       });
//     } else if (e.keyCode === 38) {
//       e.preventDefault();
//       if (activeItem === 0) {
//         return;
//       }
//       setState({
//         activeItem: activeItem - 1,
//         filteredItems,
//         displayItems: true,
//         inputValue: e.currentTarget.value,
//       });
//     } else if (e.keyCode === 40) {
//       e.preventDefault();
//       if ((filteredItems && activeItem === filteredItems.length - 1) || activeItem >= 9) {
//         return;
//       }
//       setState({
//         activeItem: activeItem + 1,
//         filteredItems,
//         displayItems: true,
//         inputValue: e.currentTarget.value,
//       });
//     }
//   };

//   return (
//     <>
//       <div className="searchbarsearch">
//         <span className="searching" />
//         <input
//           name="languages"
//           label="Items"
//           placeholder="Enter a product and press enter"
//           className="productsearch"
//           onChange={handleChange}
//           onKeyDown={handleKeyDown}
//           value={state.inputValue}
//           autoComplete="off"
//           autoCapitalize="off"
//           autoCorrect="off"
//         />

//         {state.displayItems && state.inputValue.length && state.filteredItems ? (
//           <div className="barsearch">
//             <ul className="productlisting">
//               {state.filteredItems
//                 .map((optionName, index) => {
//                   return (
//                     <li
//                       className={`${state.activeItem === index ? 'active-item' : 'default-item'}`}
//                       key={optionName}
//                       onClick={handleClick}
//                     >
//                       {optionName}
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
