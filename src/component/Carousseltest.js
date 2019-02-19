// /**
//  * Created by benjamin on 19/02/2019.
//  */
// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
//
// class Carousseltest extends React.Component {
//     responsive = {
//         0: { items: 1 },
//         600: { items: 2 },
//         1024: { items: 4 },
//     };
//     //
//     // onSlideChange(e) {
//     //     console.log('Item`s position during a change: ', e.item);
//     //     console.log('Slide`s position during a change: ', e.slide);
//     // };
//     //
//     // onSlideChanged(e) {
//     //     console.log('Item`s position after changes: ', e.item);
//     //     console.log('Slide`s position after changes: ', e.slide);
//     // };
//
//     galleryItems() {
//         return (
//             [1, 2, 3, 4, 5].map((item, i) => (
//                 <div key={`key-${i}`} className="yours-custom-class"><h1>{item}</h1></div>
//             ))
//         )
//     };
//
//     render() {
//         const items = this.galleryItems();
//
//         return (
//             <AliceCarousel
//                 items={items}
//                 duration={400}
//                 autoPlay={false}
//                 startIndex = {1}
//                 fadeOutAnimation={true}
//                 mouseDragEnabled={true}
//                 playButtonEnabled={false}
//                 autoPlayInterval={2000}
//                 autoPlayDirection="rtl"
//                 responsive={this.responsive}
//                 disableAutoPlayOnAction={true}
//                 onSlideChange={this.onSlideChange}
//                 onSlideChanged={this.onSlideChanged}
//             />
//         );
//     }
// }
//
//
//
//
//
//
//
// // const Carousseltest = () => {
// //
// //     responsive = {
// //         0: { items: 1 },
// //         600: { items: 2 },
// //         1024: { items: 3 },
// //     };
// //
// //     const handleOnDragStart = e => e.preventDefault()
// //     return (
// //         <AliceCarousel mouseDragEnabled
// //                        className="margin-left50"
// //                        responsive={this.responsive}>
// //             <div onDragStart={handleOnDragStart} className="margin-left50 mainimage cityicon"></div>
// //             <div onDragStart={handleOnDragStart} className="margin-left50 mainimage cityicon"></div>
// //             <div onDragStart={handleOnDragStart} className="margin-left50 mainimage cityicon"></div>
// //             <div onDragStart={handleOnDragStart} className="margin-left50 mainimage cityicon"></div>
// //         </AliceCarousel>
// //     )
// // }
// //
//  export default Carousseltest