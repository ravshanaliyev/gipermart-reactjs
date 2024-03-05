import Logo from '@/assets/logo.png'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Heart, Menu, ShoppingCart, UserRound } from 'lucide-react'
import { Input } from '../ui/input'
import { Link } from 'react-router-dom'
import { useGetCategories } from '@/service/query/useGetCategories'
const Navbar = () => {
    const { data } = useGetCategories()
    return (
        <div className='flex justify-between items-center w-[1340px] mx-auto my-2'>
            <Link to={'/'} className="w-[90px] h-[50px]">
                <img src={Logo} alt="" />
            </Link>
            <div className="flex items-center gap-8">
                <div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="gap-2 text-[18px] bg-[#FEEE00] font-normal p-4 hover:bg-[#fff45a]"><Menu className="w-5 h-5" /> Каталог</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[1000px] p-10  flex flex-wrap items-center justify-between gap-y-[50px]">
                            {
                                data?.map((item: any) => (
                                    <Link to={`/category/${item?.datakey}`} className='w-[200px] flex flex-col items-center mx-auto' key={item?.id}>
                                        <img src={item?.img} alt="" />
                                        <p>{item?.title}</p>
                                    </Link>
                                ))
                            }
                        </DialogContent>
                    </Dialog>

                </div>
                <div className="w-[670px]">
                    <Input placeholder="Поиск" className='border-[#857372]' />
                </div>
            </div>
            <div className="flex gap-8 items-center">
                <Link to="/login" className='flex gap-1  flex-col items-center'>
                    <UserRound className="w-5 h-5" />
                    <p>Войти</p>
                </Link>
                <Link to="/liked" className='flex  flex-col items-center gap-1'>
                    <Heart className="w-5 h-5" />
                    <p>Избранное</p>
                </Link>
                <Link to={"/cart"} className='flex  flex-col items-center gap-1'>
                    <ShoppingCart className="w-5 h-5" />
                    <p>Корзина</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar