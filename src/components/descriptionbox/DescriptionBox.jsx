import React,{useState} from 'react'
import styles from './DescriptionBox.module.css';


function DescriptionBox({productDetails}) {
    const [selectInfo,setSelectInfo] = useState("description");
  return (
    <div className={styles.descriptionbox}>
       <div className={styles.descriptionbox_navigator}>
        <div onClick={()=>setSelectInfo("description")}
        style={ selectInfo === "description" ? {background:"#ff4141" , color:"white"}  : {} }
        className={styles.descriptionbox_nav_box}>Description</div>
        <div
         style={ selectInfo === "review" ? {background:"#ff4141" , color:"white"}  : {}}
        onClick={()=>setSelectInfo("review")} 
        className={styles.descriptionbox_nav_box_fade}
        >Reviews ({productDetails.reviews.length})</div>
      </div>
      <div className={styles.descriptionbox_description}>
        {
            selectInfo === "description" ? (
                <>
                <p>
              {productDetails.description}
            </p>
            <p>
                <p><span> Stock:</span> {productDetails.stock}</p>
                <p><span> Shipping:</span> {productDetails.shippingInformation}</p>
                <p><span> Return:</span> {productDetails.returnPolicy}</p>
                <p><span>Warrenty: </span>{productDetails.warrantyInformation}</p>
            </p>
                </>
            ) : (
              <>
              {
                productDetails.reviews.map((review,index)=>(
                  <p key={index}>
                   <p><span>Name :</span> {review.reviewerName}</p>
                   <p><span>Comment :</span> {review.comment}</p>
                   <p><span>Rating (0-5) :</span> {review.rating}</p>
                   <p><span>Date :</span> {new Date(review.date).toLocaleDateString()}</p>
                   <p><span>Email :</span> {review.reviewerEmail}</p>

                  </p>
                 

                ))
              }
              
              </>
            )
        }
            
    </div>
    </div>
  )
}

export default DescriptionBox
