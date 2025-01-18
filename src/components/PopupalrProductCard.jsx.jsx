import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full group">
      <img
       src={imgURL} 
       alt="product images"
       className="w-[280px] h-[280px] group-hover:scale-105 transition-transform delay-200" 
       />

       <div className="flex mt-8 justify-start gap-2.5 ">
        <img
         src={star}
         alt="rating" 
         className=""
         width={24}
         height={24}
         />
         <p className="font-montserrat leading-normal text-xl text-slate-gray">(4.5)</p>
       </div>
       <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
       <p className="leading-normal font-montserrat text-xl text-coral-red mt-2 font-semibold">{price}</p>
    </div>
  )
}

export default PopularProductCard