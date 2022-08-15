import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LoadingIcon } from "@components/common/loading-icon/loading-icon";
import { useEthPrice } from "hooks/use-eth-price";

export const EthRates = () => {
  const { eth } = useEthPrice();
  const ethPerItem = eth.perItem;
  const isLoading = eth.isValidating;

  const Logo = () => (
    <Image
      layout="fixed"
      height="35"
      width="35"
      src="/small-eth.webp"
      alt="eth"
    />
  );

  const [loading, setLoading] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) setLoading(false);
  }, [isLoading]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
      <div className="flex flex-1 items-stretch text-center">
        <div className="w-11/12 p-6 min-h-rate border drop-shadow rounded-md">
          {loading ? (
            <div className="fadeIn h-full flex items-center justify-center">
              <LoadingIcon className="text-indigo-500" />
            </div>
          ) : (
            eth?.data && (
              <div className="fadeIn">
                <div className="flex items-center justify-center">
                  <Logo />

                  <span className="text-2xl font-bold"> = ${eth?.data}</span>
                </div>
                <p className="text-xl text-gray-500">Current eth Price</p>
              </div>
            )
          )}
        </div>
      </div>
      <div className="flex flex-1 items-stretch text-center">
        <div className="w-11/12 p-6 min-h-rate border drop-shadow rounded-md">
          {loading ? (
            <div className="fadeIn h-full flex items-center justify-center">
              <LoadingIcon className="text-indigo-500" />
            </div>
          ) : (
            ethPerItem && (
              <div className="fadeIn">
                <div className="flex items-center justify-center">
                  <Logo />
                  <span className="text-2xl font-bold">{ethPerItem} = 15$</span>
                </div>
                <p className="text-xl text-gray-500">Price per course</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
