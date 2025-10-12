
import AppSidebar from '../component/layout/AppSidebar'
import AppHeader from '../component/layout/AppHeader'
import AppContent from '../component/layout/AppContent'
import { useEffect, useState } from 'react'
import MarqueeNotification from '../component/marquee/MarqueeNotification'
import AppRightSIdebar from '../component/layout/AppRightSidebar'
import AppFooter from '../component/layout/AppFooter'



const Layout = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isStakeModalOpen, setIsStakeModalOpen] = useState(false);

    const handleToggle = () => {
        document.body.classList.toggle("StakeModalOpen");
    };
    useEffect(() => {
        const checkSidebarStatus = () => {
            setIsStakeModalOpen(document.body.classList.contains("StakeModalOpen"));
        };
        checkSidebarStatus();
        const observer = new MutationObserver(checkSidebarStatus);
        observer.observe(document.body, { attributes: true });
        return () => observer.disconnect();
    }, []);


    return (
<>
        <section className="w-full h-screen flex flex-col overflow-hidden relative">
            <div className="shrink-0 z-10 lg:bg-white bg-black">
                <div className="">
                    <AppHeader setSidebarOpen={setIsSidebarOpen} />
                </div>
                <div><MarqueeNotification /></div>
            </div>

            <div className="md:flex flex-1 md:overflow-hidden overflow-auto relative">
                <div className={`${isSidebarOpen ? 'fixed' : 'hidden'} 
                lg:relative lg:block inset-0 lg:inset-auto py-1 lg:w-[250px] w-[55%] h-screen lg:h-auto z-20 lg:z-auto bg-[var(--backgroundmain)] overflow-y-auto scrollbar-hide`}>
                    <AppSidebar
                        isSidebarOpen={isSidebarOpen}
                        setIsSidebarOpen={setIsSidebarOpen}
                    />
                </div>

                <div className={`flex-1 h-auto overflow-y-auto bg-[var(--backgroundmain)] ${isSidebarOpen ? 'lg:ml-[0px] fixed inset-0 lg:static' : ''}`}>
                    <div className="p-1 h-full">
                        <AppContent />
                        
                    </div>
                </div>

                <div className={`lg:relative lg:block inset-0 lg:inset-auto py-1 lg:w-[250px] w-[55%] h-screen lg:h-auto z-20 lg:z-auto bg-[var(--backgroundmain)] overflow-y-auto scrollbar-hide`}>
                   <AppRightSIdebar />
                </div>

                {isSidebarOpen && (
                    <div
                        className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}
            </div>
         
        </section>
           <div className='w-full'>
                    <AppFooter />
                </div>
                </>
    )
}

export default Layout;