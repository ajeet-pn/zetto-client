import { Link } from "react-router-dom"

const MobileFooter = () => {
    return (
        <div><div className='block lg:hidden'>
                    <div className='flex justify-center flex-col items-center my-5'>
                        <div className='text-[16px] uppercase font-semibold'>follow us on</div>
                        <div className='flex gap-2 mt-2'>
                            <Link><img className='!w-[26px] !h-[26px]' src="/images/zetto/fb.png" alt="" /></Link>
                            <Link><img className='!w-[26px] !h-[26px]' src="/images/zetto/insta.png" alt="" /></Link>
                            <Link><img className='!w-[26px] !h-[26px]' src="/images/zetto/youtube.png" alt="" /></Link>
                            <Link><img className='!w-[26px] !h-[26px]' src="/images/zetto/telegram.png" alt="" /></Link>
                        </div>
                    </div>
                    <div className='flex gap-4  my-3 md:my-10 px-12'>
                        <div><img className='!w-[100px] !h-auto' src="/images/zetto/gaming.webp" alt="" srcset="" /></div>
                        <div><img className='!w-[30px] !h-auto' src="/images/zetto/game-care1.webp" alt="" srcset="" /></div>
                        <div><img className='!w-[30px] !h-auto' src="/images/zetto/18plus1.png" alt="" srcset="" /></div>
                        <div><img className='!w-[30px] !h-auto' src="/images/zetto/gamble-aware.webp" alt="" srcset="" /></div>
                    </div>
                    <div className='text-center my-5 md:my-10 mx-5'>
                        <Link className='text-[14px]'>About us |</Link>
                        <Link className='text-[14px]'> Promotions |</Link>
                        <Link className='text-[14px]'> Contact Us |</Link>
                        <Link className='text-[14px]'> FAQs |</Link>
                        <Link className='text-[14px]'> Responsible Gambling |</Link>
                        <Link className='text-[14px]'> Terms and Conditions |</Link>
                        <Link className='text-[14px]'> Rules |</Link>
                        <Link className='text-[14px]'> Zetto Blog |</Link>
                        <Link className='text-[14px]'> Privacy Policy |</Link>
                        <Link className='text-[14px]'> Sitemap </Link>
                    </div>
                    <div className='mx-10 my-5 md:my-10'>
                        <img className='!w-[500px] !h-[50px] !md:h-[130px]' src="/images/zetto/affiliate1.png" alt="" srcset="" />
                    </div>
                </div></div>
    )
}
export default MobileFooter