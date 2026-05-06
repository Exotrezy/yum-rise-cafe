const Order = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Container for the iframe */}
      <div className="flex-grow w-full h-[800px] mt-16"> 
        <iframe
          src="https://www.toasttab.com/local/order/yumrisecafe-11020-harlem-road-suite-700"
          title="Online Ordering"
          className="w-full h-full border-none"
          allow="payment; geolocation"
        />
      </div>
    </div>
  );
};

export default Order;
