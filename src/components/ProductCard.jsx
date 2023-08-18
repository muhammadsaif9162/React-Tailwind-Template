const ProductCard = ({ imgURL, changeBigProductImage, bigProductImg }) => {
    const handleClick = () => {
        console.log(imgURL);
        if(bigProductImg !== imgURL.bigProduct){
            changeBigProductImage(imgURL.bigProduct)
        }
    }
    return (
        <div className={`border-2 rounded-xl ${bigProductImg === imgURL.bigProduct ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1 `} onClick={handleClick}>
            <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4s '>
                <img 
                    src={imgURL.thumbnail}
                    alt='product collection'
                    width={127}
                    height={103}
                    className='object-contain'
                />
            </div>
        </div>
    )
}

export default ProductCard
