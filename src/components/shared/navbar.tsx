import Logo from '@/assets/logo.png'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Heart, Menu, ShoppingCart, UserRound } from 'lucide-react'
import { Input } from '../ui/input'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-[1340px] mx-auto my-2'>
            <Link to={'/'} className="w-[90px] h-[50px]">
                <img src={Logo} alt="" />
            </Link>
            <div className="flex items-center gap-8">
                <div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="gap-2 text-[18px] bg-[#FEEE00] font-normal p-4"><Menu className="w-5 h-5" /> Каталог</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[1087px] sm:h-[600px]">
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquam doloribus unde dicta eligendi quo illum porro libero, consequatur sunt quaerat ducimus, odit facilis animi debitis, dolore veniam odio alias! Esse, dolores consequatur quas rerum doloremque nisi, possimus numquam perferendis quisquam nostrum necessitatibus molestias, ab soluta ipsa laborum quod repellat cupiditate reiciendis beatae. Sunt fugit soluta, itaque assumenda quaerat sapiente, provident dolore atque natus minus repellat quod adipisci consequuntur? Doloremque molestias necessitatibus minus at, eveniet reiciendis quos quae culpa officiis alias. Tempore ipsum quia unde voluptas fuga quasi id, officia exercitationem officiis quisquam, eaque repellendus aut soluta nihil, suscipit iusto?</p>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
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