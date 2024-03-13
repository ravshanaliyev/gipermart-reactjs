import Logo from '@/assets/logo.png'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { Menu, ShoppingCart, UserRound } from 'lucide-react'
import { Input } from '../ui/input'
import { Link } from 'react-router-dom'
import { useGetCategories } from '@/service/query/useGetCategories'
import { useForm } from 'react-hook-form'
import { useRegister } from '@/service/mutation/useRegister'
import { loadState, saveState } from '@/config/local-save'
import { useSelector } from 'react-redux'
import { AiFillHeart } from 'react-icons/ai'
import useSearch from '@/service/query/useSearch'
import useDebounce from '@/config/use-debounce'
import { useState } from 'react'
const Navbar = () => {
    const [searchValue, setSearchValue] = useState("")
    const product = useSelector((state: any) => state.data)
    const likedProducts = useSelector((state: any) => state.like)
    const user = loadState("user")
    const { toast } = useToast()
    const { register, handleSubmit, reset } = useForm()
    const { data } = useGetCategories()
    const mutate = useRegister()
    const title = useDebounce(searchValue)
    const { data: searchData } = useSearch(title)
    console.log(searchData);

    const submit = (data: any) => {
        mutate.mutate(data, {
            onSuccess: () => {
                saveState("user", data)
                toast({
                    title: "Пользователь успешно вошел в систему",
                    description: "Спасибо за регистрацию на нашей платформе",
                })
            },
            onError: (error) => {
                console.log(error);
            }
        })
        reset()
    }
    return (
        <div className='flex justify-between items-center w-[400px] md:w-[768px] lg:w-[1340px]  mx-auto my-2 p-4'>
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
                <div className="w-[670px] hidden lg:block relative z-10">
                    <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Поиск" className='border-[#857372]' />
                    {
                        searchValue.length > 2 ? (
                            <div className="absolute top-8 left-0 flex flex-col  mt-4 z-50 rounded-lg shadow-lg bg-white p-5 w-[670px]">
                                {
                                    searchData?.map((item: any) => (
                                        <Link onClick={() => setSearchValue("")} className=' flex gap-4  items-center my-1' key={item.id} to={`/product/${item.id}`}>
                                            <img className='w-[50px]' src={item.img} alt="" />
                                            <p>{item.title}</p>
                                            <p>{item.price} sym</p>
                                        </Link>
                                    ))
                                }
                            </div>
                        ) : null
                    }
                </div>
            </div>
            <div className="hidden md:flex gap-8 items-center">

                <Sheet>
                    <SheetTrigger asChild>
                        <div className='flex gap-1  flex-col items-center cursor-pointer'>
                            <UserRound className="w-5 h-5" />
                            {
                                user ? <p>{user?.email.split('@')[0]}</p> : <p>Войти</p>
                            }
                        </div>
                    </SheetTrigger>
                    <SheetContent className='pt-10'>
                        <SheetHeader>
                            <SheetTitle>Войти или создать профиль</SheetTitle>
                            <SheetDescription>
                                Внесите изменения в свой профиль здесь. Нажмите Авторизоваться, когда закончите.
                            </SheetDescription>
                        </SheetHeader>
                        <form className="grid gap-4 py-4" onSubmit={handleSubmit(submit)}>
                            <label htmlFor="name">Имя</label>
                            <Input id="name" {...register('email', { required: true })} placeholder='jack smit' className="col-span-3" />
                            <label htmlFor="username">Пароль</label>
                            <Input id="username" {...register('password', { required: true })} placeholder='******' className="col-span-3" />
                            <SheetClose>
                                <Button className="col-span-3" type="submit">Авторизоваться</Button>
                            </SheetClose>
                        </form>
                    </SheetContent>
                </Sheet>
                <Link to={"/liked"} className='flex  flex-col items-center gap-1'>
                    <div className="relative">
                        <div className='flex  flex-col items-center gap-1'>
                            <AiFillHeart className="text-[22px] text-red-500" />
                            <p className='hidden md:block '>Избранное</p>
                        </div>
                        <div className="absolute top-[-5px] right-[15px] w-[18px] h-[18px] rounded-full bg-[#FEEE00] text-[14px] flex justify-center items-center">
                            {likedProducts?.data.length}
                        </div>
                    </div>

                </Link>
                <Link to={"/cart"} className='flex  flex-col items-center gap-1'>
                    <div className="relative">
                        <div className='flex  flex-col items-center gap-1'>
                            <ShoppingCart className="w-5 h-5" />
                            <p>Корзина</p>
                        </div>
                        <div className="absolute top-[-5px] right-[5px] w-[18px] h-[18px] rounded-full bg-[#FEEE00] text-[14px] flex justify-center items-center">
                            {product?.data.length}
                        </div>
                    </div>

                </Link>
            </div>
        </div>
    )
}

export default Navbar