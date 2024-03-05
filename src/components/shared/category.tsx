import { useGetCategories } from '@/service/query/useGetCategories'
import { Link } from 'react-router-dom'

const Category = () => {
    const { data } = useGetCategories()
    return (
        <div className='w-[1340px] mx-auto flex  gap-8 my-6'>
            {
                data?.map((item: any) => (
                    <Link to={`/category/${item?.datakey}`} className='w-[200px] flex flex-col items-center' key={item?.id}>
                        <img src={item?.img} alt="" />
                        <p>{item?.title}</p>
                    </Link>
                ))
            }
        </div>
    )
}

export default Category