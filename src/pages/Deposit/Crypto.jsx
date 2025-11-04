const Crypto = () => {
  return <div className="p-4 bg-white h-screen rounded-md shadow">
    <div className="rounded-lg max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="flex flex-wrap justify-center w-full gap-1 mt-10">
                 {[300, 1000, 2000, 5000, 10000, 25000].map((value) => (
                            <button
                                key={value}
                                className="py-3 px-3 rounded-lg border-2 font-bold text-sm bg-[--primary] text-[--white]"
                                // onClick={() => handleQuickAmountSelect(value, true)}
                                // className={`py-3 px-3 rounded-lg border-2 font-bold text-sm ${eWalletAmount == value
                                //     ? 'bg-[--primary] text-[--white]'
                                //     : 'bg-white text-[--primary] border-2 border-[--primary]'
                                //     }`}
                            >
                                ₹{value}
                            </button>
                        ))}
              
            </div>


              <div className="md:col-span-2">
                <label className="block text-sm mb-1">Amount *</label>
                <input
                  type="number"
                  className={`w-full p-1.5 bg-white border-2 border-secondary rounded-md text-black `}
                  placeholder="Amount"
                  // value={eWalletAmount}
                  // onChange={(e) => handleAmountChange(e, true)}
                />
                {/* {eWalletErrors.amount && (
                  <span className="text-red-500 text-xs">{eWalletErrors.amount}</span>
                )} */}
              </div>
              {/* <div>
                <label className="block text-sm mb-1">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={eWalletData.name}
                  onChange={handleEWalletInputChange}
                  className={`w-full p-1.5 bg-white border-2 border-secondary rounded-md text-black ${eWalletErrors.name ? "border-red-500 border" : ""
                    }`}
                  placeholder="Full Name"
                />
                {eWalletErrors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {eWalletErrors.name}
                  </p>
                )}
              </div> */}

              <div className="col-span-2">
                <label className="block text-sm mb-1">
                  Wallet Address
                </label>
                <input
                  type="text"
                  
                  className={`w-full  p-1.5 bg-white border-2 border-secondary rounded-md text-black `}
                  placeholder="Enter The Wallet Address"
                />
               
              </div>
            </div>

            
            <button
              type="submit"
              className="bg-[--primary] px-10 py-2 mt-6 text-sm text-white rounded-md block mx-auto"
              onClick={()=> alert("Crypto Deposit Comming Soon")}
              // onClick={handleEWalletSubmit}
              // disabled={isSubmitting}
            >
              { "Submit"}
            </button>
          </div>
  </div>;
};
export default Crypto;