import { useGetCategories } from '@/service/query/useGetCategories'
import { Link } from 'react-router-dom'

const Category = () => {
    const { data } = useGetCategories()
    const resmode = true
    return (
        <div className='w-full lg:w-[1340px] mx-auto flex flex-wrap text-center lg:flex-nowrap   gap-2 mx-4 lg:gap-8  lg:my-6 my-2'>
            {
                data?.map((item: any) => (
                    <Link to={`/category/${item?.datakey}`} className='w-[80px] lg:w-[200px] flex flex-col items-center' key={item?.id}>
                        <img className='w-[80px] h-[80px] lg:w-[128px] lg:h-[128px]' src={item?.img} alt="" />
                        <p>{!resmode ? item?.title : item?.title.slice(0, 7) + "..."}</p>
                    </Link>
                ))
            }
        </div>
    )
}

export default Category