import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCasinoListByCateogeory, getCasinoListByProviderName } from "../../redux/reducers/user_reducer";
import Loader from "../../component/loader/Loader";

const CasinoListByProviderName = () => {
    const [providerWiseCasinoList, setProviderWiseCasinoList] = useState([]);
    const [categoryWiseCasinoList, setCategoryWiseCasinoList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Slot games"); // default category
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { providername } = useParams();
    const { getCasinoListByProviderNameData, loading, getCasinoListByCateogeoryData } = useSelector((state) => state.user);

    // Fetch provider data when the component mounts or provider name changes
    useEffect(() => {
        const reqData = { provider: providername };
        dispatch(getCasinoListByProviderName(reqData));
    }, [dispatch, providername]);

    useEffect(() => {
        if (getCasinoListByProviderNameData) {
            setProviderWiseCasinoList(getCasinoListByProviderNameData);
            // Extract unique categories from the fetched provider data
            const uniqueCategories = [...new Set(getCasinoListByProviderNameData.map(item => item.category))];
            setCategories(uniqueCategories);  // Set categories for dynamic tabs
        }
    }, [getCasinoListByProviderNameData]);

    // Fetch category-specific data whenever the selected category changes
    useEffect(() => {
        if (selectedCategory) {
            const reqData = { category: selectedCategory };
            dispatch(getCasinoListByCateogeory(reqData));
        }
    }, [dispatch, selectedCategory]);

    // Update category-wise list when the API data is received
    useEffect(() => {
        if (getCasinoListByCateogeoryData) {
            setCategoryWiseCasinoList(getCasinoListByCateogeoryData);
        }
    }, [getCasinoListByCateogeoryData]);

    const handleResponseCasino = (product) => {
        if (product?.gameId) {
            localStorage.getItem("token")
                ? window.location.href = (`/iframe-casino-new/${product?.providerName}/${product?.gameId}`)
                : localStorage.setItem("unauthorized", true);
        } else {
            if (!product.shortName || !product.eventId) return;
            localStorage.getItem("token")
                ? window.location.href = (`/${product.shortName}/${product.eventId}`)
                : localStorage.setItem("unauthorized", true);
        }
    };

    const sortedList = categoryWiseCasinoList?.filter(item => item.priority !== 0)
        .sort((a, b) => b.priority - a.priority);

    const finalList = [
        ...categoryWiseCasinoList?.filter(item => item.priority === 0),
        ...sortedList
    ];

        const uniqueList = finalList?.filter((item, index, self) =>
    index === self.findIndex((t) => t.gameId === item.gameId)
);
    return (
        loading ? <Loader /> :
            <>
                {/* Provider Title */}
                <div className="w-full rounded">
                    <div className="px-3  text-lg text-black font-bold">Provider: {providername}</div>
                </div>

                {/* Category Tabs */}
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-2 ">
                    {categories.map((category, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 h-16 text-sm font-bold capitalize rounded-lg ${selectedCategory === category ? 'bg-conic text-white' : 'bg-gray-200'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>


                {/* Provider-wise Casino Games */}
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-6 mb-20 py-3">
                    {uniqueList?.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-3 border-2 border-orange-600 rounded-lg">
                            <img
                                onClick={() => handleResponseCasino(item)}
                                src={item?.urlThumb}
                                alt={item?.gameName}
                                className="w-32 h-32 sm:w-32 sm:h-32 md:w-44 md:h-40 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </>
    );
};

export default CasinoListByProviderName;
